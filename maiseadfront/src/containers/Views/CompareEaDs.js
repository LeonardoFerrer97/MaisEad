import React from 'react';
import * as _ from 'lodash';
import EadCompare from '../../components/Compare/EadCompare'
import '../../styles/Compare/EadCompare.css';
class CompareEaDs extends React.Component{

    render(){
        if(!_.isEmpty(this.props.eaDsToCompare))
            return <div className ='pai-div' >{this.props.eaDsToCompare.map((value)=>{return <EadCompare ead={value}/>})}</div>
        else return <div></div>
    }
}



export default CompareEaDs;