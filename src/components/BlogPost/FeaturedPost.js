import React, { Component } from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import Diamond from '../Diamond';

export default class FeaturedPost extends Component {
  render() {
    const { post } = this.props;

    const categories =
      post.category &&
      Array.prototype.map.call(post.category, s => s.category).toString();

    return (
      <div className="post small-featured">
        <div className="secondary-heading">
          <h2>
            <Link to={post.slug}>{post.title}</Link>
          </h2>
          <Diamond />
          <p>
            Article about:
            {categories}
          </p>
        </div>
      </div>
    );
  }
}

FeaturedPost.propTypes = {
  post: PropTypes.object,
};
