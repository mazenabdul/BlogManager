import React, {useState, useContext} from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import BlogContext from '../context/BlogContext'

const EditScreen = ({ navigation }) => {
  
  const {data} =  useContext(BlogContext)
  const blogPost = data.find((post) => post.id === navigation.getParam('id') )

  const [title, setTitle] = useState(blogPost.title)
  const [content, setContent] = useState(blogPost.content)

  return (
    <View>
      <Text style={styles.text}>Edit Title:</Text>
      <TextInput value={title} onChangeText={(text) => setTitle(text)} style={styles.input} />
      <Text style={styles.text}>Edit Content:</Text>
      <TextInput value={content} onChangeText={(content) => setContent(content)} style={styles.input} />
      <Button title="Save Post" onPress={() => addBlogPost(title,content, () => {navigation.navigate('Index')}) }/>
    </View>
  )
}

EditScreen.navigationOptions = () => {
  return {
   headerTitle: () => (<Text style={styles.header}>Edit Post</Text>)
}
}

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical:25,
    marginHorizontal:10
  },
  input: {
    borderWidth:1,
    marginHorizontal:15,
    fontSize: 15,
    padding:10,
    height: 'auto',
    marginBottom:20
    
  },
  header: {
    fontSize:20,
    fontWeight: 'bold'
  }
})

export default EditScreen