import React from 'react';
import { withStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import '../../styles/Filtro/notaMec.css'

const styles = () => ({
  root: {
    marginTop:'-15px',
    marginBottom:'-15px',
    backgroundColor: '#D5D7DB',
    flexGrow: 1,
    marginRight: '25vh',
    marginLeft: '25vh',
    margin: '1vh',
  },
});

function NotaMec(props) {
  const { classes } = props;
  const theme = useTheme();
  return (
    <div className = 'notaMec'>
      <p className= 'labelNotaMec'> Nota do MEC</p>
      <MobileStepper
        variant="dots"
        steps={5}
        label="Nota do MEc"
        position="static"
        activeStep={props.passoAtual}
        classes={{ root: classes.root }}
        nextButton={
          <Button size="small" onClick={props.handleNext} disabled={props.passoAtual === 4}>
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={props.handleBack} disabled={props.passoAtual === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
          </Button>
        }
      />
    </div>
  );
}

export default withStyles(styles)(NotaMec)