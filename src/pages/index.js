import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BlogPost from '../components/BlogPost';
import '../styles/main.scss';

export default class IndexPage extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className='post-list'>
        {
          data.allContentfulBlogPost.edges.map((edge, i) => {
            return (
              <BlogPost
                key={edge.node.id}
                node={edge.node}
                defaultImage={data.imageDefault.sizes}
                index={i}
              />
            );
          })
        }
      </div>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.object
};

export const pageQuery = graphql`
  query pageQuery {
    imageDefault: imageSharp(id: { regex: "/logo-symbol.png/" }) {
      sizes(maxWidth: 500) {
        ...GatsbyImageSharpSizes
      }
    },
    allContentfulBlogPost(
      filter: {
        node_locale: {eq: "en-US"}
      },
      sort: {
        fields: [order, createdAt], order: DESC
      }
    ) {
      edges {
        node {
          id
          createdAt(formatString: "MMMM DD, YYYY")
          title
          slug
          content {
            childMarkdownRemark {
              excerpt(pruneLength: 270)
            }
          }
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
          author {
            id
            author
            bio {
              id
              bio
            }
          }
          category {
            id
            category
          }
          oldPublishDate {
            id
            oldPublishDate
          }
        }
      }
    }
  }
`;
