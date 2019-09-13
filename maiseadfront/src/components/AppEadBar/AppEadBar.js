import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/styles';
import '../../styles/AppEadBar/AppEadBar.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const styles = {
  root: {
    backgroundColor: '#910000',
    height: '64px',
    display: 'flex',
    flexDirection: 'row',
  },
  title:{
    color:'#910000',
  }
};

class AppEadBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      isLogin:false,
    }
  }
  handleClickOpen = (isLogin) => {

    this.setState({ isModalOpen: true,isLogin });
  }

  handleClose = () => {
    this.setState({ isModalOpen: false });
  }
  render() {
    const { classes } = this.props;
    return <AppBar classes={{ root: classes.root }}>
      <Toolbar classes={{ root: classes.root }} />
      <div className='Titulo'>MaisEad</div>
      <div className='login'>
        <div onClick={()=>this.handleClickOpen(true)} className='txt-login'>
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#F0F7EE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line></svg>
          Login
        </div>
        <div onClick={()=>this.handleClickOpen(false)}className='txt-login'>
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#F0F7EE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
          Registre-se
        </div>
        <div className='txt-login' >
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#F0F7EE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
          Um pouco mais sobre nós
        </div>
      </div>
      <Dialog open={this.state.isModalOpen} onClose={this.handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle classes={{root:classes.title}}id="form-dialog-title">{this.state.isLogin? 'Acesse sua conta':'Registre-se no site'}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {this.state.isLogin? 'Para poder comentar e avaliar os cursos, por favor, acesse sua conta.':'Para poder comentar e avaliar os cursos, por favor, registre-se no site'}
          </DialogContentText>
          {this.state.isLogin? null:<TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nome"
            type="email"
            fullWidth
          />}
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email"
            type="email"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Senha"
            type="Senha"
            fullWidth
          />
          <hr className='hr'></hr>
          <div className='login-facebook'>
            <div className='txt-facebook'>
              <p>Acesse com o facebook</p>
              <img alt='facebook' src="https://img.icons8.com/color/48/000000/facebook-new.png"></img>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={this.handleClose} color="primary">
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </AppBar>
  }
}

export default withStyles(styles)(AppEadBar)