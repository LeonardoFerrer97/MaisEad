import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/styles';
import '../../styles/AppEadBar/AppEadBar.css';

const styles = {
  root: {
    backgroundColor:'#910000',
    height:'64px',
  },
};

class AppEadBar extends React.Component{

    render(){
        const {classes} = this.props;
        return <AppBar classes={{root:classes.root}}>
            <Toolbar classes={{root:classes.root}}/>
            <div className='Titulo'>MaisEad</div>
        </AppBar>
    }
}

export default withStyles(styles)(AppEadBar)