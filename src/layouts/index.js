import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Social from '../components/Social';
import SideImage from '../components/SideImage';

const TemplateWrapper = ({ children, data }) => {
  return (
    <div>
      <Helmet
        title="Above the battle blog"
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <div
        className='outer-wrapper'
        style={{background: `#ffffff url(${data.imageTwo.sizes.src}) repeat`}}
      >
        <Social />
        <div className='content-wrapper'>
        {children()}
        </div>
      </div>
      <SideImage image={data.imageOne.sizes} />
    </div>
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.func,
  data: PropTypes.object
};

export default TemplateWrapper;

export const imageQuery = graphql`
  query imageQuery {
    imageOne: imageSharp(id: { regex: "/header.jpg/" }) {
      sizes(maxWidth: 1440) {
        ...GatsbyImageSharpSizes
      }
    }
    imageTwo: imageSharp(id: { regex: "/pattern.png/" }) {
      sizes(maxWidth: 400) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
