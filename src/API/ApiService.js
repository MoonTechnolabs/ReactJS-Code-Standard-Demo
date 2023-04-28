import {toast} from 'react-hot-toast'

import {URLS} from './UrlList'
import {store} from '../redux/store'
import {AuthAction} from '../redux/actions/AuthAction'

const apiKey = ''
// const apiKey = 'fdjighshdfhk'

const ApiService = async (url, type, data, formData = false, tokenValue = '') => {
  const {token, userData} = store.getState().AuthReducer

  const headers = {
    'x-api-key': apiKey,
    ...(formData ? {} : {'Content-Type': 'application/json'}),
    ...(tokenValue || token ? {Authorization: `Bearer ${tokenValue || token}`} : {}),
  }

  const requestOptions = {
    method: type,
    headers,
    body: formData ? data : JSON.stringify(data),
    redirect: 'follow',
  }

  const response = await fetch(`${URLS.BASE_URL}/${url}`, requestOptions)
  if (response.status === 401) {
    console.log(`file: ApiService.js:28 ===> ApiService ===> response:-`, response)
    const result = await (
      await fetch(`${URLS.BASE_URL}/auth/refresh_token`, {
        method: 'GET',
        headers,
        redirect: 'follow',
      })
    ).json()

    if (result.ack) {
      store.dispatch(
        AuthAction({
          token: result.data,
          userData,
        })
      )
      return ApiService(url, type, data, formData, result.data)
    } else {
      toast.error('You need to login first.')
      localStorage.clear()
      window.location.replace(`${window.location.origin}/#/login`)
    }

    return
  } else if (!response.ok) {
  }
  return response.json()
}

export default ApiService
