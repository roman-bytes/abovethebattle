import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import MainPost from './MainPost';
import FeaturedPost from './FeaturedPost';
import BlogList from './BlogList';

export default class BlogPost extends Component {
  render() {
    const { node, index, defaultImage } = this.props;
    const mainPost = index === 0 && <MainPost post={node} />;
    const featuredPost = index < 4 &&
      index !== 0 && <FeaturedPost post={node} />;
    const blogList = index > 4 && (
      <BlogList post={node} defaultImage={defaultImage} />
    );
    return (
      <Fragment>
        {mainPost}
        {featuredPost}
        {blogList}
      </Fragment>
    );
  }
}

BlogPost.propTypes = {
  node: PropTypes.object,
  index: PropTypes.number,
  defaultImage: PropTypes.object,
};
