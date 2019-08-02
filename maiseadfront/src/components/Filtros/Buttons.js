import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import '../../styles/Filtro/buttons.css';
import { Link } from 'react-router-dom'

const styles = () => ({
    RootPesquisaAvancada:{
        marginLeft:'0px'
    },
    button:{
        marginLeft:'110vh'
    }
    
});

function Buttons(props) {
  const {classes} = props;

  return (
    <div className = 'button'>
      <Button classes={{root:classes.RootPesquisaAvancada}}>
        Pesquisa Avançada
      </Button>
      <Link to={'/EaDs'} >
        <Button color="primary" classes={{root:classes.button}}>
          Pesquisar
        </Button>
      </Link>
    </div>
  );
}

export default withStyles(styles)(Buttons)