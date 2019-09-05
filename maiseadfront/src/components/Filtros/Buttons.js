import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import '../../styles/Filtro/buttons.css';

const styles = () => ({
  RootPesquisaAvancada: {
    display: 'flex',
    flexGrow: 1,
    marginLeft: '0px'
  },
  button: {
    display: 'flex',
    flexGrow: 1,
    marginRight: '0px'
  }

});

class Buttons extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className='button'>
        <Button classes={{ root: classes.RootPesquisaAvancada }} onClick={this.props.ClickPesquisaAvançada}>
          {this.props.isFiltroAvançado?'Pesquisa Avançada':'Pesquisa Normal'}
        </Button>
        <Button classes={{ root: classes.button }} onClick={this.props.realizarPesquisa}>
          Pesquisar
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(Buttons)