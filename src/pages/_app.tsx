import { ChakraProvider } from '@chakra-ui/react'

import theme from '../theme'
import { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import SmallWithSocial from '../components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Component {...pageProps} />
      <SmallWithSocial />
    </ChakraProvider>
  )
}

export default MyApp
