import React, { useEffect, useState } from "react";
import { Box, OrderedList, ListItem, HStack, Text, Wrap, Divider, Spacer, Flex, Center, Heading } from "@chakra-ui/react";
import { SocektEventEnum, socket } from "../../../api/connect";

//뽑기 결과 소켓 통신 결과 컴포넌트

const RandomBlock = ({ roomId }) => {
  const [lastIndex, setLastIndex] = useState(0);
  const [title, setTitle] = useState("");
  const [resultList, setResultList] = useState([]);
  const [result, setResult] = useState("");
  useEffect(() => {
    socket.on(SocektEventEnum.RANDOM_PICK_LIST_O, (data) => {
      setResultList(data.list);
      setTitle(data.title);
    });
    socket.on(SocektEventEnum.RAMDOM_PICK_O, (result) => {
      setResult(result);
    });
  }, []);
  return (
    <Box w="full" h="full" bg="#323232" px="22px" pt="32px" pb="20px">
      <Flex direction="column" w="full" h="full">
        <Heading fontSize="18px" fontWeight="bold" color="white" mb="11px">
          {title}
        </Heading>
        <OrderedList>{resultList && resultList.map((index) => <ListItem>{index}</ListItem>)}</OrderedList>
        <br />
        {result && <Heading size="xs">당첨 : {result}</Heading>}

        <Spacer />
      </Flex>
    </Box>
  );
};

export default RandomBlock;
