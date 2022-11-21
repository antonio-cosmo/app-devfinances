import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'
// import { darken, transparentize } from 'polished'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0,0,0,0.75);
`
export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: ${props => props.theme["gray-800"]};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  h2 {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
  form{
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    button[type='submit'] {
      height: 50px;
      border: 0;
      background: ${props => props.theme['blue-700']};   
      color: ${props => props.theme.white};
      font-weight: bold;
      padding: 0 1.25rem;
      border-radius: 6px;
      margin-top: 1.25rem;
      cursor: pointer;
      &:hover {
        background: ${props => props.theme['blue-500']};
        transition: background-color 0.2s;
      }
      
    }
  }
`

export const Close = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: none;
  right: 1.5rem;
  top: 1.5rem;
  line-height: 0;
  cursor: pointer;
  color: ${props => props.theme["gray-500"]};
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