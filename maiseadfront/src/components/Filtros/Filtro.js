import React from 'react';
import '../../styles/Filtro/Filtro.css'
import AppSearch from './AppSearch'
import AppSearchDuracao from './AppSearchDuracao'
import AppSearchMensalidade from './AppSearchMensalidade';
import AppSearchTipoCurso from './AppSearchTipoCurso';


class Filtro extends React.Component{
    render(){
        return <div >

                <AppSearch 
                  curso={this.props.curso}
                  handleChange={this.props.handleChange}
                />
              <AppSearchDuracao 
                duracao={this.props.duracao}
                handleChange={this.props.handleChange}
              />

              <AppSearchMensalidade
                mensalidade={this.props.mensalidade}
                handleChange={this.props.handleChange}
              />

            <AppSearchTipoCurso 
              tipo = {this.props.tipoCurso}
              getSuggestions = {this.props.getSuggestions}
              
              tipos={this.props.tipos}
            />
            </div>
    }
}

export default Filtro