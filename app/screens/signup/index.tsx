import React, { useEffect, useState } from 'react'
import { Alert, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import crashlytics from '@react-native-firebase/crashlytics'
import AsyncStorage from '@react-native-community/async-storage'

import { SignupScreenNavigationProps } from '../../navigators/models'
import Button from '../../components/Button'
import Text from '../../components/Text'
import Input from '../../components/Input'
import Root from '../../components/Root'
import styles from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { colors } from '../../lib/helper'
import { login, setUser } from '../../redux/action/actions'
import { useDispatch } from 'react-redux'
import { AppDispatch, User } from '../../redux/model.d'
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin'
import { GOOGLE_CLIENT_ID, IS_LOGGED_IN } from '../../lib/constants'

interface FirstFormState {
  fullName: string
  phoneNumber: string
  email: string
}

interface SecondFormState {
  username: string
  password: string
}

const Signup: React.FC = () => {
  const [activeForm, setActiveForm] = useState<number>(0)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [firstFormData, setFirstFormData] = useState<FirstFormState>({} as FirstFormState)
  const [secondFormData, setSecondFormData] = useState<SecondFormState>({} as SecondFormState)
  const navigation = useNavigation<SignupScreenNavigationProps>()
  const dispatch = useDispatch<AppDispatch>()

  const onChangeText = (name: string, text: string, firstForm?: boolean) => {
    if (firstForm) {
      return setFirstFormData(prevState => ({ ...prevState, [name]: text }))
    }

    return setSecondFormData(prevState => ({ ...prevState, [name]: text }))
  }

  const handleFormSubmit = () => {
    if (activeForm === 0) {
      if (firstFormData.email &&
        firstFormData.fullName
        && firstFormData.phoneNumber) {
          return setActiveForm(1)
        }
      }
    if (secondFormData.password && secondFormData.username) {
      setIsLoading(true)
      return auth()
        .createUserWithEmailAndPassword(firstFormData.email, secondFormData.password)
        .then((cred) => {
          AsyncStorage.setItem(IS_LOGGED_IN, 'true')
          return firestore().collection('users')
            .doc(cred.user.uid).set({
              fullName: firstFormData.fullName,
              phoneNumber: firstFormData.phoneNumber,
              username: secondFormData.username
            })
        })
        .then(() => {
          const authUserData = auth().currentUser
          firestore().collection('users')
            .doc(authUserData?.uid).get().then((doc) => {
              const properData = {
                email: authUserData?.email,
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
  
  const renderFirstForm = () => {
    return (
      <View>
        <Input
          placeholder='Full Name'
          label='Full Name'
          value={firstFormData.fullName}
          onChangeText={(text) => onChangeText('fullName', text, true)}
        />
        <Input
          placeholder='Phone Number'
          label='Phone Number'
          value={firstFormData.phoneNumber}
          onChangeText={(text) => onChangeText('phoneNumber', text, true)}
          keyboardType='phone-pad'
        />
        <Input
          placeholder='Email Address'
          label='Email Address'
          value={firstFormData.email}
          onChangeText={(text) => onChangeText('email', text, true)}
          keyboardType='email-address'
        />
      </View>
    )
  }

  const renderSecondForm = () => {
    return (
      <View>
        <Input
          placeholder='Username'
          label='Username'
          value={secondFormData.username}
          onChangeText={(text) => onChangeText('username', text)}
        />
        <Input
          placeholder='Password'
          label='Password'
          value={secondFormData.password}
          onChangeText={(text) => onChangeText('password', text)}
          secureTextEntry
        />
      </View>
    )
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
        <Text style={styles.headerTitle}>Signup</Text>
      </View>
      {activeForm === 0 ? renderFirstForm() : renderSecondForm()}
      <Button
        title={activeForm === 0 ? 'Continue' : 'Signup'}
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
      <TouchableOpacity  style={{ marginTop: 5 }} onPress={() => navigation.goBack()}>
        <Text style={{ textAlign: 'center' }}>
          Already signed up? <Text style={{ color: colors.primary }}>Login</Text>
        </Text>
      </TouchableOpacity>
    </Root>
  )
}

export default Signup
