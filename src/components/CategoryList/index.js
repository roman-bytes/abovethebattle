import React, { Component } from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';

export default class CategoryList extends Component {
  render() {
    const { node } = this.props;
    const slugCategory = node.category.toLowerCase();
    return (
      <div className="category">
        <Link to={`${slugCategory}`}>{node.category}</Link>
      </div>
    );
  }
}

CategoryList.propTypes = {
  node: PropTypes.object,
};
