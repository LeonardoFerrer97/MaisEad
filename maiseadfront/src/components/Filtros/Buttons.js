import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import '../../styles/Filtro/buttons.css';
import { Link } from 'react-router-dom'

const styles = () => ({
  RootPesquisaAvancada: {

    display: 'flex',
    flexGrow: 1,
    justifyContent:'flex-start',
    marginLeft: '0px'
  },
  button: {
    display: 'flex',
    flexGrow: 1,
    marginRight: '0px'
  }

});

function Buttons(props) {
  const { classes } = props;
  console.log(props)
  return (
    <div className='button'>
      <Button classes={{ root: classes.RootPesquisaAvancada }} onClick={props.ClickPesquisaAvançada}>
        {props.IsFiltroAvancado ? 'Pesquisa Avançada' : 'Pesquisa Normal'}
      </Button>
      <Link to={'/EaDs'} >
        <Button color="primary" classes={{ root: classes.button }}>
          Pesquisar
        </Button>
      </Link>
    </div>
  );
}

export default withStyles(styles)(Buttons)