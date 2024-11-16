const express = require("express");
const cors = require("cors");
const admin = require("firebase-admin");
const serviceAccount = require("./firebase-adminsdk-todolist.json");

const app = express();

const PORT = 5000;

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

app.use(express.json());
app.use(cors());

const db = admin.firestore();
const todosCollection = db.collection("todos");

let todos = [];

let getTodos = async () => {
  const snapshot = await todosCollection.get();

  if (snapshot.empty) {
    return res.status(404).send("No todos found");
  }

  todos = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

getTodos();

app.get("/todos", async (req, res) => {
  try {
    res.json(todos);
  } catch {
    res.status(500).send("Error fetching todos: " + error.message);
  }
});

app.post("/todos", async (req, res) => {
  try {
    const newTodo = ({ todo, isDone, when } = req.body);
    const docRef = await todosCollection.add(newTodo);
    newTodo.id = docRef.id;
    todos.push(newTodo);
    res.json(newTodo);
  } catch (error) {
    res.status(500).send("Error creating todo: " + error.message);
  }
});

app.put("/todos/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const index = todos.findIndex((todo) => todo.id === id);

    todos[index] = { ...todos[index], ...req.body };
    await todosCollection.doc(id).update(req.body);
    res.json(todos[index]);
  } catch (error) {
    res.status(500).send("Error updating todo: " + error.message);
  }
});

app.delete("/todos/:id", async (req, res) => {
  try {
    const id = req.params.id;
    todos = todos.filter((todo) => todo.id !== id);
    await todosCollection.doc(id).delete();
    res.json(todos);
  } catch (error) {
    res.status(500).send("Error deleting todo: " + error.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
