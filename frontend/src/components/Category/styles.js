import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1140px; /* Largura máxima do container */
  margin-top:20px;
  margin-right: auto;
  margin-left: auto;
  background-color: #fff;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  padding: 15px 0px;
  gap: 10px;
  
  @media (max-width: 750px){
    display: grid;
    }
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px; /* Compensar margem negativa das colunas */
  margin-left: -15px; /* Compensar margem negativa das colunas */
`;

export const Col = styled.div`
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  padding-right: 15px;
  padding-left: 15px;
`;

export const InputContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputGroup = styled.div`
  display: flex;
  align-items: stretch;
  width: 100%;
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: bold;
`;

export const Input = styled.input`
  outline: none;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
`;


export const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  background-color: teal;
  font-size: 16px;
  font-weight: bold;
`;

export const CategoryListContainer = styled.div`
  max-height: 75px; /* Altura máxima de 50px com barra de rolagem se necessário */
  overflow-y: auto;
  width: 100%;
`;

export const CategoryList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const CategoryItem = styled.li`
  font-size: 12px;
  width: 100%;
  word-break: break-word; /* Quebrar palavras longas em várias linhas */
`;
