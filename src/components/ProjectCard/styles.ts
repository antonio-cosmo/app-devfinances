import Link from 'next/link';
import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme['gray-900'] };
  padding: .5em;
  border: 1px solid ${props => props.theme['gray-500']};
  border-radius: 5px;
  width: 24%;
  margin: 0.5%;
  h4 {
    color: ${props => props.theme.white};
    padding: 0.4rem;
    margin-bottom: 1.3rem;
    font-size: 1.3rem;
  }
  p {
    margin-bottom: 1em;
    span {
      font-weight: bold;
    }
  }
`;

export const Category = styled.p`
  display: flex;
  align-items: center;
  span {
    display: block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #ccc;
    margin-right: 5px;
    &.infra {
      background: ${props => props.theme.infra};
    }
    &.desenvolvimento {
      background: ${props => props.theme.desenvolvimento};
    }
    &.design {
      background: ${props => props.theme.design};
    }
    &.planejamento {
      background: ${props => props.theme.planejamento};
    }
  }
`;

export const Actions = styled.div`
  margin-top: 1.2em;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  a,
  button {
    text-decoration: none;
    background: ${props => props.theme['blue-700']};
    color: ${props=> props.theme.white};
    font-size: 0.9em;
    padding: 0.5em 1em;
    margin-top: 5px;
    cursor: pointer;
    border: 0;
    border-radius: 4px;
    transition: 0.5s;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  svg {
    margin-right: 0.5em;
  }
  a:hover,
  button:hover {
    background: ${props=> props.theme['blue-500']};
  }
  
`;

export const BtnDelete = styled.button`
    text-decoration: none;
    background: ${props => props.theme['blue-700']};
    color: ${props=> props.theme.white};
    font-size: 0.9em;
    padding: 0.5em 1em;
    margin-top: 5px;
    cursor: pointer;
    border: 0;
    border-radius: 4px;
    transition: 0.5s;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const BtnEdit = styled(Link)`
    text-decoration: none;
    background: ${props => props.theme['blue-700']};
    color: ${props=> props.theme.white};
    font-size: 0.9em;
    padding: 0.5em 1em;
    margin-top: 5px;
    cursor: pointer;
    border: 0;
    border-radius: 4px;
    transition: 0.5s;
    display: flex;
    align-items: center;
    justify-content: center;
`;
