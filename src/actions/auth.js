import { BASE_URL, LOCAL_URL } from '../helpers/globalPaths'
import { showMessage, hideMessage } from "react-native-flash-message";
import Interceptor from '../helpers/interceptor'
import { Actions } from 'react-native-router-flux';


export const emailChanged = () => {
  return {
    type: 'EMAIL_CHANGED',
    payload: {},
  }
}

export const loadSpinner = (flag) => {
  return {
    type: 'EMAIL_CHANGED',
    payload: flag,
  }
}

export const getUser = email => {
  return {
    type: 'GET_USER',
    payload: email,
  }
}

export const passwordChanged = password => {
  return {
    type: 'PASSWORD_CHANGED',
    payload: password,
  }
}

export const loginUser = (params) => {
  url = `${LOCAL_URL}api/v1/sign_in`

  return dispatch => {
    dispatch({
      type: 'LOAD_SPINNER',
      payload: true
    })
    console.log("loginUser actions called")
    fetch(url, {
      method: 'POST',
      headers: Interceptor.getHeaders(),
      body: JSON.stringify({
        user: {
          email: params.email,
          password: params.password,
        }
      }),
    }).then(response => {
      console.log(response)
      if (response.status == 401) {
        console.log('AUTHENTICATION ERROR!!')
        showMessage({
            message: "FAILED!",
            description: response.message,
            type: "danger",
          });
        dispatch({
          type: 'LOGIN_FAILED',
        })
      } else {
        response.json().then(data => {
          //let parsed = JSON.parse(data);
          if (data.status == 401) {
            console.log('AUTHENTICATION ERROR!!')
            showMessage({
                message: "FAILED!",
                description: data.message,
                type: "danger",
              });
            dispatch({
              type: 'LOGIN_FAILED',
            })
          }
          else {
           console.log('SUCCESS!!')
          showMessage({
            message: "SUCCESS!",
            description: data.message,
            type: "success",
          });
          
          dispatch({
            type: 'LOGIN_USER_SUCCESS',
            payload: { data: data, response: response },
            // history.push("/Home")
          })
          Actions.home();
        }
        })
      }
    })
  }
}

export const logoutUser = ({ access_token, uid, client }) => {
  url = `${LOCAL_URL}api/v1/sign_out`

  return dispatch => {
    dispatch({
      type: 'LOAD_SPINNER',
    })
    fetch(url, {
        method: 'DELETE',
        headers: Interceptor.getHeaders(),
        body: JSON.stringify({
          uid: uid,
          'access-token': access_token,
        }),
      }
    )
      .then(response => {
        response.json().then(data => {
          dispatch({
            type: 'LOG_OUT_USER',
            payload: data,
          })
        })
        showMessage({
          message: "SUCCESS!",
          description: "Log out successfully!",
          type: "success",
        });
        Actions.landing();
      })
      .catch(error => {
        console.log(error)
      })
  }
}
