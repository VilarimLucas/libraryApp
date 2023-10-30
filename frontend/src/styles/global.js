import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`

/*** Button ***/
.btn {
    transition: .5s;
}

.btn-square {
    width: 38px;
    height: 38px;
}

.btn-sm-square {
    width: 32px;
    height: 32px;
}

.btn-lg-square {
    width: 48px;
    height: 48px;
}

.btn-square,
.btn-sm-square,
.btn-lg-square {
    padding: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: normal;
    border-radius: 50px;
}


/*** Layout ***/
.sidebar {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 250px;
    height: 100vh;
    overflow-y: auto;
    background: var(--secondary);
    transition: 0.5s;
    z-index: 999;
}

.content {
    margin-left: 250px;
    min-height: 100vh;
    background: var(--dark);
    transition: 0.5s;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Poppins', Sans-Serif;
    background-color: #f2f2f2;
}
`;
export default Global;