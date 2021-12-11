import Head from 'next/head'
import { Container, Flex, VStack } from '@chakra-ui/react'
import React from 'react'
import Details from 'src/sections/details'
import Cart from 'src/sections/cart'

const Page = () => (
  <Container maxW="container.xl" p={0}>
    <Head>
      <title>차크라 UI 연습</title>
    </Head>
    <Flex h="100vh" py={[0, 10, 20]}>
      <Details />
      <Cart />
    </Flex>
  </Container>
)

export default Page
