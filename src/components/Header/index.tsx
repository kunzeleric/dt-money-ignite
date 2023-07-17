import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import logoImg from '../../assets/logo.svg';
import * as Dialog from '@radix-ui/react-dialog';
import { NewTransactionModal } from "../NewTransactionModal";

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logoImg} alt="" />

                <Dialog.Root>
                    {/* Propriedade asChild permite que um elemento aproveite o outro dentro da tag, para não criar um botão em cima de outro.*/}
                    <Dialog.Trigger asChild>
                        <NewTransactionButton>Nova Transação</NewTransactionButton>
                    </Dialog.Trigger>

                    <NewTransactionModal />
                </Dialog.Root>
                
            </HeaderContent>
        </HeaderContainer>
    )
}