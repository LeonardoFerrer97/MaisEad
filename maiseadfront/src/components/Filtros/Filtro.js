import React from 'react';
import '../../styles/Filtro/Filtro.css'
import AppSearch from './AppSearch'
import AppSearchDuracao from './AppSearchDuracao'
import AppSearchMensalidade from './AppSearchMensalidade';


class Filtro extends React.Component{
    render(){
      console.log(this.props)
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
            </div>
    }
}

export default Filtro