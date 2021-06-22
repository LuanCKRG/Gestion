import styled from "styled-components";


export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    
    display: flex;

    background-color: white;
    color: black;
`
export const Cadastro = styled.div`
    width: 27%;

    display: flex;
    flex-direction:column;

    margin: auto;
    padding: 50px 10px;
    
    border: solid 2px black;

    @media (max-width: 425px) {
      width: 100%;
      height: 100%;
    }

    main{
        display: flex;
        flex-direction: column;
        align-items: center;

        h2{
            margin-bottom: 16px;
        }

        div{
            width: 83%;

            font-size: 1rem;
            margin: 5px ;

        }

        button{
            width: 48%;
            padding: 10px 5px 10px 5px;
            margin: 10px 0;

            border-radius: 45px;
            border: 2px black solid;
            cursor: pointer;

            &:hover{
                outline: none;

                background-color: gray;
            }
        }
    }

`