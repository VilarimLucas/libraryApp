import React from 'react';
import { FaBook } from 'react-icons/fa'; // Importe o ícone desejado
import * as C from "./styles";

export const Header = () => {
    return (
        <C.Container>
            <C.Header>
                <FaBook size={20} /> {/* Adicione o ícone com um tamanho personalizado */}
                <C.Title> Livraria </C.Title> {/* Atualize o título */}
            </C.Header>
        </C.Container>
    );
};
export default Header;
