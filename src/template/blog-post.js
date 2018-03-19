import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BlogPost extends Component {
  render() {
    const { title, createdAt, featuredImage, content } = this.props.data.contentfulBlogPost;
    const featImage = featuredImage ? featuredImage.file.url : '';
    return (
      <div>
        <h1 style={{
          borderBottom: '1px solid #ccc',
          paddingBottom: '0.5rem'
        }}>
          {title}
        </h1>
        <p>{createdAt}</p>
        <div>
          <img src={featImage}/>
        </div>
        <hr />
        <div dangerouslySetInnerHTML={{__html:content.childMarkdownRemark.html}} />
      </div>
    );
  }
}

BlogPost.PropTypes = {
  data: PropTypes.object.isRequired
};

export default BlogPost;

export const pageQuery = graphql`
  query blogPostQuery($slug: String!){
    contentfulBlogPost(slug: {eq: $slug}) {
      title
      createdAt(formatString: "MMMM DD, YYYY")
      featuredImage {
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
`;
