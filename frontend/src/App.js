import React from 'react'
import GlobalStyle from './styles/global';
import {Header} from './components/Header';
import { Author } from './components/Author';
import { Category } from './components/Category';


const App = () => {
    return (
        <>
            <Header/>
            <Author/>
            <Category/>
            <GlobalStyle />
        </>
    )
}

export default App
