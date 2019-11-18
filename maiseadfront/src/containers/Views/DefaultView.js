import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { obterEadSucesso, avaliarCurso,postUsuario } from '../../actions/index'
import Home from './Home';
import history from '../../components/Common/history'
import EaDs from './EaDs';
import AppEadBar from '../../components/AppEadBar/AppEadBar';
import AppBottomBar from '../../components/AppEadBar/AppBottomBar';
import CompareEaDs from './CompareEaDs';
import Comentario from './Comentario';


class DefaultView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lista: {}
        }
    }


    componentDidMount(){
        if(this.props.auth.isAuthenticated())
            this.props.auth.getProfile(this.getProfile);

    }
    getProfile = (x,user)=>{
        postUsuario(user.email,()=>{},()=>{})
    }
    successHandler = (lista) => {
        this.props.obterEadSucesso(lista)
        history.push('/EaDs')
    }
    render() {
        if (history !== undefined && history.action === 'POP')
            history.push('/')
        if (this.props.path === 'Home') {
            return (<div >
                <AppEadBar auth={this.props.auth} />
                <Home auth={this.props.auth} successHandler={this.successHandler} />
                <AppBottomBar isTelaFiltrada={true} />
            </div>)
        }
        if (this.props.path === 'EaDs') {
            return (<div style={{ height: '100vh', width: '100vw', backgroundImage: 'null !important', }}>
                <AppEadBar auth={this.props.auth} />
                <EaDs auth={this.props.auth} avaliarCurso={this.props.avaliarCurso} />
            </div>)
        }
        if (this.props.path === 'CompareEaDs') {
            return (<div style={{ height: '100vh', width: '100vw', backgroundImage: 'null !important', }}>
                <AppEadBar auth={this.props.auth} />
                <CompareEaDs auth={this.props.auth} eaDsToCompare={this.props.location.state.eaDsToCompare} successHandler={this.successHandler} />
            </div>)
        }
        if (this.props.path === 'Comentario') {
            return (<div style={{ height: '100vh', width: '100vw', backgroundImage: 'null !important', }}>
                <AppEadBar auth={this.props.auth} />
                <Comentario auth={this.props.auth} ead={this.props.location ? this.props.location.state ? this.props.location.state.eaD : null : null} user={this.props.user} />
            </div>)
        }
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ obterEadSucesso, avaliarCurso }, dispatch)
}
function mapStateToProps(state) {
    return {
        listaEad: state.listaEad,
        user: state.user
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(DefaultView)