import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import '../../styles/EaD/EaD.css';
import history from '../../components/Common/history';
import StarRatings from '../../../node_modules/react-star-ratings';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Tooltip from '@material-ui/core/Tooltip';

const CompareCheckbox = withStyles({
    root: {
        color: '#910000',
        '&$checked': {
            color: 'black',
        },
    },
    checked: {},
})(props => <Checkbox color="default" {...props} />);


class EaDs extends React.Component {
    constructor(props) {
        super(props);
        this.state = { rating: 0, isCompare: false, eadsToCompare: [], checkedValues: [], isSnackBarOpen: false,notAutheticated:false};
    }
    render() {
        if (!_.isEmpty(this.props.listaEad)) {
            return <div className='pai'>
                <div className='title'>Aqui está os melhores EaDs para você</div>
                {this.props.listaEad.map(ead => {
                    return <div className='div-pai-ead'>
                        <div className='div-img-nota'>
                            <img className='faculdade' alt={ead.faculdade.nome} src={`./images/${ead.faculdade.nome}.png`}></img>
                            <div className='Nota' onClick={()=>this.onClickAvaliarCurso(ead)}>
                                <button style={{color:'#646464',backgroundColor:'#FFFFFF',border:'none',cursor:'pointer'}}>Avalie esse curso</button>
                                </div>
                        </div>
                        <div className='vr'></div>
                        <div className='informacoes-ead'>

                            <div className='informacoes-especificas-nome'>

                                <Tooltip title="Você será redirecionado para a página do curso"><a className='noUnderline' href={'https://' + ead.url} rel="noreferrer"><h1 className='nome'>{ead.nome}</h1></a></Tooltip>
                                <p className='tipo'>{ead.tipoCurso.nomeTipo}</p>
                            </div>
                            <div className='informacoes-especificas'>
                                <div className='img'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#646464" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                    <span style={{ color: '#646464', marginBottom: '5px' }}>    {ead.duracao} anos</span>
                                </div>
                                <div className='img-mec' >
                                    <p className='nota-mec-titulo'>Nota do MEC</p>
                                    <div className='star-ratings'>
                                        <StarRatings
                                            starDimension='10px'
                                            rating={ead.notaMec}
                                            starRatedColor="#e6de12"
                                            starHoverColor="#e6de12"
                                            numberOfStars={5}
                                            name='rating nota mec'
                                        />
                                    </div>
                                </div>
                                <div className='img' >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#24a629" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-dollar-sign"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>

                                    <span style={{ color: '#24a629', transform: 'translateY(100px)' }}>     {ead.mensalidade}</span>
                                </div>
                            </div>
                        </div>
                        <Tooltip id={ead.id} title="Você será redirecionado para a página de comentários curso">
                            <div id={ead.id} onClick={() => this.onClickComentar(ead)} className='comment'>
                                <svg id={ead.id} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-square"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                            </div>
                        </Tooltip>
                        <div className='check-box'>
                            {this.state.isCompare ? <FormControlLabel
                                control={
                                    <CompareCheckbox
                                        checked={this.state.checkedValues.includes(ead)}
                                        key={ead.id}
                                        onChange={e => this.handleCheck(e, ead)}
                                        value="isCompare"
                                    />
                                }
                                label='Selecionar'
                            /> : ''}
                        </div>
                        <Snackbar
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            open={this.state.isSnackBarOpen}
                            autoHideDuration={6000}
                            onClose={this.handleClose}
                            ContentProps={{
                                'aria-describedby': 'message-id',
                            }}
                            message={<span id="message-id">{this.state.checkedValues.length>4?'O máximo de EaDs para comparação é 4':'Por favor, selecione mais de um EaD para ser comparado.'}</span>}
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
                        
                    </div>
                })}
                <div className='buttons'>
                    <button onClick={() => this.onClickVoltar()} className='buttonVoltar'>{this.state.isCompare ? 'cancelar' : 'voltar'}</button>
                    <button onClick={() => this.onClickComparar()} className='buttonComparar'>{this.state.isCompare ? 'avançar' : 'comparar EaDs'}</button>
                </div>
            </div>
        }
        else return <div></div>
    }
    changeRating = (rating, ead) => {
        if (this.props.auth.isAuthenticated()) {
            if (ead.avaliacaoUsuario != null)
                ead.avaliacaoUsuario.nota = rating;
            this.props.avaliarCurso(ead, rating, () => { history.push('/') }, () => { })
        }
        else
            this.setState({notAutheticated:true})
    }

    onClickComparar = () => {
        this.setState({ isCompare: true })
        if (this.state.checkedValues.length > 1 && this.state.checkedValues.length<5)
            history.push({ pathname: '/CompareEaDs', state: { eaDsToCompare: this.state.checkedValues } })
        else if (this.state.isCompare)
            this.setState({ isSnackBarOpen: true });
    }

    onClickComentar = (ead) => {
        history.push({ pathname: '/Comentario', state: { eaD: ead } })
    }

    onClickVoltar = () => {
        if (this.state.isCompare)
            this.setState({ isCompare: false })
        else
            history.push('/')
    }

    handleCheck(e, x) {
        this.setState(state => ({
            checkedValues: state.checkedValues.includes(x)
                ? state.checkedValues.filter(c => c !== x)
                : [...state.checkedValues, x]
        }));
    }

    onClickAvaliarCurso = (ead) =>{

        history.push({ pathname: '/Avalie', state: { ead} })
    }


    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({ isSnackBarOpen: false,notAutheticated:false });
    };

}


function mapStateToProps(state) {
    return {
        listaEad: state.listaEad
    }
}

export default connect(mapStateToProps)(EaDs);