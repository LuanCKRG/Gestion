import { useContext } from 'react'

import firebase from '../../../Lib/Firebase'
import SearchContext from '../Context/Search/Context'


import { IconButton } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'

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

interface AlunoCardType {
    index: number,
    aluno: Estudante
}

export const AlunoCard: React.FC<AlunoCardType> = ({ index, aluno }) => {

    const { setIsUpdating, IsUpdating } = useContext(SearchContext)
    const db = firebase.firestore()


    function DeleteAluno(nome: string) {
        setIsUpdating(!IsUpdating)

        db.collection('Alunos').doc(nome).delete()
            .then(
                () => {
                    console.log('Document successfully deleted!')
                }
            )
            .catch(
                (error) => {
                    console.error('Error removing document: ', error)
                }
            )

        setIsUpdating(!IsUpdating)
    }


    return (
        <div key={index} className={'card-container'}>
            <div className={'card-header'}>
                <h2>{aluno.Nome}</h2>
            </div>
            <div className={'card-body'}>
                <section>
                    <h3>Informaçõs gerais</h3>

                    <div className={'inform'}>
                        <span>Registro Geral</span>
                        <input type='number' value={aluno.RG} readOnly />
                    </div>
                    <div className={'inform'}>
                        <span>CPF</span>
                        <input type='text' value={aluno.CPF} readOnly />
                    </div>
                    <div className={'inform'}>
                        <span>Idade</span>
                        <input type='text' value={aluno.Idade} readOnly />
                    </div>
                    <div className={'inform'}>
                        <span>Nascimento</span>
                        <input type='text' value={aluno.Nascimento} readOnly />
                    </div>
                </section>

                <section>
                    <h3>Contato</h3>

                    <div className={'inform'}>
                        <span>Telefone</span>
                        <input type='text' value={aluno.Telefone} readOnly />
                    </div>
                    <div className={'inform'}>
                        <span>Rua</span>
                        <input type='text' value={aluno.Rua} readOnly />
                    </div>
                    <div className={'inform'}>
                        <span>Casa</span>
                        <input type='text' value={aluno.Casa} readOnly />
                    </div>
                </section>

                
                <IconButton onClick={() => DeleteAluno(aluno.Nome)} aria-label='delete'>
                    <DeleteIcon />
                </IconButton>

            </div>
        </div>
    )
}