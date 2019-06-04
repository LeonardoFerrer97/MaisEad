import React from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import Filtro from '../../components/Filtros/Filtro';
class Home extends React.Component{

    
    render(){
        if(!_.isEmpty(this.props.listaEad)){
            return <Filtro />
        } 
        else return <div></div>       
    }
}

function mapStateToProps(state){
    return {
        listaEad:state.listaEad
    }
}

export default connect(mapStateToProps)(Home);