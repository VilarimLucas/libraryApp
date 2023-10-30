import React, { useState, useEffect } from 'react';
import { AiOutlinePlus } from 'react-icons/ai'; // Importe o ícone de adição
import * as C from './styles';


export const Category = () => {
    const [categoryDescription, setCategoryDescription] = useState('');
    const [categorys, setCategorys] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSave = async () => {
        if (!categoryDescription) {
            alert('Informe o nome do Categoria!');
            return;
        }

        try {
            // Enviar a solicitação POST para a API para adicionar um Categoria
            const response = await fetch('http://localhost:3002/category/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ category_description: categoryDescription }),
            });

            if (response.ok) {
                alert('Categoria cadastrada com sucesso!');
                setCategoryDescription('');
            } else {
                alert('Erro ao cadastrar Categoria.');
            }
        } catch (error) {
            console.error('Erro ao cadastrar Categoria:', error);
        }
    };

    useEffect(() => {
        // Buscar a lista de Categoriaes registrados através do endpoint GET
        const fetchCategorys = async () => {
            setLoading(true);
            try {
                const response = await fetch('http://localhost:3002/category/all');
                if (response.ok) {
                    const data = await response.json();
                    setCategorys(data);
                }
            } catch (error) {
                console.error('Erro ao buscar Categoriaes:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchCategorys();
    }, []);

    return (
        <>
            <C.Container>
                <C.Row>

                    <C.Col>
                        <C.InputGroup>
                            <C.InputContent>
                                <C.Input
                                    value={categoryDescription}
                                    placeholder='Digite o nome da Categoria'
                                    onChange={(e) => setCategoryDescription(e.target.value)}
                                />
                            </C.InputContent>

                            <C.Button onClick={handleSave}>
                                <AiOutlinePlus />
                            </C.Button>
                        </C.InputGroup>
                    </C.Col>



                    <C.Col>
                        <C.CategoryListContainer>
                            <C.CategoryList>
                                {loading ? (
                                    <p>Carregando Categoriaes...</p>
                                ) : (
                                    <ul>
                                        {categorys.map((Category) => (
                                            <li key={Category.id}>{Category.category_description}</li>
                                        ))}
                                    </ul>
                                )}
                            </C.CategoryList>
                        </C.CategoryListContainer>
                    </C.Col>

                </C.Row>
            </C.Container>
        </>
    );
};
