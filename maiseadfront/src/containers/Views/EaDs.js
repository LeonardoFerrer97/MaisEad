import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import '../../styles/EaD/EaD.css';
import history from '../../components/Common/history';
class EaDs extends React.Component {

    render() {
        if (!_.isEmpty(this.props.listaEad)) {
            return <div className='pai'>
                <div className='title'>Aqui está os melhores EaDs para você</div>
                {this.props.listaEad.map(ead => {
                    return <div className='div-pai-ead'>
                        <img className='faculdade' alt={ead.faculdade.nome}src={`./images/${ead.faculdade.nome}.png`}></img>
                        <div className='vr'></div>
                        {ead.nome}
                    </div>
                })}
                <div className='buttons'> 
                    <button onClick={()=> history.push('/')}className='buttonVoltar'>voltar</button>
                    <button className='buttonComparar'>comparar EaDs</button>
                </div>
            </div>
        }
        else return <div></div>
    }
}

function mapStateToProps(state) {
    return {
        listaEad: state.listaEad
    }
}

export default connect(mapStateToProps)(EaDs);