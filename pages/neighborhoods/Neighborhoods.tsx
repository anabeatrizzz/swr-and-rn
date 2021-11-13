import React from 'react';
import { useSWRNativeRevalidate } from '@nandorojo/swr-react-native';
import { ActivityIndicator, Text, View } from 'react-native';
import useSWR from 'swr';
import { getNeighborhoods } from '../../services/neighborhoods';
import styles from './Neighborhoods.css';

export default function Neighborhoods(){
  const fetcher = () => getNeighborhoods().then(data => data)
  const { data: neighborhoods, mutate } = useSWR('/v1/neighborhood', fetcher)
  useSWRNativeRevalidate({ mutate });

  return(
    <View style={styles.container}>
      {
        !neighborhoods ? <ActivityIndicator animating={true} size={'large'} /> :
        neighborhoods.map((neighborhood: any) => (
          <View key={neighborhood._id}>
            <Text style={styles.name}>
              {neighborhood.name}
            </Text>
            <Text style={styles.city}>
              {neighborhood.city.name}
            </Text>
          </View>
        ))
      }
    </View>
  )
}