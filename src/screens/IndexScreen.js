import React, {useContext} from 'react'
import {View, Text, StyleSheet, FlatList, Button, TouchableOpacity} from 'react-native'
import BlogContext from '../context/BlogContext'
import {Feather} from '@expo/vector-icons'

const IndexScreen = ({ navigation }) => {

  const {data, deletePost} = useContext(BlogContext) 

  return (
    <View>
      <FlatList data={data} keyExtractor={(blogPost) => blogPost.id} renderItem={({ item }) => {
        return <View style={styles.view}> 
          <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id} )}>
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity> 
          <TouchableOpacity onPress={() => deletePost(item.id)}>
            <Feather style={styles.icon} name="trash" size={30} />
          </TouchableOpacity>
          </View>
      }} /> 
    </View>
  )
}

IndexScreen.navigationOptions = ( {navigation} ) => {
  return {
    headerRight: () => (
    <TouchableOpacity onPress={() => navigation.navigate("Create")}>
      <Feather style={styles.icon} name="plus" size={30}/>
    </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  view: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 12,
    marginVertical: 10,
    
  },
  icon : {
     marginRight: 10,
     marginVertical:10
  },
  
})

export default IndexScreen
