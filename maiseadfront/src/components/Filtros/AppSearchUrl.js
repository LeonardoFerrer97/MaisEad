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

class AppSearchUrl extends React.Component {
  render (){
    const {classes} =this.props;
    return <form className={classes.container} noValidate autoComplete="on">
      <TextField
        id="outlined-name"
        label="Url do curso"
        classes={{root:classes.textField}}
        value={this.props.url}
        onChange={this.props.handleChange('url')}
        margin="normal"
        variant="outlined"
      />
      </form>
  }
}  
export default withStyles(styles)(AppSearchUrl);
