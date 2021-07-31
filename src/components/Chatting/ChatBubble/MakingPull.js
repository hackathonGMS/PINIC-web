import { Box, Button, Center, Checkbox, HStack, Input, Spacer, Text, Wrap, CloseButton, Tag, TagLabel, TagCloseButton, list } from "@chakra-ui/react";
import React, { useState } from "react";
import { FBcreatePull } from "../firbase";

function MakingPull({ setIsPullOpen, roomId }) {
  const [title, setTitle] = useState("");
  const [lists, setList] = useState([{ obj: "항목", count: 0 }]);
  const [isAnoun, setIsAnoun] = useState(false);
  const [isMulti, setIsMulti] = useState(false);
  const [inputObject, setInputObject] = useState("");
  const [listCnt, setListCnt] = useState(0);
  const AddList = (e) => {
    if (lists.length >= 12) {
      return alert("추가할 수 있는 항목 개수를 초과했습니다");
    }
    if (!lists[lists.length - 1]) {
      return alert("앞의 항목을 먼저 채워주세요.");
    }
    console.log(lists);
    let a = [...lists, { obj: "항목", count: 0 }];
    setList([...a]);
  };
  const createPull = () => {
    if (title && lists[lists.length - 1]) {
      return FBcreatePull(roomId, title, lists, isAnoun, isMulti);
    } else {
      alert("필수 항목을 먼저 채워주세요!");
    }
  };

  return (
    <Box w="full" bg="white" borderRadius="10px" p="10px">
      <HStack spacing="3px">
        <Text fontWeight="bold" fontSize="12px" m="0px" color="black">
          새 투표를 생성합니다{" "}
        </Text>
        <Text fontWeight="medium" fontSize="10px" pt="2px" color="black">
          (투표 생성시 기존 항목은 사라짐)
        </Text>
        <Spacer />
        <CloseButton
          onClick={() => {
            setIsPullOpen(false);
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
        placeholder="투표 제목를 이곳에 입력하세요"></Input>
      <Box w="full" h="1px" bg="black" mt="3px" mb="11px"></Box>
      {/* <HStack spacing="11px">
        <Checkbox onChange={() => setIsAnoun(!isAnoun)} size="sm" color="black" spacing="3px" borderColor="black">
          <Text fontWeight="bold" fontSize="10px">
            익명투표
          </Text>
        </Checkbox>
        <Checkbox onChange={() => setIsMulti(!isMulti)} size="sm" color="black" spacing="3px" borderColor="black">
          <Text fontWeight="bold" fontSize="10px">
            복수선택
          </Text>
        </Checkbox>
      </HStack> */}
      <Wrap mt="12px" spacing="9px" align="center">
        {lists.length > 0 &&
          lists.map((index, key) => {
            return (
              <Tag size="sm" borderRadius="full">
                <Input
                  onChange={(e) => {
                    let temp = lists;
                    temp[key].obj = e.target.value;
                    setList([...temp]);
                  }}
                  variant="unstyled"
                  maxW="100px"
                  h="full"
                  p="0px"
                  fontSize="10px"
                  border="0px"
                  value={index.obj}
                  placeholder="눌러서수정하세요"
                />
                <TagCloseButton
                  w="9px"
                  h="9px"
                  fontSize="9px"
                  bg="black"
                  color="white"
                  onClick={() => {
                    let temp = lists;
                    temp = temp.splice(key, 1);
                    setListCnt([...temp]);
                  }}
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
      <Box w="100%" h="1px" bg="black" mt="38px" mb="9px"></Box>
      <Center>
        <Button
          onClick={() => {
            createPull();
            setIsPullOpen(false);
          }}
          w="90px"
          h="23px"
          borderRadius="10px"
          p="0px"
          bg="#323232"
          border="0px">
          <Text fontSize="10px" color="white" paddingX="10px">
            투표 생성
          </Text>
        </Button>
      </Center>
    </Box>
  );
}

export default MakingPull;
