import styled from "styled-components";

export const TodoListWrap = styled.div`
display: flex;
height: 100vh;
flex-direction: column;
align-items: center;
justify-content: center;
`

export const SortingWrap = styled.div`
display: flex;
align-items: center;
margin: 0 0 20px 0;
display: flex;
gap: 10px;
`

export const TodoListContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 545px;
    height: 355px;
    margin: 20px 0 20px 0;


    overflow-y: auto;

    &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`

export const SearchInput = styled.input`
margin: 0 10px 0 0;
width: 350px;
height: 20px;
padding: 5px;

border-radius: 5px;
`

export const DateSortButton = styled.button`
align-items: center;
background-color: #FFFFFF;
border: 1px solid rgba(0, 0, 0, 0.1);
border-radius: .25rem;
box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
box-sizing: border-box;
color: rgba(0, 0, 0, 0.85);
cursor: pointer;
display: inline-flex;
font-family: system-ui,-apple-system,system-ui,"Helvetica Neue",Helvetica,Arial,sans-serif;
font-size: 16px;
font-weight: 600;
justify-content: center;
line-height: 1.25;
margin: 0;
min-height: 3rem;
padding: calc(.875rem - 1px) calc(1.5rem - 1px);
position: relative;
text-decoration: none;
transition: all 250ms;
user-select: none;
-webkit-user-select: none;
touch-action: manipulation;
vertical-align: baseline;
width: 190px;
&:hover,
&:focus {
  border-color: rgba(0, 0, 0, 0.15);
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  color: rgba(0, 0, 0, 0.65);
}
&:hover {
  transform: translateY(-1px);
}
&:active {
  background-color: #F0F0F1;
  border-color: rgba(0, 0, 0, 0.15);
  box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
  color: rgba(0, 0, 0, 0.65);
  transform: translateY(0);
}
`