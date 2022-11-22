import { InputContainer } from "./styles";

export function Service() {
    return (
        <form>
            <InputContainer>
                <label htmlFor="name">
                    Nome do serviço
                </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Insira o nome do serviço"
                    autoComplete='off'
                />
            </InputContainer>
            <InputContainer>
                <label htmlFor="cost">
                    Custo do serviço
                </label>
                <input
                    type="number"
                    name="cost"
                    id="cost"
                    placeholder="Insira o custo total"
                    autoComplete='off'
                />
            </InputContainer>
            <InputContainer>
                <label htmlFor="description">
                    Descrição do serviço
                </label>
                <input
                    type="text"
                    name="description"
                    id="description"
                    placeholder="Descrição do serviço"
                    autoComplete='off'
                />
            </InputContainer>
        </form>
    )
}