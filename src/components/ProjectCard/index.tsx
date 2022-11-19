import {Container, Category, Actions, BtnDelete, BtnEdit} from './styles'

export function ProjectCard() {
  
  return (
    <Container>
      <h4>Name Project</h4>
      <p>
        <span>Orçamento: </span>
        500.00
      </p>
      <Category>
        <span className="infra"></span> Infra
      </Category>
      <Actions>
        <BtnEdit href="#">
           Editar
        </BtnEdit>
        <BtnDelete>
          Excluir
        </BtnDelete>
      </Actions>
    </Container>
  )
}