import React from 'react';
import { connect } from 'react-redux';
import { deleteBlog } from '../actions/deleteBlog';
import { editBlog } from '../actions/editBlog';
import blogs from '../actions/addBlog';
import {Card, Segment, Grid, Form, Button, TextArea, Input, List} from 'semantic-ui-react'

class Blog extends React.Component {
  state = { editing: false, name: this.props.name , body: this.props.body, }


  handleChange = (e) => {
    let {name, value} = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, body } = this.state;
    const { id, dispatch } = this.props;
    const blog = { id, name, body };
    dispatch(editBlog(blog))
    this.setState({ name: '', body: '' })
    this.toggleForm()
  }

  toggleForm = () => {
    this.setState({ editing: !this.state.editing})
  }

  editBlog(){
    const { id, name, body, dispatch } = this.props
      return (
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Field name='name' value={this.state.name} control={Input}
              placeholder="Name" onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group>

              <Form.Field name='body' value={this.state.body} control={TextArea}
              placeholder="Body" onChange={this.handleChange}
              />
            </Form.Group>
            <Button onClick={() => this.toggleForm()}>Cancel</Button>
          <Button onSubmit={this.handleSubmit}>Submit</Button>

        </Form>
    )
  }

  showBlog(){
    const { id, name, body, dispatch } = this.props
    return(
      <div>
        <h1>{name}</h1>
        <h3>{body}</h3>
        <Button onClick={() => this.toggleForm()}>Edit</Button>
        <Button negative onClick={()=> dispatch(deleteBlog(this.state.id)) }>Delete</Button>
      </div>

    )

  }

  render() {
    return (
      <Grid.Column width={4}>
        <Segment>
          <Card>
            {this.state.editing ? this.editBlog() : this.showBlog()}
          </Card>
        </Segment>
      </Grid.Column>

    )

  }
}
  const mapStateToProps = (state) => {
    return { blog: state }
  }

export default connect(mapStateToProps)(Blog);
