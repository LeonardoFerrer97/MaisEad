import React from 'react';
import '../../styles/Avalie/Avalie.css';
import StarRatings from '../../../node_modules/react-star-ratings';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
class Avalie extends React.Component {
    render() {
        console.log(this.props.ead)
        return <div className='background'>
            <div className='comment-titulo-avaliar'>{this.props.ead.nome} na {this.props.ead.faculdade.nome} </div>
            <div className="avaliacoes">
            <div class="grid-container">
                <div class="grid-item"><p>Infraestrutura dos polos de apoio</p></div>
                <div class="grid-item">Qualidade do material didático</div>
                <div class="grid-item">Organização do Ambiente Virtual de Aprendizagem</div>
                <div class="grid-item">Nota do curso de 1 a 5</div>
            </div>
            </div>
            <StarRatings
                starDimension='10px'
                rating={this.props.ead.avaliacaoUsuario == null ? 0 : this.props.ead.avaliacaoUsuario.nota}
                starRatedColor="#16cbdb"
                starHoverColor="blue"
                disabled={true}
                changeRating={(event) => this.changeRating(event, this.props.ead)}
                numberOfStars={5}
                name='rating'
            />
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={false}//this.props.notAutheticated}}
                autoHideDuration={6000}
                onClose={this.handleClose}
                ContentProps={{
                    'aria-describedby': 'message-id',
                }}
                message={<span id="message-id">Você precisa estar logado para avaliar o curso.</span>}
                action={[
                    <IconButton
                        key="close"
                        aria-label="close"
                        color="inherit"
                        onClick={this.handleClose}
                    >
                        <CloseIcon />
                    </IconButton>,
                ]}
            />
            <div className='buttons-avaliar'>
                <button onClick={() => this.props.onClickVoltar()} className='buttonVoltar'>{this.props.isAvaliar ? 'cancelar' : 'voltar'}</button>
                <button onClick={() => this.props.onClickComparar()} className='buttonComparar'>{this.props.isAvaliar ? 'Avaliar' : 'Finalizar'}</button>
            </div>
        </div >
    }
}
export default Avalie;
