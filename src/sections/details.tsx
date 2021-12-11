import {
  FormControl,
  FormLabel,
  Input,
  Select,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  GridItem,
  Checkbox,
  Button
} from '@chakra-ui/react'

const Details = () => {
  return (
    <VStack w="full" h="full" border={'1px solid #ccc'} p={10} spacing={10} alignItems="flex-start">
      <VStack spacing={3} alignItems="flex-start">
        <Heading size="2xl">Your details</Heading>
        <Text>If you already have an account, click here to log in.</Text>
      </VStack>
      <SimpleGrid column={2} columnGap={3} rowGap={6} w="full">
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input placeholder="John" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>Lsat Name</FormLabel>
            <Input placeholder="Dow" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>Address</FormLabel>
            <Input placeholder="Blvd. Broken Dreams 21" />
          </FormControl>
        </GridItem>

        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>City</FormLabel>
            <Input placeholder="San Francisco" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>Country</FormLabel>
            <Select>
              <option value="usa">United States of America</option>
              <option value="use">United Arab Emirates</option>
              <option value="nmk">North Macedonia</option>
              <option value="de">Germany</option>
            </Select>
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <Checkbox defaultChecked>Ship to billing address</Checkbox>
        </GridItem>
        <GridItem colSpan={2}>
          <Button size="lg" w="full">
            Place order
          </Button>
        </GridItem>
      </SimpleGrid>
    </VStack>
  )
}

export default Details
