import React from 'react';
import { connect } from 'react-redux';
import Blog from './Blog';
import { List, Grid } from 'semantic-ui-react';

const BlogList = ({ blogs }) => (
  <Grid columns='equal'>
    {blogs.map(t => <Blog key={t.id} {...t} /> )}
  </Grid>
)

const mapStateToProps = (state) => {
  return { blogs: state.blogs }
}

export default connect(mapStateToProps)(BlogList);
