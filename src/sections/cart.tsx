import {
  VStack,
  HStack,
  Stack,
  AspectRatio,
  Heading,
  Text,
  Divider,
  useColorMode,
  useColorModeValue,
  Button,
  Image
} from '@chakra-ui/react'

const Cart = () => {
  const { toggleColorMode } = useColorMode()
  const bgColor = useColorModeValue('gray.50', 'whiteAlpha.50')
  const secondaryTextColor = useColorModeValue('gray.600', 'gray.400')

  return (
    <VStack w="full" h="full" border={'1px solid #ccc'} p={10} spacing={10} alignItems="flex-start" bg={bgColor}>
      <VStack spacing={3} alignItems="flex-start">
        <Heading size="2xl">Your cart</Heading>
        <Text>
          If price is too hard on your eyes,
          <Button onClick={toggleColorMode} variant="link" colorScheme="blackAlpha" color={secondaryTextColor}>
            try changing the theme.
          </Button>
        </Text>
      </VStack>
      <HStack>
        <AspectRatio ratio={1} w={24}>
          <Image src="/assets/skateboard.jpg" alt="skate board" />
        </AspectRatio>
        <Stack spacing={0} w="full" direction="row" justifyContent="space-between" alignItems="center">
          <VStack w="full" spacing={0}>
            <Heading size="md">Penny borad</Heading>
            <Text color={secondaryTextColor}>PNYCOMP27541</Text>
          </VStack>
          <Heading size="sm" textAlign="end">
            $119.00
          </Heading>
        </Stack>
      </HStack>
      <VStack spacing={4} alignItems="stretch" w="full">
        <HStack justifyContent="space-between">
          <Text color={secondaryTextColor}>Subtotal</Text>
          <Heading size="sm">$119.00</Heading>
        </HStack>
        <HStack justifyContent="space-between">
          <Text color={secondaryTextColor}>Shipping</Text>
          <Heading size="sm">$19.99</Heading>
        </HStack>
        <HStack justifyContent="space-between">
          <Text color={secondaryTextColor}>Taxes (estimated)</Text>
          <Heading size="sm">$23.80</Heading>
        </HStack>
      </VStack>
      <Divider />
      <HStack justifyContent="space-between" w="full">
        <Text color={secondaryTextColor}>Total</Text>
        <Heading size="lg">$162.79</Heading>
      </HStack>
    </VStack>
  )
}

export default Cart
