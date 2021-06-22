import React, { useEffect, useState } from "react"

import firebase from '../../Lib/Firebase'

import Assets from './assets'
import { Regulador } from "./styles"
import { Scheduler, WeekView, Appointments } from '@devexpress/dx-react-scheduler-material-ui'
import { AppointmentModel } from "@devexpress/dx-react-scheduler"

interface Estudante {
    nome: string,
    schedule: string,
    dia: string,
    day: number
}

const AgendaPage: React.FC = () => {

    const GenericArray: any = []
    const db = firebase.firestore()

    const [Alunos, setAlunos] = useState<Estudante[]>([])

    const TransormDiaToDay = (diatxt: string) => {
        switch (diatxt) {
            case 'Mon':
                return 1
            case 'Tue':
                return 2
            case 'Wed':
                return 3
            case 'Thu':
                return 4
            case 'Fri':
                return 5
            default:
                return 0
        }
    }

    const CheckWhatDependencia = (dia: number) => {
        const StartWeek = diasDaSemanaNoMes(new Date().getFullYear(), (new Date().getMonth() + 1), 0)
        const hoje = new Date().getDate()
        const dayChecked = diasDaSemanaNoMes(new Date().getFullYear(), (new Date().getMonth() + 1), dia)

        if (hoje >= StartWeek[3]) {
            // console.log(dayChecked[3])
            if (dayChecked.length > 4) {
                return (dayChecked[4])
            }
            return (dayChecked[3])
        }

        else if (hoje >= StartWeek[2]) {
            // console.log(dayChecked[2])

            return (dayChecked[2])
        }

        else if (hoje >= StartWeek[1]) {
            // console.log(dayChecked[2])

            return (dayChecked[1])
        }

        else if (hoje >= StartWeek[0]) {
            // console.log(dayChecked[2])

            return (dayChecked[0])
        }
    }

    const diasDaSemanaNoMes = (ano: number, mes: number, diaDaSemana: number) => {
        const diaDoMes = new Date(ano, mes - 1, 1)
        const dias = []
        while (diaDoMes.getMonth() === mes - 1) {
            if (diaDoMes.getDay() === diaDaSemana) dias.push(diaDoMes.getDate())
            diaDoMes.setDate(diaDoMes.getDate() + 1)
        }
        return dias
    }

    useEffect(
        () => {
            const getAlunos = async () => {
                db.collection('Alunos').get().then(
                    (querySnapshot: any) => {
                        querySnapshot.forEach(
                            (doc: any) => {
                                GenericArray.push(
                                    {
                                        nome: doc.data().Nome,
                                        schedule: doc.data().Schedule,
                                        dia: doc.data().Dia,
                                        day: TransormDiaToDay(doc.data().Dia)
                                    }
                                )
                            }
                        )
                        setAlunos(GenericArray)
                    }
                )
            }
            getAlunos()
        }, []
    )

    const AlunosInfo: AppointmentModel[] = Alunos.map(
        (Aluno) => {
            const Fim: number = Number((Aluno.schedule).substring(0, 2)) + 1
            const now = new Date()

            return {
                title: Aluno.nome,
                startDate: new Date(now.getFullYear(), now.getMonth(), CheckWhatDependencia(Aluno.day), Number((Aluno.schedule).substring(0, 2))),
                endDate: new Date(now.getFullYear(), now.getMonth(), CheckWhatDependencia(Aluno.day), Number(Fim))

            }
        }
    )

    return (
        <>
            <Regulador onClick={() => console.log(AlunosInfo)}>
                <Scheduler
                    locale={('pt-BR')}
                    data={AlunosInfo}
                    height={660}
                >
                    <WeekView
                        startDayHour={7}
                        endDayHour={21}
                        cellDuration={60}
                        timeTableCellComponent={Assets.TimeTable}

                        dayScaleCellComponent={Assets.DayScaleCell}

                        timeScaleLabelComponent={Assets.Horas}

                        timeTableRowComponent={Assets.Bordas}

                    />
                    <Appointments
                        appointmentComponent={Assets.Appointment}
                        appointmentContentComponent={Assets.AlunosData}
                    />
                </Scheduler>
            </Regulador>
        </>
    )
}

export default AgendaPage