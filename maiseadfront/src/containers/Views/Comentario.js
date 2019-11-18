import React from 'react';
import { getComentarioByCursoId, postComentario } from '../../actions/index'
import * as _ from 'lodash';
import '../../styles/Comentario/Comentario.css'
import history from '../../components/Common/history';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
const styles = theme => ({

    textField: {
        width: '100%',
        display: 'flex',
        flexDirection: 'colunm',
        marginLeft: '13px',
        marginRight: '13px',
    },
});

class Comentario extends React.Component {

    constructor(props) {
        super(props);
        this.state = { comments: [], isAlreadyCalled: false, commentTxT: '', showSnackbar: false }
    }

    handleChange = (event) => {
        this.setState({ commentTxT: event.target.value })
    }

    onPostComment = () => {
        if (!this.props.auth.isAuthenticated()) {
            this.setState({showSnackbar:true})
        }
        else {
            this.props.auth.getProfile(this.getProfile);
        }
    }

        getProfile = (x,user) =>{
            let comment = {
                id: 0,
                cursoId: this.props.ead.id,
                commentTxt: this.state.commentTxT,
                userName: user.name
            }
            postComentario(comment, this.successHandlerPostComments, () => { })
        }
    successHandlerPostComments = () => {

        getComentarioByCursoId(this.props.ead.id, this.successHandlerGetComments, () => { })
        this.setState({ commentTxT: '' })
    }

    successHandlerGetComments = (comments) => {
        this.setState({ isAlreadyCalled: true })
        this.setState({ comments })
    }

    onKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            this.onPostComment()
        }
    }

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({ isSnackBarOpen: false });
    };

    render() {
        const { classes } = this.props;
        if (!this.state.isAlreadyCalled && !_.isEmpty(this.props.ead))
            getComentarioByCursoId(this.props.ead.id, this.successHandlerGetComments, () => { })
        if (this.state.isAlreadyCalled && !_.isEmpty(this.props.ead)) {
            return <div className='background'><div className='comment-pai'>
                <div className='comment-titulo'>{this.props.ead.nome} na {this.props.ead.faculdade.nome} </div>
                <hr className='hr-comment'></hr>
                {this.state.comments.map(value => {
                    return <div>
                        <div className='comments'> {value.userName} disse: {value.commentTxt} </div>
                        <hr className='hr-comment'></hr>
                    </div>
                })}
                <div style={{ width: '80%' }} className='post-comment'>
                    <form style={{ width: '80%' }} noValidate >
                        <TextField
                            id="outlined-name"
                            label="Faça seu comentario"
                            fullWidth
                            classes={{ root: classes.textField }}
                            value={this.state.commentTxT}
                            onKeyPress={(e) => this.onKeyPress(e)}
                            onChange={(e) => this.handleChange(e)}
                            margin="normal"
                            variant="outlined"
                        />
                    </form>

                    <button style={{ marginLeft: '30px', backgroundColor: '#910000', color: 'white' }} onClick={this.onPostComment}> COMENTAR </button>
                </div>
                <hr className='hr-comment'></hr>
                <div className='voltar'> <button className='button-voltar' onClick={() => history.push('/')}> VOLTAR</button></div>
            </div>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={this.state.showSnackbar}
                    autoHideDuration={6000}
                    onClose={this.handleClose}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">Você precisa estar logado para comentar.</span>}
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
        } else return <div></div>
    }
}




export default withStyles(styles)(Comentario);