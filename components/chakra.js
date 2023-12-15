import {
    ChakraProvider,
    cookieStorageManagerSSR,
    localStorageManager
} from '@chakra-ui/react'
import theme from '../lib/theme'

export default function Chakra({ cookie, children }) {
    const colorModeManager = 
        typeof cookie === 'string'
            ? cookieStorageManagerSSR(cookies)
            : localStorageManager
        
    return (
        <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
            {children}
        </ChakraProvider>
    )
}

export async function getServerSideProps({ req }) {
    return {
        props: {
            cookies: req.headers.cookie ?? ''
        }
    }
}