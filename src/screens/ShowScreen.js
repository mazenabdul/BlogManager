import React, {useContext} from 'react'
import BlogContext from '../context/BlogContext'
import {View, Text, StyleSheet} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { EvilIcons } from '@expo/vector-icons' 

const ShowScreen = ({ navigation }) => {
  //The ID of what was tapped on screen
  const id = navigation.getParam('id')
  //Current state of blog posts from context
  const { data } = useContext(BlogContext)

  //Search through the posts to find the one with the matching ID and return it
  const blogPost = data.find((blogPost) => blogPost.id == id)

  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  )
}

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Edit', {id: navigation.getParam('id')})}>
        <EvilIcons name="pencil" size={35} style={styles.icon}/>
      </TouchableOpacity>
    ),
    headerTitle: () => (
      <Text style={styles.header}>Your Blog</Text>
    ) 
  }
}

const styles = StyleSheet.create({
  icon:{
    marginRight:10
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold'
  }
})

export default ShowScreen