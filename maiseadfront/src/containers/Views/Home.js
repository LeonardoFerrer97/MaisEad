import React from 'react';
import {connect} from 'react-redux';
import FiltroPai from '../../components/Filtros/FiltroPai';

class Home extends React.Component{

    
    render(){
        return <FiltroPai successHandler = {this.props.successHandler}/>     
    }
}

function mapStateToProps(state){
    return {
        listaEad:state.listaEad,
        user:state.User
    }
}



export default connect(mapStateToProps)(Home);