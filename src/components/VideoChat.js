import { Box, Button, HStack, Text, Wrap, Divider, Spacer, Flex, Center, IconButton, VStack, Stack } from "@chakra-ui/react"

import FloatingBar from "./FloatingBar";

function VideoChat() {
  return (
    <Center w="full" y="full" position="relative">
      <VStack w="full" h="full" borderRadius="10px" p="20px" bg="#323232">
        <Flex w="full" px="35px" py="10px" align="center" borderRadius="20px" bg="black">
          <Text fontSize="24px" fontWeight="bold" color="white">[숭실대학교]</Text>
          <Text fontSize="20px" fontWeight="medium" color="white" mr="20px">2021 가나다라마바사아자차카타파하</Text>
          <Spacer/>
          <Text fontSize="20px" fontWeight="medium" color="white">24분1초경과</Text>
        </Flex>
        <Wrap justify="center">
          <Box bg="black" w="211px" h="211px" borderRadius="10px" p="10px">
            <Text fontSize="16px" color="white">이름</Text>
          </Box>
          <Box bg="black" w="211px" h="211px" borderRadius="10px" p="10px">
            <Text fontSize="16px" color="white">이름</Text>
          </Box>
          <Box bg="black" w="211px" h="211px" borderRadius="10px" p="10px">
            <Text fontSize="16px" color="white">이름</Text>
          </Box>
          <Box bg="black" w="211px" h="211px" borderRadius="10px" p="10px">
            <Text fontSize="16px" color="white">이름</Text>
          </Box>
        </Wrap>
      </VStack>
      <FloatingBar/>
    </Center>
  )
}

export default VideoChat