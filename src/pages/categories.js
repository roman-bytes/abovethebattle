import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CategoryList from '../components/CategoryList';
import '../styles/main.scss';

export default class CategoriesPage extends Component {
  render() {
    const { data } = this.props;
    const categories = data.allContentfulCategory.edges;
    return (
      <div className="category-list">
        {categories.map(category => {
          return <CategoryList key={category.node.id} node={category.node} />;
        })}
      </div>
    );
  }
}

CategoriesPage.propTypes = {
  data: PropTypes.object,
};

export const categoryPageQuery = graphql`
  query categoryPageQuery {
    allContentfulCategory {
      edges {
        node {
          id
          category
        }
      }
    }
  }
`;
