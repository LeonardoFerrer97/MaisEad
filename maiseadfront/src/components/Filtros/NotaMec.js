import React from 'react';
import { withStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const styles = ()=> ({ 
  root: {
    backgroundColor:'darkGrey',
    flexGrow: 1,
    marginRight:'25vh',
    marginLeft:'25vh',
    margin:'1vh',
  },
});

function NotaMec(props) {
  const {classes} = props;
  const theme = useTheme();
  return (
    <MobileStepper
      variant="dots"
      steps={5}
      position="static"
      activeStep={props.passoAtual}
      classes={{root:classes.root}}
      nextButton={
        <Button size="small" onClick={props.handleNext} disabled={props.passoAtual === 4}>
          Next
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </Button>
      }
      backButton={
        <Button size="small" onClick={props.handleBack} disabled={props.passoAtual === 0}>
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
          Back
        </Button>
      }
    />
  );
}

export default withStyles(styles)(NotaMec)