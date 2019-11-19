import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import '../../styles/Compare/EadCompare.css'
const styles = theme => ({

    textField: {
        display: 'flex',
        flexDirection: 'colunm',
        marginLeft: '13px',
        marginRight: '13px',
    },
});

class EadCompare extends React.Component {
    render() {
        console.log(this.props.ead)
        return <div className='filho-div'>
            <div className='first-child'>
                <div><p className='name'>{this.props.ead.nome}</p></div>
            </div>
            <hr className='hr' />
            <div className='first-child'>
                <div><p className='escrito'>Faculdade : {this.props.ead.faculdade.nome}</p></div>
            </div>
            <hr className='hr' />

            <div className='first-child'>
                <div><p className='escrito'>Nota MEC da faculdade : {this.props.ead.faculdade.notaMec}</p></div>
            </div>
            <hr className='hr' />
            <div className='first-child'>
                <div><p className='escrito'>Duração : {this.props.ead.duracao} anos</p></div>
            </div>
            <hr className='hr' />
            <div className='first-child'>
                <div><p className='escrito'>Nota MEC : {this.props.ead.notaMec}</p></div>
            </div>
            <hr className='hr' />
            <div className='first-child'>
                <div><p className='escrito'>Mensalidade : {this.props.ead.mensalidade} reais</p></div>
            </div>
            <hr className='hr' />
            <div className='first-child'>
                <div><p className='escrito'>Tipo do curso : {this.props.ead.tipoCurso.nomeTipo}</p></div>
            </div>
            <hr className='hr' />
            <div className='first-child'>
                <div><p className='escrito'>{ this.props.ead.pontoApoio ? '-' : 'Ponto de Apoio : ' + this.props.ead.faculdade.nome}</p></div>
            </div>
            <hr className='hr' />
            <div className='first-child'>
                <div><p className='escrito'>URL para inscrição : <a  href={'https://' + this.props.ead.url} rel="noreferrer">{this.props.ead.url}</a></p></div>
            </div>

        </div>
    }
}
export default withStyles(styles)(EadCompare);
