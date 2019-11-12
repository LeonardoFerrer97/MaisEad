import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/styles';
import '../../styles/AppEadBar/AppBottomBar.css';

const styles = {
    root: {
        left: '0',
        bottom: '0',
        width: '100%',
        backgroundColor: '#910000',
        height: '128px',
        position: 'fixed',
        top: '82vh',
        display: 'flex',
        flexDirection: 'row',
    },
};

class AppBottomBar extends React.Component {

    render() {
        const { classes } = this.props;
        return <AppBar classes={{ root: classes.root }}>
            <Toolbar classes={{ root: classes.root }} />
            {<div className='tutorial'>
                <div className='tutorial-acima'>1. Pesquise o seu EaD
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#F0F7EE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><line x1="7" y1="7" x2="17" y2="17"></line><polyline points="17 7 17 17 7 17"></polyline></svg>
                </div>
                <div className='tutorial-abaixo'>2. Compare com qualquer outro EaD
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#F0F7EE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                </div>
                <div className='tutorial-acima'>3. Decida o seu curso
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#F0F7EE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="7" x2="17" y2="17"></line><polyline points="17 7 17 17 7 17"></polyline></svg>
                </div>
                <div className='tutorial-abaixo'>4. Se matricule!
                </div>
            </div>}
        </AppBar>
    }
}

export default withStyles(styles)(AppBottomBar)