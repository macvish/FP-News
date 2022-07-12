import React, { useEffect, useState } from 'react'
import { Alert, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin'
import { useDispatch } from 'react-redux'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import AsyncStorage from '@react-native-community/async-storage'

import Button from '../../components/Button'
import Input from '../../components/Input'
import Root from '../../components/Root'
import Text from '../../components/Text'
import { LoginScreenNavigationProps } from '../../navigators/models'
import styles from './styles'
import { AppDispatch, User } from '../../redux/model'
import { login, setUser } from '../../redux/action/actions'
import { GOOGLE_CLIENT_ID, IS_LOGGED_IN } from '../../lib/constants'
import { colors } from '../../lib/helper'

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const navigation = useNavigation<LoginScreenNavigationProps>()
  const dispatch = useDispatch<AppDispatch>()

  const handleFormSubmit = () => {
    if (email && password) {
      setIsLoading(true)
      return auth()
        .signInWithEmailAndPassword(email, password)
        .then((cred) => {          
          AsyncStorage.setItem(IS_LOGGED_IN, 'true')

          firestore().collection('users')
            .doc(cred?.user.uid).get().then((doc) => {
              const properData = {
                email: cred?.user?.email,
                fullName: doc.data()?.fullName,
                phoneNumber: doc.data()?.phoneNumber,
                username: doc.data()?.username
              }
  
              dispatch(login(true))
              dispatch(setUser(properData as User))
              setIsLoading(false)
              navigation.reset({ index: 0, routes: [ { name: 'NewsListing' } ] })
            })
        })
        .catch((err) => {
          Alert.alert(err)
        })
      }
  
    return Alert.alert('', 'Please fill in all required form')
  }

  const signupWithGoogle = () => {
    const signin = async () => {
      const { idToken } = await GoogleSignin.signIn()
      const googleCredential = auth.GoogleAuthProvider.credential(idToken)

      return auth().signInWithCredential(googleCredential)
    }

    signin().then((cred) => {
      console.log(cred)
    })
  }

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['email'],
      webClientId: GOOGLE_CLIENT_ID,
      offlineAccess: true
    })
  }, [])

  return (
    <Root>
      <View style={styles.headerWrapper}>
        <Text style={styles.headerTitle}>Login</Text>
      </View>
      <View>
        <Input
          placeholder='Email'
          label='Email'
          value={email}
          onChangeText={setEmail}
          autoComplete="email"
        />
        <Input
          placeholder='Password'
          label='Password'
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>
      <Button
        title='Login'
        onPress={handleFormSubmit}
        loading={isLoading}
        disabled={isLoading}
      />
      <View style={styles.orWrapper}>
        <View style={styles.halfDivider} />
        <Text style={styles.orText}>OR</Text>
        <View style={styles.halfDivider} />
      </View>
      <GoogleSigninButton
        style={{ width: 192, height: 48, alignSelf: 'center' }}
        size={1}
        color={GoogleSigninButton.Color.Dark}
        onPress={signupWithGoogle}
        disabled={isLoading}
      />
      <TouchableOpacity style={{ marginTop: 5 }} onPress={() => navigation.push('Signup')}>
        <Text style={{ textAlign: 'center' }}>
          Don't have an account yet? <Text style={{ color: colors.primary }}>Sign up</Text>
        </Text>
      </TouchableOpacity>
    </Root>
  )
}

export default Login
