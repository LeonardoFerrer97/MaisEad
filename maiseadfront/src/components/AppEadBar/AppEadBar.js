import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/styles';
import '../../styles/AppEadBar/AppEadBar.css';

const styles = {
  root: {
    backgroundColor: '#910000',
    height: '64px',
    display:'flex',
    flexDirection:'row',
  },
};

class AppEadBar extends React.Component {

  render() {
    const { classes } = this.props;
    return <AppBar classes={{ root: classes.root }}>
      <Toolbar classes={{ root: classes.root }} />
      <div className='Titulo'>MaisEad</div>
      <div className='login'>
        <div className = 'txt-login'>
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#F0F7EE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-log-in"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line></svg>
          Login
        </div>
        <div className = 'txt-login'>
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#F0F7EE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
          Registre-se
        </div>
        <div className = 'txt-login' > 
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#F0F7EE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-smile"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
          Um pouco mais sobre nós
        </div>
      </div>
    </AppBar>
  }
}

export default withStyles(styles)(AppEadBar)