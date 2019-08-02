import React from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
class EaDs extends React.Component{

    
    render(){
        if(!_.isEmpty(this.props.listaEad)){
            return <h1>{this.propslistaEad}</h1>
        } 
        else return <div></div>       
    }
}

function mapStateToProps(state){
    return {
        listaEad:state.listaEad
    }
}

export default connect(mapStateToProps)(EaDs);