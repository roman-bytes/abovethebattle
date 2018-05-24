import React, { Component } from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

export default class BlogList extends Component {
  render() {
    const { post, defaultImage } = this.props;
    const featImage = post.featuredImage ? (
      <Img sizes={post.featuredImage.sizes} />
    ) : (
      <Img sizes={defaultImage} />
    );
    const categories = post.category
      && Array.prototype.map.call(post.category, s => s.category).toString();
    return (
      <div className='post other'>
        {featImage}
        <div className='wrap'>
          {
            categories && (
              <div className='categories'>{categories}</div>
            )
          }
          <h3>{post.title}</h3>
          <Link
            to={post.slug}
            className='read-more'
          >
            READ ARTICLE
          </Link>
          <p>{post.createdAt}</p>
        </div>
      </div>
    );
  }
}

BlogList.propTypes = {
  post: PropTypes.object,
  defaultImage: PropTypes.object
};
