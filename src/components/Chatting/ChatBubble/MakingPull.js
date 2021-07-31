import { Box, Button, Center, Checkbox, HStack, Input, Spacer, Text, Wrap, CloseButton, Tag, TagLabel, TagCloseButton } from "@chakra-ui/react";
import React, { useState } from "react";
import { FBcreatePull } from "../firbase";

function MakingPull({ setIsPullOpen, roomId }) {
  const [title, setTitle] = useState("");
  const [list, setList] = useState([]);
  const [isAnoun, setIsAnoun] = useState(false);
  const [isMulti, setIsMulti] = useState(false);

  const AddList = (e) => {
    if (list.length >= 12) {
      return alert("추가할 수 있는 항목 개수를 초과했습니다");
    }
    setList(...list, e.target.value);
  };
  const createPull = () => {
    FBcreatePull(roomId, title, list, isAnoun, isMulti);
  };

  return (
    <Box w="full" bg="white" borderRadius="10px" p="10px">
      <HStack spacing="3px">
        <Text fontWeight="bold" fontSize="12px" m="0px" color="black">
          새 투표를 생성합니다{" "}
        </Text>
        <Text fontWeight="medium" fontSize="10px" pt="2px" color="black">
          (최대 12개 항목 생성 가능)
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
      <HStack spacing="11px">
        <Checkbox size="sm" color="black" spacing="3px" borderColor="black">
          <Text fontWeight="bold" fontSize="10px">
            익명투표
          </Text>
        </Checkbox>
        <Checkbox size="sm" color="black" spacing="3px" borderColor="black">
          <Text fontWeight="bold" fontSize="10px">
            복수선택
          </Text>
        </Checkbox>
      </HStack>
      <Wrap mt="12px" spacing="9px" align="center">
        <Tag size="sm" borderRadius="full">
          <Input variant="unstyled" maxW="100px" h="full" p="0px" fontSize="10px" border="0px" placeholder="눌러서 수정하세요" />
          <TagCloseButton w="9px" h="9px" fontSize="9px" bg="black" color="white" />
        </Tag>
        <CloseButton w="15px" h="15px" fontSize="9px" fontWeight="bold" borderRadius="full" bg="#323232" transform="rotate(45deg)"></CloseButton>
      </Wrap>
      <Box w="100%" h="1px" bg="black" mt="38px" mb="9px"></Box>
      <Center>
        <Button onClick={() => createPull()} w="90px" h="23px" borderRadius="10px" p="0px" bg="#323232" border="0px">
          <Text fontSize="10px" color="white" paddingX="10px">
            투표 생성
          </Text>
        </Button>
      </Center>
    </Box>
  );
}

export default MakingPull;
