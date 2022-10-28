import { View, Text, StyleSheet, TextInput, Button, Keyboard } from 'react-native'
import React from 'react'
import { useState } from 'react'
import {useFormik} from "formik"
import * as Yup from "yup"
import useAuth from '../hooks/useAuth'
import {user, userDetails} from "../../utils/userDb.js"

export default function LoginForm() {

const [erro, setErro]=useState("")
const {login} = useAuth();
console.log("soy useAuth",useAuth())
console.log("soy user",  user)
console.log("soy user Auth",useAuth())

const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validationChange:false,
    onSubmit:(formValue)=>{
        setErro("");
        const {username, clave}= formValue;
        if(username !== user.username || clave !== user.clave){
            setErro("El usuario o la clave son incorrectos")
        }else{
            login(userDetails)        }
    }
});

  return (
    <View>
      <Text style={styles.title} >Iniciar Sesion</Text>
      <TextInput
      placeholder="Nombre de usuario: admin"
      style={styles.input}
      autoCapitalize="none"
      value={formik.values.username}
      onChangeText={(text)=>formik.setFieldValue("username", text)}
      />
      <TextInput
      placeholder='clave: 12345'
      style={styles.input}
      autoCapitalize="none"
      secureTextEntry={true}
      value={formik.values.clave}
      onChangeText={(text)=>formik.setFieldValue("clave", text)}
      />
      <Button title="Ingresar" onPress={formik.handleSubmit}/>
        <Text style={styles.error}>{formik.errors.username}</Text>
        <Text style={styles.error}>{formik.errors.clave}</Text>

        <Text style={styles.error}>{erro}</Text>
    </View>
  )
}

function initialValues(){
    return{
        username:"",
        clave:"",
    }
}

function validationSchema(){
    return{
        username: Yup.string().required("El usuario es requerido"),
        clave: Yup.string().required("La clave es requerido"),
    }
}
const styles =StyleSheet.create({
    title:{
        textAlign:"center",
        fontSize:28,
        fontWeight:"bold",
        marginTop:50,
        marginBottom:15
    },
    input:{
        height:40,
        margin:12,
        borderWidth:1,
        padding:10,
        borderRadius:10,
    },
    error:{
        textAlign:"center",
        color:"#f00",
        marginTop:20
    }
})