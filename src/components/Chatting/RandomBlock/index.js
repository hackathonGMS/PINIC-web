import React, { useEffect, useState } from "react";
import { Box, Link, Button, HStack, Text, Wrap, Divider, Spacer, Flex, Center } from "@chakra-ui/react";
import { SocektEventEnum, socket } from "../../../api/connect";
const RandomBlock = ({ roomId }) => {
  const [lastIndex, setLastIndex] = useState(0);
  const [title, setTitle] = useState("");
  const [resultList, setResultList] = useState([]);
  const [result, setResult] = useState("");
  useEffect(() => {
    socket.on(SocektEventEnum.RANDOM_PICK_LIST_O, (list) => {
      setResultList(list);
    });
    socket.on(SocektEventEnum.RAMDOM_PICK_O, (result) => {
      setResult(result);
    });
  }, []);
  return (
    <Box w="full" h="full" bg="#323232" px="22px" pt="32px" pb="20px">
      <Flex direction="column" w="full" h="full">
        <Text fontSize="18px" fontWeight="bold" color="white" mb="11px">
          {title}
        </Text>
        <Wrap spacing="8px">dd</Wrap>
        {resultList}
        <br />
        {result}
        <Spacer />
      </Flex>
    </Box>
  );
};

export default RandomBlock;
