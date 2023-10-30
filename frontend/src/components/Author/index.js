import React, { useState, useEffect } from 'react';
import { AiOutlinePlus } from 'react-icons/ai'; // Importe o ícone de adição
import * as C from './styles';

export const Author = () => {
    const [authorName, setAuthorName] = useState('');
    const [authors, setAuthors] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSave = async () => {
        if (!authorName) {
            alert('Informe o nome do autor!');
            return;
        }

        try {
            // Enviar a solicitação POST para a API para adicionar um autor
            const response = await fetch('http://localhost:3002/author/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ author_name: authorName }),
            });

            if (response.ok) {
                alert('Autor cadastrado com sucesso!');
                setAuthorName('');
            } else {
                alert('Erro ao cadastrar autor.');
            }
        } catch (error) {
            console.error('Erro ao cadastrar autor:', error);
        }
    };

    useEffect(() => {
        // Buscar a lista de autores registrados através do endpoint GET
        const fetchAuthors = async () => {
            setLoading(true);
            try {
                const response = await fetch('http://localhost:3002/author/all');
                if (response.ok) {
                    const data = await response.json();
                    setAuthors(data);
                }
            } catch (error) {
                console.error('Erro ao buscar autores:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchAuthors();
    }, []);

    return (
        <>
            <C.Container>
                <C.Row>

                    <C.Col>
                        <C.InputGroup>
                            <C.InputContent>
                                <C.Input
                                    value={authorName}
                                    placeholder='Digite o nome do Autor'
                                    onChange={(e) => setAuthorName(e.target.value)}
                                />
                            </C.InputContent>

                            <C.Button onClick={handleSave}>
                                <AiOutlinePlus />
                            </C.Button>
                        </C.InputGroup>
                    </C.Col>



                    <C.Col>
                        <C.AuthorListContainer>
                            <C.AuthorList>
                                {loading ? (
                                    <p>Carregando autores...</p>
                                ) : (
                                    <ul>
                                        {authors.map((author) => (
                                            <li key={author.id}>{author.author_name}</li>
                                        ))}
                                    </ul>
                                )}
                            </C.AuthorList>
                        </C.AuthorListContainer>
                    </C.Col>

                </C.Row>
            </C.Container>
        </>
    );
};
