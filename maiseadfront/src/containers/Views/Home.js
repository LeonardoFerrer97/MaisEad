import React from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
class Home extends React.Component{

    render(){
        if(!_.isEmpty(this.props.listaEad)){
            return this.props.listaEad.map((value,index)=>{return<div><br></br><br></br><br></br><h1>{value}</h1></div>})
        } 
        else return <div></div>       
    }
}

function mapStateToProps(state){
    console.log(state)
    return {
        listaEad:state.listaEad
    }
}

export default connect(mapStateToProps)(Home);