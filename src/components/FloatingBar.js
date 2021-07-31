import { Wrap, IconButton } from "@chakra-ui/react"
import { IoMdMic, IoMdVideocam, IoMdHappy } from "react-icons/io";
import { IoHandRightSharp } from "react-icons/io5";

function FloatingBar() {
  return (
    <Wrap py="20px" px="33px" borderRadius="30px" bg="black" position="absolute" bottom="10%" spacing="33px" justify="center">
      <IconButton w="38px" h="38px" bg="transparent" color="white" fontSize="38px"
        icon={<IoMdMic />}></IconButton>
      <IconButton w="38px" h="38px" bg="transparent" color="white" fontSize="38px"
        icon={<IoMdVideocam />}></IconButton>
      <IconButton w="38px" h="38px" bg="transparent" color="white" fontSize="38px"
        icon={<IoMdHappy />}></IconButton>
      <IconButton w="38px" h="38px" bg="transparent" color="white" fontSize="38px"
        icon={<IoHandRightSharp />}></IconButton>
    </Wrap>
  )
}

export default FloatingBar  