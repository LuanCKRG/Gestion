import styled from "styled-components"
import { fade, makeStyles, Theme, createStyles } from '@material-ui/core/styles'

export const Container = styled.div`

  display: flex;
  flex: 1;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  .card-container { 
    margin: 10px;
    padding: 10px;

    border: 3px solid black;
    border-radius: 20px;

    width: 350px;

    cursor: pointer;
    transition: 300ms;
  }

  .card-container input {
    background-color: var(--complement);
    border: none;
    outline: none;
    padding: 5px;
    border-radius: 5px;
  }

  .card-container:hover {
    transform: scale(1.1);
    transition: 300ms;
  }

  .card-header {
    margin: 5px;
    border-bottom: 2px solid black;
  }

  .card-body {
    section {
      h3 {
        transform: translateX(15px);
      }
    }

    .inform {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 7px;
    }
  }
`

export const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles(
      {
        search: {
          position: 'relative',
          borderRadius: theme.shape.borderRadius,
          backgroundColor: fade(theme.palette.common.white, 0.15),
          '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
          },
          border: '2px black solid',
          margin: `0 ${theme.spacing(2)}`,
          width: '100%',
          [theme.breakpoints.up('sm')]: {
            margin: '0 auto',
            width: '600px',
          },
        },
        searchIcon: {
          padding: theme.spacing(0, 2),
          height: '100%',
          position: 'absolute',
          pointerEvents: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        inputRoot: {
          color: 'inherit',
        },
        inputInput: {
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
          transition: theme.transitions.create('width'),
          width: '100%'
        }
      }
    )
)
