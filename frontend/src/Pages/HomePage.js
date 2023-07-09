import React from 'react'
import{Container, Box, Text, Tab, TabList, TabPanels, TabPanel, Tabs} from "@chakra-ui/react"

import Login from '../components/Authentication/Login'
import Signup from '../components/Authentication/Signup'

const HomePage = () => {
  return (
    <Container maxW='xl' centerContent>

      <Box
         d="flex"
         justifyContent="center"
         p={3}
         bg="white"
         w="100%"
         m="40px 0 15px 0"
         borderRadius="lg"
         borderWidth="1px"
         borderColor="blue.900"
         padding="5px 0px 5px 220px"
      >
          
          <Text fontSize="4xl" fontFamily="Work sans">Talkie</Text>

      </Box>

      <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px" borderColor="blue.900">
      <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em">
            <Tab>Login</Tab>
            <Tab>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel> <Login/> </TabPanel>
            <TabPanel> <Signup/> </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      
    </Container>
  )
}

export default HomePage
