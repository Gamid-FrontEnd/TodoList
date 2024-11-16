import styled from "styled-components";

export const TodoItemContainer = styled.div<{ $isDone: boolean; }>`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border: 1px solid black;
    border-radius: 5px;
    width: 500px;
    height: 60px;

    background-color: ${props => props.$isDone ? '#8a9b0f' : '#f4ead5'};
`

export const TodoItemText = styled.p`
    display: flex;
    align-items: center;
    justify-content: start;
    overflow: hidden;

    padding: 10px;
    border-left: 1px solid black;

    line-height: 14px;
    width: 100%;
    height: 100%;
`

export const TodoItemButtonsWrap = styled.div`
display: flex;
flex-direction: row;
gap: 5px;
`

export const TodoItemButton = styled.div`
    width: 20px;
    height: 20px;
    margin: 0;
    padding: 0;

    cursor: pointer;

    p {

        width: 20px;
        height: 20px;
        margin: 0;
        font-size: 29px;
        line-height: 20px;
        text-align: center;
    }

`

export const TodoItemDateOutput = styled.div`
margin-right: 10px;
    .date {
        font-size: 15px;
        color: black;
        font-weight: 900;
    }

    .time {
        font-size: 15px;
        color: black;
        font-weight: 200;
    }
`