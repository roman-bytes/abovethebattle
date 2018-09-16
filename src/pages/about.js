import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/main.scss';

export default class AboutPage extends Component {
  render() {
    const { data } = this.props;
    const pageData = data.contentfulPage;
    return (
      <div className='about-page'>
        <h1>{pageData.pageTitle}</h1>
        <div
          className='page-content'
          dangerouslySetInnerHTML={{__html:pageData.pageContent.childMarkdownRemark.html}}
        />
      </div>
    );
  }
}

AboutPage.propTypes = {
  data: PropTypes.object
};

export const aboutPageQuery = graphql`
  query aboutPageQuery {
    contentfulPage(pageSlug: { eq: "about" }) {
      id
    	pageTitle
    	pageSlug
    	pageContent {
    	  id
        childMarkdownRemark {
          html
        }
    	}
    	contentful_id
    	createdAt
    	updatedAt
    	node_locale
    }
  }
`;
