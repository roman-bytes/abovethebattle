import React, { Component } from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Diamond from '../Diamond';

export default class BlogPost extends Component {
  render() {
    const { node, index } = this.props;
    // console.log('node', node);
    const featImage = node.featuredImage && (
      <Img
        sizes={node.featuredImage.sizes}
      />
    );
    const postClasses = classNames('post', {
      'featured': index === 0,
      'small-featured': index < 4 && index !== 0,
      'other': index > 4
    });
    const categories = node.category
      && Array.prototype.map.call(node.category, s => s.category).toString();

    return (
      <div className={postClasses}>
        {index > 4 && featImage}
        {
          index > 4 && (
            <div className='categories'>{categories}</div>
          )
        }
        {
          index > 4 && (
            <h3>{node.title}</h3>
          )
        }
        {
          index > 4 && index !== 0 && (
            <Link
            to={node.slug}
            className='read-more'
            >
            READ ARTICLE
            </Link>
          )
        }
        {
          index > 4 && (<p>{node.createdAt}</p>)
        }
        {
          index === 0
            && (
              <div className='post-heading'>
                <h1>{node.title}</h1>
                <Diamond />
              </div>
            )
        }
        {
          index < 4 && index !== 0 && (
            <div className='secondary-heading'>
              <h2><Link to={node.slug}>{node.title}</Link></h2>
              <Diamond />
              <p>
                Article about:
                {categories}
              </p>
            </div>
          )
        }
        <div>
          {index < 1 && (
            <div className='excerpt'>
              {node.content.childMarkdownRemark.excerpt}
            </div>
          )}
          {
            index === 0 && (
              <Link
              to={node.slug}
              className='read-more'
              >
              READ ARTICLE
              </Link>
            )
          }
        </div>
      </div>
    );
  }
}

BlogPost.propTypes = {
  node: PropTypes.object,
  index: PropTypes.number
};
