import React,{Component} from 'react';
import {obterListaEad} from '../../actions/index'

export default class Routes extends Component {
    constructor(props){
        super(props);
        this.state={
            lista:{}
        }
    }
    componentDidMount(){
        obterListaEad(this.successHandler,()=>{});
    }
    successHandler = (lista) =>{
        console.log(lista)
        this.setState({lista})
    }
    render() {
        return (<div><h1> Portal do Tico e do Leo</h1>{this.state.lista[1]}</div>)
    }
}