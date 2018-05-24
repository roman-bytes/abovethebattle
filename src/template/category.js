import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BlogList from '../components/BlogPost/BlogList';

export default class CategoryPage extends Component {
  render() {
    const { data } = this.props;
    const posts = data.contentfulCategory.blogpost
    return (
      <div className='blog-list'>
        {
          posts.map(post => {
            return (
              <BlogList
                key={post.id}
                post={post}
                defaultImage={data.imageDefault.sizes}
              />
            );
          })
        }
      </div>
    );
  }
}

CategoryPage.PropTypes = {
  data: PropTypes.object
};

export const categoryQuery = graphql`
  query categoryQuery($category: String!) {
    imageDefault: imageSharp(id: { regex: "/logo-symbol.png/" }) {
      sizes(maxWidth: 500) {
        ...GatsbyImageSharpSizes
      }
    },
    contentfulCategory(category: { eq: $category }) {
      id
      category
      blogpost {
        id
        title
        createdAt(formatString: "MMMM DD, YYYY")
        featuredImage {
          sizes {
            base64
            aspectRatio
            src
            srcSet
            srcWebp
            srcSetWebp
            sizes
          }
          id
          file {
            url
            fileName
            contentType
          }
        }
        content {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`;
