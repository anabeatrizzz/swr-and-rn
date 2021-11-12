import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { getPostsWithPagination } from '../../services/posts';
import useSWRInfinite from "swr";
import { useSWRNativeRevalidate } from "@nandorojo/swr-react-native";
import styles from './Posts.css'

export default function Posts(){
  const [limit, setLimit] = useState(2);
  const fetcher = () => getPostsWithPagination(limit).then(data => data)
  function getKey(limit: number){
    return `/posts?_start=0&_limit=${limit}`
  }

  const { data: posts, mutate } = useSWRInfinite(getKey(limit), fetcher)
  useSWRNativeRevalidate({ mutate });

  function handleAddPress(){
    setLimit((previousValue) => previousValue + 1);
  }

  function handleRemovePress(){
    setLimit((previousValue) => previousValue - 1);
  }

  return(
    <View style={styles.container}>
      {
        !posts ? <ActivityIndicator animating={true} size={'large'} /> :
        posts.map((post: any) => (
          <View key={post.id}>
            <Text style={styles.title}>
              {post.title}
            </Text>
            <Text style={styles.body}>
              {post.body}
            </Text>
          </View>
        ))
      }
      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={handleAddPress}>
          <Text style={styles.btn}>
            Add Post
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleRemovePress}>
          <Text style={styles.btn}>
            Remove Post
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}