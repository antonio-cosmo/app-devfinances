import Link from 'next/link';
import { CurrencyCircleDollar } from 'phosphor-react'
import {Content } from '../../styles/content'
import { StyledHeader ,NavBar } from './styles';
export function Header() {
  return (
    <StyledHeader>
      <Content>
      <NavBar>
          <Link href="/">
            <span><i>c</i><CurrencyCircleDollar size={54} weight='fill' />oins</span>
          </Link>
          <ul>
            <li>
              <Link href="/projects">Projetos</Link>
            </li>
          </ul>
        </NavBar>
      </Content>
    </StyledHeader>
  )
}