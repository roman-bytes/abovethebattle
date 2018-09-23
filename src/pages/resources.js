import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/main.scss';

export default class Resources extends Component {
  render() {
    const { data } = this.props;
    const pageData = data.contentfulPage;
    return (
      <div className="resource-page">
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

Resources.propTypes = {
  data: PropTypes.object
};

export const resourcesPageQuery = graphql`
  query resourcesPageQuery {
    contentfulPage(pageSlug: { eq: "resources" }) {
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
