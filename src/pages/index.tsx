import Image from 'next/image';
import * as Dialog from '@radix-ui/react-dialog';
import savings from '../assets/img/savings.svg';
import {Container, NewProjectButton} from '../styles/home.styles';
import { useState } from 'react';
import { NewProjectModal } from '../components/NewProjectModal';
import { Api } from '../services/api';
import { useProjects } from '../context/project.context';

interface Category{
  id: string,
  name: string
}

interface HomeProps{
  categories: Category[]
}
export default function Home({categories}:HomeProps) {
  const [openModal, setOpenModal] = useState(false);
  const {addCategories} = useProjects();

  addCategories(categories);
  const handleToggleModal = ()=>{
    setOpenModal(!openModal);
  }
  return (
    <Container>
      <h1>
        Bem-vindo ao <span>dev.finances</span>
      </h1>
      <p>Comece a gerenciar os seus projetos agora mesmo</p>
      <Dialog.Root open={openModal} onOpenChange={handleToggleModal}>
        <Dialog.Trigger asChild>
          <NewProjectButton>
            Criar projeto
          </NewProjectButton>
        </Dialog.Trigger>
        <NewProjectModal handlToggleModal={handleToggleModal} />
      </Dialog.Root>
      
      <Image src={savings} alt='' priority />
    </Container>
  )
}

export async function getServerSideProps(){
  const res = await Api.get('/categories');
  const categories = res.data;

  return{
      props:{
          categories
      }
  }
}