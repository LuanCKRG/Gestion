import React, { useEffect, useRef, useCallback } from 'react'
import { useForm } from "react-hook-form"
import { AlunoForm, CampoCadastro, Legend, Label, Input, ContainerSection, ButtonSection, Button, Select } from "./styles"
import { Container } from "Styles/Global"

import firebase from '../../Lib/Firebase'


type Inputs = {
    Nome: string,
    Nascimento: string,
    Telefone: string,
    Email: string,
    CPF: string,
    RG: Number,
    Rua: string,
    Bairro: string,
    Casa: Number,
    Schedule: string,
    Dia: string
}

const Cadastro: React.FC = () => {
    const { register, handleSubmit, setValue } = useForm<Inputs>()
    const FormRef = useRef<HTMLFormElement>(null)
    const db = firebase.firestore()

    const onSubmit = async (data: Inputs) => {
        await db.collection('Alunos').doc(`${data.Nome}`).set(data)
            .then(
                () => {
                    console.log('Document successfully written!');
                }
            )
            .catch(
                (error: any) => {
                    console.error('Error writing document: ', error);
                }
            )

        alert('Aluno cadastrado com sucesso')
        
        FormRef.current?.reset()
    }

    useEffect(() => {
        register('Telefone', { required: true })
        register('CPF', { required: true })
    }, [])

    const MaskCPF = useCallback(
        (e: React.FormEvent<HTMLInputElement>) => {
            e.currentTarget.maxLength = 14

            let value = e.currentTarget.value

            if (!value.match(/^(\d{3}).(\d{3}).(\d{3})-(\d{2})$/)) {
                value = value.replace(/\D/g, "")
                value = value.replace(/(\d{3})(\d)/, "$1.$2")
                value = value.replace(/(\d{3})(\d)/, "$1.$2")
                value = value.replace(/(\d{3})(\d{2})$/, "$1-$2")
                e.currentTarget.value = value
                setValue("CPF", value)
            }
        }, []
    )

    const MaskTel = useCallback(
        (e: React.FormEvent<HTMLInputElement>) => {
            e.currentTarget.maxLength = 15
            let value = e.currentTarget.value

            value = value.replace(/^(\d)(\d)/, "($1$2) ")
            value = value.replace(/(\d{5})(\d)/, "$1-$2")

            e.currentTarget.value = value

            setValue("Telefone", value)
        }, []
    )


    return (
        <Container>
            <AlunoForm ref={FormRef} onSubmit={handleSubmit(onSubmit)}>
                <CampoCadastro>
                    <Legend> Cadastro </Legend>

                    <ContainerSection>
                        <section>
                            <div>
                                <Label htmlFor="Nome">Nome: </Label>
                                <Input id="Nome" placeholder="Insira o nome" {...register("Nome", { required: true })} />
                            </div>
                            <div>
                                <Label htmlFor="Nascimento">Nascimento: </Label>
                                <Input id="Nascimento" type="date" max="2011-01-01" {...register('Nascimento', { required: true })} />
                            </div>
                            <div>
                                <Label htmlFor="Telefone">Telefone: </Label>
                                <Input name="Telefone" id="Telefone" type="tel" placeholder="Insira o telefone"
                                    onKeyUp={MaskTel}
                                />
                            </div>
                        </section>

                        <section>
                            <div>
                                <Label htmlFor="Email">Email: </Label>
                                <Input id="Email" type="email" placeholder="Insira o email" {...register('Email', { required: true })} />
                            </div>
                            <div>
                                <Label htmlFor="CPF">CPF: </Label>
                                <Input name="CPF" id="CPF" placeholder="Insira o CPF" onKeyUp={MaskCPF} />
                            </div>

                            <div>
                                <Label htmlFor="RG">RG: </Label>
                                <Input id="RG" type="number" placeholder="Insira o RG" {...register('RG', { required: true })} />
                            </div>
                        </section>

                        <section>
                            <div>
                                <Label htmlFor="Rua">Rua: </Label>
                                <Input id="Rua" placeholder="Insira a rua" {...register('Rua', { required: true })} />
                            </div>
                            <div>
                                <Label htmlFor="Bairro">Bairro: </Label>
                                <Input id="Bairro" placeholder="Insira o bairro" {...register('Bairro', { required: true })} />
                            </div>
                            <div>
                                <Label htmlFor="Casa">Casa: </Label>
                                <Input id="Casa" type="number" placeholder="Insira a casa" {...register('Casa', { required: true })} />
                            </div>
                        </section>
                        <section>
                            <div>
                                <Label htmlFor="Dia">Dia:</Label> <br />
                                <Select id="Dia" {...register('Dia')} >
                                    <option value="Mon">Segunda</option>
                                    <option value="Tue">Terça</option>
                                    <option value="Wed">Quarta</option>
                                    <option value="Thu">Quinta</option>
                                    <option value="Fri">Sexta</option>
                                </Select>
                            </div>
                            <div>
                                <Label htmlFor="Schedule">Horário: </Label>
                                <Input type="time" min="09:00" max="20:00" id="Schedule" placeholder="Horário" {...register('Schedule', { required: true })} />
                            </div>
                        </section>

                    </ContainerSection>
                    <ButtonSection>
                        <Button type="submit">Cadastrar</Button>
                    </ButtonSection>
                </CampoCadastro>
            </AlunoForm>
        </Container>
    )
}

export default Cadastro