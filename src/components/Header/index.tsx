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
            <span><CurrencyCircleDollar size={54} weight='fill' />dev.finances</span>
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