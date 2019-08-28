import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({

  textField: {
      display:'flex',
      flexDirection:'colunm',
      marginLeft:'13px',
      marginRight:'13px',
  },
});

class AppSearchDuracao extends React.Component {
  render (){
    const {classes} =this.props;
    return <form className={classes.container} noValidate autoComplete="on">
      <TextField
        id="outlined-name"
        label="Tempo mínimo para formar"
        classes={{root:classes.textField}}
        value={this.props.duracao}
        onChange={this.props.handleChange('duracao')}
        margin="normal"
        type='number'
        variant="outlined"
      />
      </form>
  }
}  
export default withStyles(styles)(AppSearchDuracao);
