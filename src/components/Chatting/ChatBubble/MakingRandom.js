import { Box, Button, Center, CloseButton, HStack, Input, Spacer, Tag, TagCloseButton, Text, Wrap } from "@chakra-ui/react";
import React, { useState } from "react";
import { randomPick, SocektEventEnum, socket } from "../../../api/connect";

function MakingRandom({ setIsRandomOpen, roomId, setIsBlock }) {
  const [lists, setList] = useState(["항목"]);

  const [listCnt, setListCnt] = useState(0);
  const [title, setTitle] = useState("");

  const AddList = (e) => {
    if (lists.length >= 12) {
      return alert("추가할 수 있는 항목 개수를 초과했습니다");
    }
    if (!lists[lists.length - 1]) {
      return alert("앞의 항목을 먼저 채워주세요.");
    }
    console.log(lists);
    let a = [...lists, "항목"];
    setList([...a]);
  };
  const getResult = () => {
    randomPick(title, lists, roomId);
    setList(["항목"]);
  };

  return (
    <Box w="full" bg="white" borderRadius="10px" p="10px">
      <HStack spacing="3px">
        <Text fontWeight="bold" fontSize="12px" m="0px" color="black">
          랜덤 뽑기를 생성합니다{" "}
        </Text>
        <Text fontWeight="medium" fontSize="10px" pt="2px" color="black">
          (최대 12개 항목 생성 가능)
        </Text>
        <Spacer />
        <CloseButton
          onClick={() => {
            setIsRandomOpen(false);
          }}
          w="17px"
          h="17px"
          fontSize="9px"
          fontWeight="bold"
          borderRadius="full"
          bg="#E14942"></CloseButton>
      </HStack>
      <Input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        focusBorderColor="unstyled"
        w="100%"
        h="13px"
        p="0px"
        m="0px"
        mt="11px"
        border="0px"
        color="black"
        fontWeight="bold"
        fontSize="11px"
        placeholder="뽑기 제목를 이곳에 입력하세요"></Input>
      <Box w="full" h="1px" bg="black" mt="3px" mb="10px"></Box>
      <Wrap spacing="9px" align="center">
        {lists.length > 0 &&
          lists.map((index, key) => {
            return (
              <Tag size="sm" borderRadius="full">
                <Input
                  onChange={(e) => {
                    let temp = lists;
                    temp[key] = e.target.value;
                    setList([...temp]);
                  }}
                  focusBorderColor="unstyled"
                  maxW="100px"
                  h="full"
                  p="0px"
                  fontSize="10px"
                  border="0px"
                  placeholder="눌러서 수정하세요"
                />
                <TagCloseButton
                  onClick={() => {
                    let temp = lists;
                    temp = temp.splice(key, 1);
                    setListCnt([...temp]);
                  }}
                  w="9px"
                  h="9px"
                  fontSize="9px"
                  bg="black"
                  color="white"
                />
              </Tag>
            );
          })}

        <CloseButton
          onClick={() => {
            AddList();
          }}
          w="15px"
          h="15px"
          fontSize="9px"
          fontWeight="bold"
          borderRadius="full"
          bg="#323232"
          transform="rotate(45deg)"></CloseButton>
      </Wrap>
      <Box w="full" h="1px" bg="black" mt="38px" mb="9px"></Box>
      <Center>
        <Button
          onClick={() => {
            getResult();
            setIsBlock(2);
          }}
          w="90px"
          h="23px"
          borderRadius="10px"
          p="0px"
          bg="#323232"
          border="0px">
          <Text fontSize="10px" color="white" paddingX="10px">
            뽑기 시작
          </Text>
        </Button>
      </Center>
    </Box>
  );
}

export default MakingRandom;
