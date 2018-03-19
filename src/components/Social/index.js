import React from 'react';
import brands from '@fortawesome/fontawesome-free-brands';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const Social = () => (
  <div id='social-side'>
    <div className='social-wrap'>
      <a href='https://www.facebook.com/ashley.roman.391082?fref=ts'>
        <FontAwesomeIcon icon={['fab', 'facebook']} size='2x' />
      </a>
      <a href='https://www.instagram.com/romanashley09/'>
        <FontAwesomeIcon icon={['fab', 'twitter']} size='2x' />
      </a>
      <a href='https://twitter.com/Ashley_Manzo'>
        <FontAwesomeIcon icon={['fab', 'instagram']} size='2x' />
      </a>
    </div>
  </div>
);

export default Social;
