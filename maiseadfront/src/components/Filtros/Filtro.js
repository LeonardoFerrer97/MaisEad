import React from 'react';
import { withStyles } from '@material-ui/styles';
import '../../styles/Filtro/Filtro.css'
import AppSearch from './AppSearch'
import NotaMec from './NotaMec';
import AppSearchDuracao from './AppSearchDuracao'
import Buttons from './Buttons';

const styles = {
  root: {
    backgroundColor:'#910000',
    height:'64px',
  },
};

class Filtro extends React.Component{
  constructor(props){
    super(props);
    this.state={
        curso:'',
        passoAtual:0,
        duracao:0,
    }
  }
  handleNext = () =>{
    this.setState({passoAtual: this.state.passoAtual + 1});
  }

  handleBack = () =>{
    this.setState({passoAtual:this.state.passoAtual - 1});
  }
    handleChange = name => event => {
      this.setState({ [name]: event.target.value });
    };
    render(){
        return <div  className= 'body'>
                <div className='titulo-filtro'>Selecione aqui os filtros para comecar a pesquisar</div>
                <AppSearch 
                  curso={this.state.curso}
                  handleChange={this.handleChange}
                />

                Nota mínima MEC

                <NotaMec 
                  passoAtual={this.state.passoAtual}
                  handleBack={this.handleBack}
                  handleNext={this.handleNext}
                />

              <AppSearchDuracao 
                duracao={this.state.duracao}
                handleChange={this.handleChange}
              />

              <Buttons />
            </div>
    }
}

export default withStyles(styles)(Filtro)