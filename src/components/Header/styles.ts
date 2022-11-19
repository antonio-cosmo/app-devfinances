import styled from 'styled-components';

export const StyledHeader = styled.div`
  background: ${props => props.theme['gray-900']};
  position: fixed ;
  left: 0 ;
  right: 0 ;
  top: 0 ;
`;
export const NavBar = styled.nav`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  a{
    text-decoration: none;
    span{
      font-size: 32px;
      font-style: italic;
      font-weight: bold;
      color: ${props => props.theme['gray-100']};
      i{
        text-transform: uppercase;
        font-size: 50px;
      }
      svg{
        color: ${props => props.theme['blue-500']};
      }
    }
    
  }
  
  ul{
    display: flex;
    list-style: none;
    align-items: center;
  }
  
  li{
    margin-right: 1rem;
    a{
      color: ${props => props.theme['gray-100']};
      text-decoration: none;
      font-size: 1.2rem;
    }
    a:hover{
      color: ${props => props.theme['blue-500']};
    }
  }
   
`