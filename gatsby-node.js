/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const _ = require('lodash');
const slash = require('slash');
const Promise = require('bluebird');
const path = require('path');

exports.createPages = ({graphql, boundActionCreators}) => {
  const {createPage} = boundActionCreators;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulBlogPost (limit:100) {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `)
      .then((result) => {
        if (result.errors) {
          reject(result.errors);
        }
        const blogPostTemplate = path.resolve('src/template/blog-post.js');

        _.each(result.data.allContentfulBlogPost.edges, edge => {
          createPage ({
            path: edge.node.slug,
            component: blogPostTemplate,
            context: {
                slug: edge.node.slug
            },
          });
        });
      })
      .then(() => {
        graphql(`
          {
            allContentfulCategory {
              edges {
                node {
                  id
                  category
                }
              }
            }
          }
        `).then((result) => {
          if (result.errors) {
            reject(result.errors);
          }

          // Create Category pages
          const categoryTemplate = path.resolve('src/template/category.js');
          _.each(result.data.allContentfulCategory.edges, edge => {
            // Gatsby uses Redux to manage its internal state.
            // Plugins and sites can use functions like "createPage"
            // to interact with Gatsby.
            createPage({
              // Each page is required to have a `path` as well
              // as a template component. The `context` is
              // optional but is often necessary so the template
              // can query data specific to each page.
              path: `/categories/${edge.node.category}/`,
              component: slash(categoryTemplate),
              context: {
                category: edge.node.category,
              },
            });
          });

          resolve();
        });
      });
  });
};
