import React from 'react';
import '../../styles/Filtro/Filtro.css'
import NotaMec from './NotaMec';

class FiltrosAvancados extends React.Component {



    render() {
        return <div>
            Nota mínima MEC
            <NotaMec
            passoAtual={this.props.passoAtual}
            handleBack={this.props.handleBack}
            handleNext={this.props.handleNext}
        />
        </div>
    }
}

export default FiltrosAvancados