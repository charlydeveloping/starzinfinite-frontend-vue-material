import axios from './index'

const instance = require('axios')

export default {
  login (payload) {
    return axios.post('/api/token', payload)
  },
  register (userData) {
    return axios.post('/api/register', userData)
  },
  cookieGet () {
    return instance.get('https://dev.data-fidelis.com/erpdata/api/proveedores', 
      {
        withCredentials: true,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        
          // Cookies: {
          //   "XSRF-TOKEN":"eyJpdiI6IkZES1BoT0l2eUw1QktNdlZQb0hqb0E9PSIsInZhbHVlIjoibDVxZzhWMm5ORzZlUnREZzQrSTVwZzljejJcLzJINzhLTUg1aU1pOTFiSk1aNjcxYU5aNlVxSnRTc0MwQlUwVVkiLCJtYWMiOiJjYmUxOTcxOTZmNmZlM2JmMGEzZDNkMjA0MDUzYTA4NjdhNjZlYmFmYmE1ZGYwMDUyNzkxZWVmOTZjODRkZWQ5In0%3D",
          //   "erpdata_session":"eyJpdiI6IllaMVJhZEJBOGlGTVVSZTRYU1hxeEE9PSIsInZhbHVlIjoiODJYVmNBZFwvVGJkeElRXC9iMlN0QThmRXJVN29cL2F1WGdkc2M0WkUwdmRxb1FlajdjUjhuNlpaaFoyODFkSWlidCIsIm1hYyI6IjUwYmFmZmY5YzQyNGE0NjBhYjMxZWYyYjQ1N2VhNjhlYmFiYjI1NjU2MWFmY2M5YjdjN2NjMWUzMmEzYmM5MGMifQ%3D%3D"
          // }
          
          // Cookie: "XSRF-TOKEN=eyJpdiI6IkZES1BoT0l2eUw1QktNdlZQb0hqb0E9PSIsInZhbHVlIjoibDVxZzhWMm5ORzZlUnREZzQrSTVwZzljejJcLzJINzhLTUg1aU1pOTFiSk1aNjcxYU5aNlVxSnRTc0MwQlUwVVkiLCJtYWMiOiJjYmUxOTcxOTZmNmZlM2JmMGEzZDNkMjA0MDUzYTA4NjdhNjZlYmFmYmE1ZGYwMDUyNzkxZWVmOTZjODRkZWQ5In0%3D; erpdata_session=eyJpdiI6IllaMVJhZEJBOGlGTVVSZTRYU1hxeEE9PSIsInZhbHVlIjoiODJYVmNBZFwvVGJkeElRXC9iMlN0QThmRXJVN29cL2F1WGdkc2M0WkUwdmRxb1FlajdjUjhuNlpaaFoyODFkSWlidCIsIm1hYyI6IjUwYmFmZmY5YzQyNGE0NjBhYjMxZWYyYjQ1N2VhNjhlYmFiYjI1NjU2MWFmY2M5YjdjN2NjMWUzMmEzYmM5MGMifQ%3D%3D"
        },

      }
    )
  },
  loginCookie (payload) {
  //   const agent = new https.Agent({  
  //     rejectUnauthorized: false
  //   });

  //   const config = {
  //     method: 'post',
  //     url: 'https://dev.data-fidelis.com/erpdata/api/proveedores',
  //     headers: { 'User-Agent': agent },
  //     data: payload
  // }

  // return instance(config)

  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  };

  //instance.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

    // return instance.get('https://dev.data-fidelis.com/api/notAuth')
    return instance.post('https://dev.data-fidelis.com/erpdata/api/login', 
    payload,{withCredentials: true})
  }
}
