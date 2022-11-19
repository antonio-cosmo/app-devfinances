import Link from 'next/link';
import styled from 'styled-components';

export const StyledProjects = styled.section`
  width: 100%;
  min-height:100vh;
  margin: 0 auto;
  padding: 2rem;
  margin-top: 8rem;
  .title{
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
    color: var(--text-title);
    h1 {
      font-size: 2rem ;
    }
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