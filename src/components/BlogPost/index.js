import React, { Component } from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class BlogPost extends Component {
  render() {
    const { node, index } = this.props;
    const featImage = node.featuredImage && ( <Img sizes={node.featuredImage.sizes} />);
    const postClasses = classNames('post', {
      'featured': index === 0,
      'small-featured': index < 4 && index !== 0,
    });

    return (
      <div className={postClasses} >
        {
          index === 0
            ? (<h1><Link to={node.slug}>{node.title}</Link></h1>)
            : (<h2><Link to={node.slug}>{node.title}</Link></h2>)
        }
        {
          index > 4 && (<p>{node.createdAt}</p>)
        }
        <div>
          {index > 4 && featImage}
          <div>{node.content.childMarkdownRemark.excerpt}</div>
        </div>
      </div>
    );
  }
}

BlogPost.propTypes = {
  node: PropTypes.object,
  index: PropTypes.number
};
