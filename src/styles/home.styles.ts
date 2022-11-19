import styled  from 'styled-components';
import Link from 'next/link'
export const Container = styled.section`
  width: 100%;
  height: calc(100vh - 4rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4em;
  margin-top: 8rem;
  h1{
    font-size: 2.5em;
    margin-bottom: .5em;
    span {
      color: ${props => props.theme['blue-500']};
    }
  }
 p {
    margin-bottom: 1.5em;
  }
  img {
    width: 350px;
    margin: 2em 0;
  }
`


export const NewProjectButton = styled.button`
  background: ${props => props.theme['blue-700']};
  color: ${props => props.theme.white};
  font-weight: bold;
  padding: 1em 1em;
  text-decoration: none;
  transition: 0.5s;
  border: 0;
  border-radius: 5px;
  &:hover{
    background: ${props => props.theme['blue-500']};
  }
`
