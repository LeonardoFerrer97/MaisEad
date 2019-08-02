import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {obterListaEad,obterEadSucesso} from '../../actions/index'
import Home from './Home';
import EaDs from './EaDs';
import AppEadBar from '../../components/AppEadBar/AppEadBar'


class DefaultView extends Component {
    constructor(props){
        super(props);
        this.state={
            lista:{}
        }
    }
    componentDidMount(){
        this.props.obterListaEad(this.successHandler,(error)=>{console.log(error)});
    }
    successHandler = (lista) =>{
        this.props.obterEadSucesso(lista)
    }
    render() {
        if(this.props.path==='EaDs'){
            return (<div>
                <AppEadBar />
                <EaDs />
            </div>)
        }
        if(this.props.path==='Home'){
            return (<div>
                <AppEadBar />
                <Home />
            </div>)
        }

    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({obterListaEad,obterEadSucesso},dispatch)
}

export default connect(null,mapDispatchToProps)(DefaultView)