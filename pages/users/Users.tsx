import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { getUsersPagination } from '../../services/users';
import styles from './Users.css';

export default function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsersPagination()
      .then((response) => {
        setUsers(response)
      })
      .catch(err => console.log(err))
  }, [])
  return(
    <View style={styles.container}>
      {
        users.map((user: any) => (
          <View key={user.id}>
            <Text style={styles.nameTxt}>
              {user.name}
            </Text>
            <Text style={styles.emailTxt}>
              {user.email}
            </Text>
          </View>
        ))
      }
    </View>
  )
}