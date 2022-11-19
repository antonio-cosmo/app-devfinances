import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import { FormEvent } from 'react'
import { Content, Overlay, Close, InputContainer, SelectContainer } from './styles'

interface INewprojectModalProps {
    handlToggleModal: () => void
}


export function NewProjectModal({ handlToggleModal }: INewprojectModalProps) {

    const handleSubmit =(e:FormEvent)=>{
        e.preventDefault();
    }

    return (

        <Dialog.Portal>
            <Overlay />
            <Content>
                <Dialog.Title> Cadastrar Projeto</Dialog.Title>
                <form onSubmit={handleSubmit}>
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
                            <option>Infra</option>
                            <option>Desenvolvimento</option>

                        </select>
                    </SelectContainer>
                    <button type="submit">Cadastrar</button>
                </form>

                <Close onClick={handlToggleModal}> <X size={24} weight="light" /></Close>
            </Content>
        </Dialog.Portal>

    )
}