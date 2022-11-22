import styled from "styled-components";

export const InputContainer =styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
  label{
    margin-bottom: .6em;
    font-weight: bold;
  }
  
  input {
    border-radius: 6px;
    border: 0;
    background: ${props => props.theme["gray-900"]};
    color: ${props => props.theme["gray-300"]};
    padding: 1rem;
    &::placeholder {
      color: ${props => props.theme["gray-500"]};
    }
  }
   
  
`