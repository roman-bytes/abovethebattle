import React, { Component } from 'react';
import Img from 'gatsby-image';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';

class BlogPost extends Component {
  render() {
    const { data } = this.props;
    const {
      title,
      createdAt,
      featuredImage,
      content,
      author,
      category,
    } = data.contentfulBlogPost;
    const featImage = featuredImage ? featuredImage.sizes : null;
    const categories =
      category &&
      category.map((cat, i) => {
        const space = i === 0 ? '' : ' | ';
        return (
          <Link key={cat.id} to={`categories/${cat.category.toLowerCase()}`}>
            {`${space}${cat.category}`}
          </Link>
        );
      });

    return (
      <div className="single-post">
        {featImage && <Img sizes={featImage} />}
        <h1>{title}</h1>
        <div className="post-date">{createdAt}</div>
        <div className="categories">{categories}</div>
        <div className="author">{`by: ${author.author}`}</div>
        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: content.childMarkdownRemark.html }}
        />
      </div>
    );
  }
}

BlogPost.PropTypes = {
  data: PropTypes.object.isRequired,
};

export default BlogPost;

export const pageQuery = graphql`
  query blogPostQuery($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      createdAt(formatString: "MMMM DD, YYYY")
      category {
        id
        category
      }
      author {
        id
        author
      }
      id
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
