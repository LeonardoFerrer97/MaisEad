import React from 'react';
import '../../styles/Filtro/Filtro.css'
import NotaMec from './NotaMec';
import AppSearchNomeFaculdade from './AppSearchNomeFaculdade';
import AppSearchUrl from './AppSearchUrl';
import PontoDeApoio from './PontoDeApoio';
class FiltrosAvancados extends React.Component {



    render() {
        return <div>
            <AppSearchNomeFaculdade
                nomeFaculdade={this.props.nomeFaculdade}
                handleChange={this.props.handleChange}
            />
            <NotaMec
                passoAtual={this.props.passoAtual}
                handleChange={this.props.handleChange}
                notaMec={this.props.notaMec}
            />
            <PontoDeApoio
                pontoDeApoio={this.props.pontoDeApoio}
                handleChange={this.props.handleChange}
            />
            <AppSearchUrl
                url={this.props.url}
                handleChange={this.props.handleChange}
            />
        </div>
    }
}

export default FiltrosAvancados