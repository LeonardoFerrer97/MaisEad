import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/styles';
import '../../styles/AppEadBar/AppEadBar.css';
import history from '../Common/history'
import NavBar from "./NavBar";

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
      <div className='Titulo' onClick={()=>{history.push('/')}}>MaisEad</div>
      <div className='login'>
        <NavBar></NavBar>
      </div>
    </AppBar>
  }
}

export default withStyles(styles)(AppEadBar)