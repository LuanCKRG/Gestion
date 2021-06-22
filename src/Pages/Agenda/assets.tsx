import { ReactElement } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { WeekView, Appointments } from '@devexpress/dx-react-scheduler-material-ui'

const useStyles = makeStyles(theme => ({
    Cell: {
        border: '2px solid var(--text)'
    },
    appointment: {
        justifyContent: 'center',
        width: '107%',
        border: 'none',
        borderBottom: '2px solid var(--text)',
        borderRadius: 0,
        height: '100%'
    },
    dias: {
        textTransform: 'capitalize',
        border: '2px solid var(--text)',
    },
    bordaDireitaAndEmbaixo: {
        border: '2px solid var(--text)',
    },
    horas: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        justifyContent: 'center',
    },
    nomes: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        justifyContent: 'center',
    }
}))

export interface TypeAssets {
    TimeTable: (props: any) => ReactElement,
    DayScaleCell: (props: any) => ReactElement,
    Appointment: (props: any) => ReactElement,
    Horas: (props: any) => ReactElement,
    Bordas: (props: any) => ReactElement,
    AlunosData: (props: any) => ReactElement
}

const Assets: TypeAssets = {

    TimeTable(props: any) {
        const classes = useStyles()

        return <WeekView.TimeTableCell {...props} className={classes.Cell} />
    },

    DayScaleCell(props: any) {
        const classes = useStyles()

        return <WeekView.DayScaleCell {...props} className={classes.dias} />
    },

    Appointment(props: any) {
        const classes = useStyles()

        return <Appointments.Appointment {...props} className={classes.appointment} />
    },

    Horas(props: any) {
        const classes = useStyles()

        return <WeekView.TimeScaleLabel {...props} className={classes.horas} />
    },

    Bordas(props: any) {
        const classes = useStyles()

        return <WeekView.TimeTableRow {...props} className={classes.bordaDireitaAndEmbaixo} />
    },

    AlunosData(props: any) {
        const classes = useStyles()

        return <Appointments.AppointmentContent {...props} className={classes.nomes} />
    }
}

export default Assets