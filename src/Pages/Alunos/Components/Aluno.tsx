import { useContext, useEffect, useState, memo } from 'react'

import firebase from '../../../Lib/Firebase'
import SearchContext from '../Context/Search/Context'


import { IconButton, Tooltip, Divider } from '@material-ui/core'

import DeleteIcon from '@material-ui/icons/Delete'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

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
    console.table(aluno)

    const { setIsUpdating, IsUpdating } = useContext(SearchContext)
    const db = firebase.firestore()

    const [IsModalOpen, setIsModalOpen] = useState<boolean>(false)

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

    function TraslateDay(diatxt: string){
        switch (diatxt) {
            case 'Mon':
                return 'Segunda'
            case 'Tue':
                return 'Terça'
            case 'Wed':
                return 'Quarta'
            case 'Thu':
                return 'Quinta'
            case 'Fri':
                return 'Sexta'
            default:
                return 0
        }
    }

    // useEffect(
    //     () => {
    //         function CheckModal(){
    //             if(IsModalOpen){
    //                 return
    //             }
    //         }

    //     }, [IsModalOpen]
    // )

    return (
        <>
            {IsModalOpen == true ?
                <div key={index} className={'card-container'}>
                    <div className={'card-body'}>
                        <section>
                            <h3>Informaçõs gerais</h3>
                            <Divider />

                            <div className={'inform'}>
                                <span>Nome Completo</span>
                                <input type='text' value={aluno.Nome} readOnly />
                            </div>
                            <div className={'inform'}>
                                <span>Idade</span>
                                <input type='text' value={aluno.Idade} readOnly />
                            </div>
                            <div className={'inform'}>
                                <span>CPF</span>
                                <input type='text' value={aluno.CPF} readOnly />
                            </div>
                            <div className={'inform'}>
                                <span>RG</span>
                                <input type='number' value={aluno.RG} readOnly />
                            </div>
                        </section>

                        <section>
                            <h3>Endereço</h3>
                            <Divider />
                            <div className={'inform'}>
                                <span>Bairro</span>
                                <input type='text' value={aluno.Bairro} readOnly />
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

                        <section>
                            <h3>Contato</h3>
                            <Divider />
                            <div className={'inform'}>
                                <span>Telefone</span>
                                <input type='text' value={aluno.Telefone} readOnly />
                            </div>
                            <div className={'inform'}>
                                <span>Email</span>
                                <input type='text' value={aluno.Email} readOnly />
                            </div>
                        </section>

                        <section>
                            <h3>Curso</h3>
                            <div className={'inform'}>
                                <span>Dia</span>
                                <input type='text' value={TraslateDay(aluno.Dia)} readOnly />
                            </div>
                            <div className={'inform'}>
                                <span>Horário</span>
                                <input type='text' value={aluno.Schedule} readOnly />
                            </div>
                        </section>
                        <Divider />

                        <section className={'Buttons'} >
                            <IconButton onClick={() => DeleteAluno(aluno.Nome)} aria-label='Delete'>
                                <DeleteIcon />
                            </IconButton>


                            <IconButton onClick={() => setIsModalOpen(!IsModalOpen)} aria-label='Mostrar Info'>
                                <AddCircleOutlineIcon />
                            </IconButton>
                        </section>

                    </div>
                </div>

                :

                <div key={index} className={'card-container'}>
                    <div className={'card-header'}>
                        <h2>{aluno.Nome.split(' ')[0]}</h2>
                    </div>
                    <div className={'card-body'}>
                        <section>
                            <h3>Informaçõs gerais</h3>
                            <Divider />

                            <div className={'inform'}>
                                <span>Nome Completo</span>
                                <input type='text' value={aluno.Nome} readOnly />
                            </div>
                            <div className={'inform'}>
                                <span>Idade</span>
                                <input type='text' value={aluno.Idade} readOnly />
                            </div>
                            <div className={'inform'}>
                                <span>CPF</span>
                                <input type='text' value={aluno.CPF} readOnly />
                            </div>
                        </section>

                        <section>
                            <h3>Contato</h3>
                            <Divider />
                            <div className={'inform'}>
                                <span>Telefone</span>
                                <input type='text' value={aluno.Telefone} readOnly />
                            </div>
                            <div className={'inform'}>
                                <span>Email</span>
                                <input type='text' value={aluno.Email} readOnly />
                            </div>
                        </section>

                        <Divider />

                        <section className={'Buttons'} >
                            <IconButton onClick={() => DeleteAluno(aluno.Nome)} aria-label='Delete'>
                                <DeleteIcon />
                            </IconButton>


                            <IconButton onClick={() => setIsModalOpen(!IsModalOpen)} aria-label='Mostrar Info'>
                                <AddCircleOutlineIcon />
                            </IconButton>
                        </section>

                    </div>
                </div>
            }

        </>
    )
}