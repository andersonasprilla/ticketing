import axios from 'axios'
import { useState } from 'react'

export default ({ url, method, body, onSuccess }) => {
  const [errors, setErrors] = useState([])

  const doRequest = async () => {
    try {
      setErrors(null)
      const response = await axios[method](url, body)
      if (onSuccess) {
        onSuccess(response.data)
      }
    } catch (err) {
      setErrors(
        <div className='alert alert-danger'>
          <h4>Ooops....</h4>
          <ul className='my-0'>
            {err.response?.data?.errors?.map((err, index) => (
             <li key={index}>{err.message}</li>
            ))}
          </ul>
        </div>
      )
    }
  } 

  return { doRequest, errors }  
}