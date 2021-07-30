import { Box, Button, Center, CloseButton, HStack, Input, Spacer, Tag, TagCloseButton, Text, Wrap } from "@chakra-ui/react";

function MakingRandom({ setIsRandomOpen }) {
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
        <Tag size="sm" borderRadius="full">
          <Input focusBorderColor="unstyled" maxW="100px" h="full" p="0px" fontSize="10px" border="0px" placeholder="눌러서 수정하세요" />
          <TagCloseButton w="9px" h="9px" fontSize="9px" bg="black" color="white" />
        </Tag>
        <Tag size="sm" borderRadius="full">
          <Input focusBorderColor="unstyled" maxW="100px" h="full" p="0px" fontSize="10px" border="0px" placeholder="눌러서 수정하세요" />
          <TagCloseButton w="9px" h="9px" fontSize="9px" bg="black" color="white" />
        </Tag>
        <CloseButton w="15px" h="15px" fontSize="9px" fontWeight="bold" borderRadius="full" bg="#323232" transform="rotate(45deg)"></CloseButton>
      </Wrap>
      <Box w="full" h="1px" bg="black" mt="38px" mb="9px"></Box>
      <Center>
        <Button w="90px" h="23px" borderRadius="10px" p="0px" bg="#323232" border="0px">
          <Text fontSize="10px" color="white" paddingX="10px">
            뽑기 시작
          </Text>
        </Button>
      </Center>
    </Box>
  );
}

export default MakingRandom;
