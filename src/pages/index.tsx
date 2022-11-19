import Image from 'next/image';
import * as Dialog from '@radix-ui/react-dialog';
import savings from '../assets/img/savings.svg';
import {Container, NewProjectButton} from '../styles/home.styles';
import { useState } from 'react';
import { NewProjectModal } from '../components/NewProjectModal';

export default function Home() {
  const [openModal, setOpenModal] = useState(false);
  const handleToggleModal = ()=>{
    setOpenModal(!openModal);
  }
  return (
    <Container>
      <h1>
        Bem-vindo ao <span>Coins</span>
      </h1>
      <p>Comece a gerenciar os seus projetos agora mesmo</p>
      <Dialog.Root open={openModal} onOpenChange={handleToggleModal}>
        <Dialog.Trigger asChild>
          <NewProjectButton>
            Criar projeto
          </NewProjectButton>
        </Dialog.Trigger>
        <NewProjectModal handlToggleModal={handleToggleModal}/>
      </Dialog.Root>
      
      <Image src={savings} alt=''/>
    </Container>
  )
}
