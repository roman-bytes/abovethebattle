import React, { Component } from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

class BlogPost extends Component {
  render() {
    const { data } = this.props;
    const { title, createdAt, featuredImage, content } = data.contentfulBlogPost;
    const featImage = featuredImage ? featuredImage.sizes : '';
    return (
      <div className='singe-post' >
        <Img sizes={featImage}/>
        <h1>
          {title}
        </h1>
        <div className='post-date'>{createdAt}</div>
        <div
          className='post-content'
          dangerouslySetInnerHTML={{__html:content.childMarkdownRemark.html}}
        />
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
`;
