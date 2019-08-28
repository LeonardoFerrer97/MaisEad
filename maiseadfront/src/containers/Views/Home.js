import React from 'react';
import {connect} from 'react-redux';
import FiltroPai from '../../components/Filtros/FiltroPai';
class Home extends React.Component{

    
    render(){
        return <FiltroPai />     
    }
}

function mapStateToProps(state){
    return {
        listaEad:state.listaEad
    }
}

export default connect(mapStateToProps)(Home);