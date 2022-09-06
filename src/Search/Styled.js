import styled from "styled-components"

export const Main = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  background-color: lightgrey;
`

export const Tools = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 10px;
  height:25px;
  margin: 10px;
  border: 1px solid black;
  border-radius: 10px;
`
export const ListDiv = styled.div`
  display: grid;
  width:500px;
  height: 400px;
  overflow: scroll;
  grid-template-columns: auto auto auto;
  background-color: #2196f3;
  padding: 10px;
`
export const List = Tools

export const Input = styled.input`
  width: 300px;
  height: 30px;
  font-size: 17px;
  outline: none;
  ::placeholder {
    font-size: 13px;
    font-style: italic;
    color: red;
  }
`
