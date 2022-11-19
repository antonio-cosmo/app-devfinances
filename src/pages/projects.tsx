import * as Dialog from '@radix-ui/react-dialog';
import { useState } from 'react';
import { NewProjectModal } from '../components/NewProjectModal';
import { ProjectCard } from "../components/ProjectCard"
import { Content } from "../styles/content"
import { NewProjectButton, StyledProjects } from "../styles/projects.styles"
export default function Projects(){
  const [openModal, setOpenModal] = useState(false);
  const handleToggleModal = ()=>{
    setOpenModal(!openModal);
  }
    return (
    <StyledProjects>

      <div className='title'>
        <h1>Meus Projetos</h1>

        <Dialog.Root open={openModal} onOpenChange={handleToggleModal}>
        <Dialog.Trigger asChild>
          <NewProjectButton>
            Novo projeto 
          </NewProjectButton>
        </Dialog.Trigger>
        <NewProjectModal handlToggleModal={handleToggleModal}/>
        </Dialog.Root>
        
      </div>
      <Content className='start'>
        <ProjectCard/>
      </Content>
    </StyledProjects>

    )
}