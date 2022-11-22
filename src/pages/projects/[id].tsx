import { useState } from "react";
import { Service } from "../../components/Service";
import { useProjects } from "../../context/project.context";
import { Content } from "../../styles/content";
import { Button, Details, Form, InputContainer, SelectContainer, Services, StyledEditProjects } from "../../styles/editProjects.styles";

export default function EditProject() {
  const { categories } = useProjects()
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [showServiceForm, setShowServiceForm] = useState(false)
  const toggleProjectForm = () => {
    setShowProjectForm(!showProjectForm);
  }
  const toggleServiceForm = () => {
    setShowServiceForm(!showServiceForm)
  }
  return (
    <Content>
      <StyledEditProjects>
        <Details>
          <h1>Projeto: Name Project</h1>
          <Button onClick={toggleProjectForm}>
            {!showProjectForm ? 'Editar' : 'Fechar'}
          </Button>
          {!showProjectForm ? (
            <Form>
              <p>
                <span>Categoria:</span> Infra
              </p>
              <p>
                <span>Total do orçamento:</span>
                5000,00
              </p>
              <p>
                <span>Total utilizado:</span>
                2000,00
              </p>
            </Form>
          ) : (
            <Form>
              <InputContainer>
                <label htmlFor="name">
                  Nome do projeto
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Insira o nome do Projeto"
                  autoComplete='off'
                />
              </InputContainer>
              <InputContainer>
                <label htmlFor="budget">
                  Orçamento do projeto
                </label>
                <input
                  type="number"
                  name="budget"
                  id="budget"
                  placeholder="Insira o orçamento total"
                  autoComplete='off'
                />
              </InputContainer>
              <SelectContainer>
                <label htmlFor="categoryId">
                  Selecione a categoria
                </label>
                <select
                  name="categoryId"
                  id="categoryId"
                >
                  <option>Selecione uma opção</option>
                  {
                    categories.map(op => (
                      <option key={op.id} value={op.id}>{op.name}</option>
                    ))
                  }

                </select>
              </SelectContainer>
              <button type="submit">Concluir</button>
            </Form>
          )}
        </Details>
        <Services>
          <h2>Adicione um serviço:</h2>
          <Button onClick={toggleServiceForm}>
            {!showServiceForm ? 'Adicionar' : 'Fechar'}
          </Button>
          <Form>
            {showServiceForm && (
              <Service/>
            )}
          </Form>
        </Services>

      </StyledEditProjects>
    </Content>
  )
}