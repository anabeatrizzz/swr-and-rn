import React from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import { getCities } from '../../services/cities';
import { useSWRNativeRevalidate } from "@nandorojo/swr-react-native";
import styles from './Cities.css'
import useSWR from 'swr';

export default function Posts(){
  const fetcher = () => getCities().then(data => data)
  const { data: cities, mutate } = useSWR('/v1/city', fetcher)
  useSWRNativeRevalidate({ mutate });

  return(
    <View style={styles.container}>
      {
        !cities ? <ActivityIndicator animating={true} size={'large'} /> :
        cities.map((city: any) => (
          <View key={city._id}>
            <Text style={styles.name}>
              {city.name}
            </Text>
            <Text style={styles.state}>
              {city.state}
            </Text>
          </View>
        ))
      }
    </View>
  )
}