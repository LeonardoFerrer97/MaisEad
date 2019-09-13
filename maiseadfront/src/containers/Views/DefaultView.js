import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {obterEadSucesso} from '../../actions/index'
import Home from './Home';
import history from '../../components/Common/history'
import EaDs from './EaDs';
import AppEadBar from '../../components/AppEadBar/AppEadBar';
import AppBottomBar from '../../components/AppEadBar/AppBottomBar';


class DefaultView extends Component {
    constructor(props){
        super(props);
        this.state={
            lista:{}
        }
    }

    successHandler = (lista) =>{
        this.props.obterEadSucesso(lista)
        history.push('/EaDs')
    }
    render() {
        if(this.props.path==='EaDs'){
            return (<div style={{height:'100vh',width:'100vw',backgroundImage : 'null !important',}}>
                <AppEadBar />
                <EaDs />
            </div>)
        }
        if(this.props.path==='Home'){
            return (<div >
                <AppEadBar />
                <Home successHandler = {this.successHandler}/>
                <AppBottomBar isTelaFiltrada={true}/>
            </div>)
        }

    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({obterEadSucesso},dispatch)
}

export default connect(null,mapDispatchToProps)(DefaultView)