import React from 'react'
import GlobalStyle from './styles/global';
import {Header} from './components/Header';
import { Author } from './components/Author';


const App = () => {
    return (
        <>
            <Header/>
            <Author/>
            <GlobalStyle />
        </>
    )
}

export default App
