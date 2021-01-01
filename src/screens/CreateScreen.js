import React, {useState, useContext} from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import BlogContext from '../context/BlogContext'

const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const { addBlogPost } = useContext(BlogContext)

  return (
    <View>
      <Text style={styles.text}>Enter Title:</Text>
      <TextInput value={title} onChangeText={(text) => setTitle(text)} style={styles.input} />
      <Text style={styles.text}>Enter Content:</Text>
      <TextInput value={content} onChangeText={(content) => setContent(content)} style={styles.input} />

      <Button title="Create Post" onPress={() => addBlogPost(title,content, () => {navigation.navigate('Index')}) }/>
    </View>
  )
}

CreateScreen.navigationOptions = () => {
  return {
    headerTitle: () => (<Text style={styles.header}>Create Post</Text>)
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
    fontSize: 20,
    fontWeight: 'bold'
  }
})

export default CreateScreen