import styled from 'styled-components'

/* --------------------------------------------- */
export const AlunoForm = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
`
/* --------------------------------------------- */
export const CampoCadastro = styled.fieldset`
    border: 2px var(--text) solid;
    border-radius: 8px;

    background-color: var(--complement);
`
/* --------------------------------------------- */
export const Legend = styled.legend`
    padding: 0 3px 0 5px;
    letter-spacing: 3.5px;

    border: 2px solid var(--text);
    border-radius: 45px;
    background-color: var(--background);

    margin: 0 auto;
`
/* --------------------------------------------- */
export const Label = styled.label`
    display: inline-flex;
    font-size: 1.5rem;
    padding: 10px 0 0 10px;
`
/* --------------------------------------------- */
export const Input = styled.input`
    display: flex;
    flex: 1;
    padding: 8px 10px;
    width: 170px;
    border-radius: 7px;
    border: none;
    margin: 7px;

    font-size: 1rem;
    background-color: var(--background);
    color: var(--snow);

    &:focus{
        border: 1px solid var(--text);
    }
`
/* --------------------------------------------- */
export const ContainerSection = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 30px;

    input[type=number]::-webkit-inner-spin-button { 
        -webkit-appearance: none;
    }
    input[type=number] { 
        -moz-appearance: textfield;
        appearance: textfield;
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 568px) {
        display: flex;
        flex-direction: column;
    }

    div{
       width: 170px;
       padding: 3px 5px;
       margin: 0px 5px;
    }
`
/* --------------------------------------------- */
export const ButtonSection = styled.section`
    display:flex;
    align-items: center;
    justify-content: center;
   
    margin: 7px;
`
/* --------------------------------------------- */
export const Button = styled.button`
    cursor: pointer;
    margin: auto;
    color: var(--text);
    font-size: 1.25rem;

    border-radius: 45px;
    border: 2px solid var(--text);
    background-color: var(--background);

    width: 150px;
    height: 50px;
    transition: 300ms;

    :focus{
        opacity: 0.8;
        transition: 300ms;
    }

    :hover{
        transform: scale(1.1);
        transition: 300ms;
    }
`

export const Select = styled.select`
    color: var(--text);
    background-color: var(--background);
    width: 170px;

    display: flex;
    text-align: center;
    text-align-last: center;

    flex: 1;
    padding: 8px 10px;
    border-radius: 7px;
    border: none;
    margin: 7px;    

    font-size: 1rem;

    &:hover{
        border: 1px solid var(--text);
    }

`