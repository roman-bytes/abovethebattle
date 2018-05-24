import React, { Component } from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import Diamond from '../Diamond';

export default class MainPost extends Component {
  render() {
    const { post } = this.props;
    return (
      <div className='post featured'>
        <div className='post-heading'>
          <h1>{post.title}</h1>
          <Diamond />
        </div>
        <div>
          <div className='excerpt'>
            {post.content.childMarkdownRemark.excerpt}
          </div>
            <Link
              to={post.slug}
              className='read-more'
            >
              READ ARTICLE
            </Link>
        </div>
      </div>
    );
  }
}

MainPost.propTypes = {
  post: PropTypes.object
};
