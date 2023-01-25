import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react' // tudo que tem provider se trata de contexto
import { ReactQueryDevtools } from 'react-query/devtools'
import { theme } from '../styles/theme'

import { SidebarDrawerProvider } from '../contexts/SidebarDrawerContext'
import { makeServer } from '../services/mirage';
import { QueryClientProvider } from 'react-query';
import { queryClient } from '../services/queryClient'

if(process.env.NODE_ENV === 'development') {
  makeServer();
}

function MyApp({ Component, pageProps }: AppProps) {
  return ( // ChakraProvider foi colocado em volta de todo o return para que todo conteúdo tenha acesso aos themesi
  <QueryClientProvider client={queryClient}>
     <ChakraProvider theme={theme}> 
      <SidebarDrawerProvider>
        <Component {...pageProps} />
      </SidebarDrawerProvider>
    </ChakraProvider>
    
    <ReactQueryDevtools />
  </QueryClientProvider>
    )
}

export default MyApp
