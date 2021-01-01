import React, {useReducer} from 'react'

//Create the context
const BlogContext = React.createContext()

//Create reducer function
const reducer = (state, action) => {
  switch(action.type){
    case 'add_blogpost':
      return [...state, {id: Math.floor(Math.random()*9999) , title: action.payload.title, content: action.payload.content}]
    case 'delete_post':
      return state.filter((blogPost) => blogPost.id !== action.payload )
    default:
      return state
  }
}

//Create the provider, return the children and export it
export const BlogProvider = ({ children }) => {
  
//Create a reduce with an initial state of []
const [blogPosts, dispatch] = useReducer(reducer, [{title: 'Test blog', content: 'Test', id: 1}])

//Anytime a add blog post is needed, dispatch the type which matches adding a blog post 
const addBlogPost = (title, content, navigate) => {
  dispatch({ type: "add_blogpost", payload: {title, content} })
  navigate()
}

//Handle Deleting a blog post dispatch
const deletePost = (id) => {
  dispatch({ type: 'delete_post', payload: id })
}

  return <BlogContext.Provider value={{ data: blogPosts, addBlogPost, deletePost }}>{children}</BlogContext.Provider>
}

//Export the context
export default BlogContext