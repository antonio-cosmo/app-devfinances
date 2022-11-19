import Image from 'next/image';
import savings from '../assets/img/savings.svg';
import {Container, LinkBtn} from '../styles/home.styles';

export default function Home() {
  return (
    <Container>
      <h1>
        Bem-vindo ao <span>Coins</span>
      </h1>
      <p>Comece a gerenciar os seus projetos agora mesmo</p>
      <LinkBtn href="#">
        Criar projeto
      </LinkBtn>
      <Image src={savings} alt=''/>
    </Container>
  )
}
