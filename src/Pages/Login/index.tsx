import { useContext, useEffect } from 'react'
import firebase from '../../Lib/Firebase'

import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

import { SiGoogle } from "react-icons/si"
import { useHistory } from 'react-router-dom'


import { Theme } from '@material-ui/core'
import AuthContext from 'Context/Auth/Context'
type ClientData = {
    email: string,
    password: string
}

const useStyles = makeStyles(
    (theme: Theme) => (
        {
            paper: {
                marginTop: theme.spacing(8),
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            },
            avatar: {
                margin: theme.spacing(1),
                backgroundColor: theme.palette.secondary.main,
            },
            form: {
                width: '100%', // Fix IE 11 issue.
                marginTop: theme.spacing(1),
            },
            submit: {
                margin: theme.spacing(3, 0, 2),
            }
        }
    )
)



const LoginPage: React.FC = () => {
    const classes = useStyles()
    const history = useHistory()
    const auth = firebase.auth()
    const { setIsLogado } = useContext(AuthContext)

    useEffect(
        () => {
            setIsLogado(false)
        }, []
    )


    async function LoginWithGoogle() {
        const googleProvider = new firebase.auth.GoogleAuthProvider();

        await auth.signInWithPopup(googleProvider)
            .then(
                () => {
                    console.log('Logado com Sucesso')
                    setIsLogado(true)
                    history.push('/dashboard')
                }
            )
            .catch(
                (error: any) => {
                    setIsLogado(false)
                    console.log('error')
                    console.log(error)
                    // alert('Algo deu errado, por favor tente novamente mais tarde')
                }
            )
    }

    return (
        <Container component='main' maxWidth='xs'>
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component='h1' variant='h5'>
                    Sign in
                </Typography>

                <div className={classes.form}>
                    <Button className={classes.submit} onClick={LoginWithGoogle} fullWidth variant="contained" color="primary" startIcon={<SiGoogle />} >
                        Fazer Login com Google
                    </Button>
                </div>
            </div>

            <Box mt={8}>
                <Typography variant='body2' color='textSecondary' align='center'>
                    {`CKRG © Gestion ${new Date().getFullYear()}.`}
                </Typography>
            </Box>

        </Container>
    )
}

export default LoginPage