import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import '../../styles/Filtro/buttons.css';

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
      <Button color="primary" classes={{root:classes.button}}>
        Pesquisar
      </Button>
    </div>
  );
}

export default withStyles(styles)(Buttons)