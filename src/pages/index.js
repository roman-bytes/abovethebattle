import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BlogPost from '../components/BlogPost';
import Header from '../components/Header';
import '../styles/main.scss';

export default class IndexPage extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className='post-list'>
        <Header logo={data.imageLogo.sizes}/>
        {
          data.allContentfulBlogPost.edges.map((edge, i) => {
            return (
              <BlogPost
                key={edge.node.id}
                node={edge.node}
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
    imageLogo: imageSharp(id: { regex: "/logo.png/" }) {
      sizes(maxWidth: 286) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
