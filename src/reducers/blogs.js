const blogs = ( state = [], action ) => {
  switch (action.type) {
    case 'ADD_BLOG':
      return [action.blog, ...state];
    case 'DELETE_BLOG':
      const blogId = action.blog;
      debugger
      return state.filter(blog => blog.id !== blogId);
    case 'EDIT_BLOG':
      const { id, name, body } = action.blog;
      return state.map(blog => {
        if (blog.id === id) {
          blog.name = name;
          blog.body = body;
        }
        return blog;
      });

    default:
      return state;
  }
}

export default blogs;
