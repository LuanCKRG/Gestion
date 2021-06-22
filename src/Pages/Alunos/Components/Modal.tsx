import { useState, useEffect, useContext } from 'react'
import { FormateAgeAndBorning } from './Assets'

import { Container } from '../styles'
import firebase from '../../../Lib/Firebase'

import SearchContext from '../Context/Search/Context'
import { AlunoCard } from './Aluno'


interface Estudante {
    Nome: string,
    Nascimento: string,
    Telefone: string,
    Email: string,
    Idade: number,
    CPF: string,
    RG: string,
    Rua: string,
    Bairro: string,
    Casa: string,
    Schedule: string,
    Dia: string
}

export const Modal: React.FC = (props) => {
    const { Search, IsUpdating, setIsUpdating } = useContext(SearchContext)
    const db = firebase.firestore()

    const [Alunos, setAlunos] = useState<Estudante[]>([])
    const [isDeletando, setIsDeletando] = useState<boolean>(false)
    const Generic: any = []
    const AlunosFiltrados: Estudante[] = []


    function CheckSearch() {
        setIsUpdating(!IsUpdating)
        Alunos.forEach(
            (Aluno) => {
                if (Aluno.Nome.includes(Search)) {
                    AlunosFiltrados.push(Aluno)
                }
            }
        )
        setAlunos(AlunosFiltrados)
        setIsUpdating(!IsUpdating)

    }

    function GetAlunos() {
        db.collection('Alunos').get().then(
            (querySnapshot: any) => {
                querySnapshot.forEach(
                    (doc: any) => {
                        
                        Generic.push(FormateAgeAndBorning(doc.data()))
                    }
                )
                setAlunos(Generic)
            }
        )
    }


    useEffect(
        () => {
            if (Search === '') {
                GetAlunos()
            }
            else {
                CheckSearch()
            }

        }, [IsUpdating]
    )

    return (
        <Container>
            {Alunos.map(
                (aluno, index) => {
                    return(
                        <AlunoCard index={index} aluno={aluno}/>
                    )
                }
            )}
        </Container>
    )
}