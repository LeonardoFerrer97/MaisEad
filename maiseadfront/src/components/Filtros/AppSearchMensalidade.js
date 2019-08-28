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

class AppSearchMensalidade extends React.Component {
  render (){
    const {classes} =this.props;
    return <form className={classes.container} noValidate autoComplete="on">
      <TextField
        id="outlined-name"
        label="Mensalidade máxima"
        classes={{root:classes.textField}}
        value={this.props.mensalidade}
        onChange={this.props.handleChange('mensalidade')}
        margin="normal"
        variant="outlined"
      />
      </form>
  }
}  
export default withStyles(styles)(AppSearchMensalidade);
