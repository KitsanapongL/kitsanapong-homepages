import Head from 'next/head'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Kitsanapong's homepage" />
        <meta name="author" content="Kitsanapong Laporm" />
        <meta name="author" content="Kitsanapong" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="https://cdn.discordapp.com/attachments/1175062661478760508/1185176676041240677/sikky.jpg?ex=658ea8cb&is=657c33cb&hm=f98e75273951008667bc1b644b317fe5b315cd23ef2251331a417173f6185cec&" type="image/x-icon" />
        <meta name="twitter:title" content="Kitsanapong Laporm" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Kitsanapong" />
        <meta name="twitter:creator" content="@Kitsanapong" />
        <meta name="twitter:image" content="https://cdn.discordapp.com/attachments/1175062661478760508/1185176676041240677/sikky.jpg?ex=658ea8cb&is=657c33cb&hm=f98e75273951008667bc1b644b317fe5b315cd23ef2251331a417173f6185cec&" />
        <meta property="og:site_name" content="Kitsanapong Laporm" />
        <meta name="og:title" content="Kitsanapong Laporm" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://cdn.discordapp.com/attachments/1175062661478760508/1185176676041240677/sikky.jpg?ex=658ea8cb&is=657c33cb&hm=f98e75273951008667bc1b644b317fe5b315cd23ef2251331a417173f6185cec&" />
        <title>Kitsanapong Laporm - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main