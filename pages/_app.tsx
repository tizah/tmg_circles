import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Auth0Provider } from "@auth0/auth0-react";

import '../components/Header/Header.css'


function MyApp({ Component, pageProps }: AppProps) {
  return(
  //   <Auth0Provider
  //   domain="dev-wgu9aun9.auth0.com"
  //   clientId="sA06YGcCapyqJImzwv4tUQRVg6VlDBX3"
  //   redirectUri={`http://localhost:3000`}
  // >

  <Auth0Provider
    domain="dev-wgu9aun9.auth0.com"
    clientId="BT0dXeyhwfwI7mB5wnjHo0PWX4JK359M"
    redirectUri={`https://tmgcircles.netlify.app/`}
  >
      <Component {...pageProps} />
  </Auth0Provider>
  ) 
  

}

export default MyApp
