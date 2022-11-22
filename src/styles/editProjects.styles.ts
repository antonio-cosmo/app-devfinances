import styled from 'styled-components';

export const StyledEditProjects = styled.div`
  width: 100%;
  margin-top: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1,
  h2,
  p {
    margin-bottom: 0.5em;
  }
  h2 {
  }
  #msg{
    color: var(--text-body);
    font-weight: bold;
  }
`

// export const Content = styled.div`
//   display: flex;
//   justify-content: space-between;
//   &.start{
//     justify-content: flex-start;
//     flex-wrap: wrap;
//   }
//   &.column{
//     flex-direction: column;
//     justify-content: flex-start;
//   }
// `

export const Details = styled.div`
  border-bottom: 1px solid #7a7a7a;
  padding-bottom: 1.2em;
  margin-bottom: 1.2em;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  
`;

export const Button = styled.button`
  background-color: #222;
  color: #fff;
  padding: 0.5em 1em;
  text-decoration: none;
  transition: 0.5s;
  border: none;
  cursor: pointer;
  max-height: 40px;
  &:hover {
    color: #ffbb33;
  }
`

export const Form = styled.div`
  width: 100%;
  p {
    color: var(--text-body);
    span {
      font-weight: bold;
    }
  }
  button[type='submit'] {
      border: 0;
      background: ${props => props.theme['blue-700']};   
      color: ${props => props.theme.white};
      font-weight: bold;
      padding: 0.5rem 1rem;
      border-radius: 6px;
      margin-top: 1rem;
      cursor: pointer;
      &:hover {
        background: ${props => props.theme['blue-500']};
        transition: background-color 0.2s;
      }
      
  }
`

export const Services = styled.div`
  border-bottom: 1px solid #7a7a7a;
  padding-bottom: 1.2em;
  margin-bottom: 1.2em;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  h2 {
    color: var(--text-title);
  }
`

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

export const SelectContainer =styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
  label{
    margin-bottom: .6em;
    font-weight: bold;
  }
  select{
    padding: .7em;
    border-radius: 0;
    border: none;
    background: ${props => props.theme["gray-900"]};
    color: ${props => props.theme["gray-300"]};
  }
`