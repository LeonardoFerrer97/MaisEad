import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import '../../styles/Filtro/notaMec.css'
import StarRatings from '../../../node_modules/react-star-ratings'
const styles = () => ({
  root: {
    marginTop: '-15px',
    marginBottom: '-15px',
    backgroundColor: '#D5D7DB',
    flexGrow: 1,
    marginRight: '25vh',
    marginLeft: '25vh',
    margin: '1vh',
  },
});

function NotaMec(props) {
  return (
    <div className='notaMec'>
      <p className='labelNotaMec'> Nota do MEC</p>
      <StarRatings
        starDimension='15px'
        rating={props.notaMec}
        starEmptyColor = "#363A37"
        starRatedColor="#16cbdb"
        starHoverColor="blue"
        changeRating={props.handleChange('notaMec')}
        numberOfStars={5}
        name='rating'
      />
    </div>
  );
}

export default withStyles(styles)(NotaMec)