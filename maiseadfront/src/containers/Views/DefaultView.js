import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {obterEadSucesso,avaliarCurso} from '../../actions/index'
import Home from './Home';
import history from '../../components/Common/history'
import EaDs from './EaDs';
import AppEadBar from '../../components/AppEadBar/AppEadBar';
import AppBottomBar from '../../components/AppEadBar/AppBottomBar';
import CompareEaDs from './CompareEaDs';
import Comentario from './Comentario';


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
        if(history !== undefined && history.action === 'POP')
            history.push('/')
        if(this.props.path==='Home'){
            return (<div >
                <AppEadBar />
                <Home successHandler = {this.successHandler}/>
                <AppBottomBar isTelaFiltrada={true}/>
            </div>)
        }
        if(this.props.path==='EaDs'){
            console.log('entrouuu')
            return (<div style={{height:'100vh',width:'100vw',backgroundImage : 'null !important',}}>
                <AppEadBar />
                <EaDs  avaliarCurso = {this.props.avaliarCurso}/>
            </div>)
        }
        if(this.props.path ==='CompareEaDs')
        {
            return (<div style={{height:'100vh',width:'100vw',backgroundImage : 'null !important',}}>
                <AppEadBar />
                <CompareEaDs eaDsToCompare= {this.props.location.state.eaDsToCompare}successHandler = {this.successHandler}/>
            </div>)
        }
        if(this.props.path ==='Comentario')
        {
            return (<div style={{height:'100vh',width:'100vw',backgroundImage : 'null !important',}}>
                <AppEadBar />
                <Comentario ead= {this.props.location? this.props.location.state ?  this.props.location.state.eaD:null:null} user={this.props.user}/>
            </div>)
        }
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({obterEadSucesso,avaliarCurso},dispatch)
}
function mapStateToProps(state){
    return {
        listaEad:state.listaEad,
        user:state.User
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(DefaultView)