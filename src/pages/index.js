import React from 'react';
import Link from 'gatsby-link';
import '../styles/main.scss';


const BlogPost = ({ node }) => {
  const featImage = node.featuredImage ? node.featuredImage.file.url : '';
  return (
    <div style={{
      marginBottom: '1.5rem',
      padding: '1.5rem',
      border: '1px solid #ccc'
    }}>
      <h3><Link to={node.slug}>{node.title}</Link></h3>
      <p>{node.createdAt}</p>
      <div>
        <div>
          <img src={featImage}/>
        </div>
        <div>{node.content.childMarkdownRemark.excerpt}</div>
      </div>
    </div>
  );
};

const IndexPage = (props) => {
  return (
    <div className='wrapper'>
      {props.data.allContentfulBlogPost.edges.map((edge) => <BlogPost key={edge.node.id} node={edge.node} />)}
    </div>
  );
};

export default IndexPage;

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
              excerpt
            }
          }
          featuredImage {
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
