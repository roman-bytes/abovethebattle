import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/main.scss';

export default class ContactPage extends Component {
  render() {
    const { data } = this.props;
    const pageData = data.contentfulPage;
    return (
      <div className="contact-page">
        <h1>{pageData.pageTitle}</h1>
        <div
          className="page-content"
          dangerouslySetInnerHTML={{
            __html: pageData.pageContent.childMarkdownRemark.html,
          }}
        />
      </div>
    );
  }
}

ContactPage.propTypes = {
  data: PropTypes.object
}

export const contactPageQuery = graphql`
  query contactPageQuery {
    contentfulPage(pageSlug: { eq: "contact" }) {
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
