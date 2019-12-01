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
                    <div class="grid-item"><p>Infraestrutura dos polos de apoio</p>
                        <StarRatings
                            starDimension='20px'
                            rating={this.props.isAvaliar? this.props.Infra : this.props.ead.avaliacaoUsuario.infraestruturaPoloApoio}
                            starRatedColor="#16cbdb"
                            starHoverColor="blue"
                            disabled={true}
                            changeRating={this.props.isAvaliar?()=>{} :(event) => this.props.handleChange(event)}
                            numberOfStars={5}
                            name='rating'
                        />
                    </div>
                    <div class="grid-item"><p>Qualidade do material didático</p>
                        <StarRatings
                            starDimension='20px'
                            rating={this.props.isAvaliar? this.props.Material : this.props.ead.avaliacaoUsuario.qualidadeMaterial}
                            starRatedColor="#16cbdb"
                            starHoverColor="blue"
                            disabled={true}
                            changeRating={this.props.isAvaliar?()=>{} :(event) => this.props.handleChange(event)}
                            numberOfStars={5}
                            name='rating'
                        />
                    </div>
                    <div class="grid-item"><p>Organização do Ambiente Virtual de Aprendizagem</p>
                        <StarRatings
                            starDimension='20px'
                            rating={this.props.isAvaliar? this.props.Organizacao : this.props.ead.avaliacaoUsuario.organizacaoVirtual}
                            starRatedColor="#16cbdb"
                            starHoverColor="blue"
                            disabled={true}
                            changeRating={this.props.isAvaliar?()=>{} :(event) => this.props.handleChange(event)}
                            numberOfStars={5}
                            name='rating'
                        />
                    </div>
                    <div class="grid-item"><p>Nota do curso de 1 a 5</p>
                        <StarRatings
                            starDimension='20px'
                            rating={this.props.isAvaliar? this.props.Organizacao :  this.props.ead.avaliacaoUsuario.nota}
                            starRatedColor="#16cbdb"
                            starHoverColor="blue"
                            disabled={true}
                            changeRating={this.props.isAvaliar?()=>{} :(event) => this.props.handleChange(event)}
                            numberOfStars={5}
                            name='rating'
                        />
                    </div>
                </div>
            </div>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={this.props.showSnackbar}
                autoHideDuration={6000}
                onClose={this.props.handleClose}
                ContentProps={{
                    'aria-describedby': 'message-id',
                }}
                message={<span id="message-id">Você precisa estar logado para avaliar o curso.</span>}
                action={[
                    <IconButton
                        key="close"
                        aria-label="close"
                        color="inherit"
                        onClick={this.props.handleClose}
                    >
                        <CloseIcon />
                    </IconButton>,
                ]}
            />
            <div className='buttons-avaliar'>
                <button onClick={() => this.props.onClickVoltar()} className='buttonVoltar'>{this.props.isAvaliar ? 'cancelar' : 'voltar'}</button>
                <button onClick={() => this.props.onClickAvaliar()} className='buttonComparar'>{this.props.isAvaliar ? 'Finalizar' : 'Avaliar'}</button>
            </div>
        </div >
    }
}
export default Avalie;
