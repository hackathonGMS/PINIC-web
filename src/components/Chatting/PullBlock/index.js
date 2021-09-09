import React, { useEffect, useState } from "react";
import db, { FBcreatePull } from "../firbase";
import { Box, Link, Button, HStack, Text, Wrap, Divider, Spacer, Flex, Center } from "@chakra-ui/react";
const PullBlock = ({ roomId }) => {
  const [lastIndex, setLastIndex] = useState(0);
  const [title, setTitle] = useState("");
  const [lists, setList] = useState();
  const [isAnoun, setIsAnoun] = useState(false);
  const [isMulti, setIsMulti] = useState(false);
  useEffect(() => {
    console.log(roomId);
    db.collection("Chatting")
      .doc(roomId)
      .collection("Pull")
      .onSnapshot((d) => {
        if (d.docChanges().length < 3) {
          d.docChanges().forEach((change) => {
            setTitle(change.doc.data().title);
            setList(change.doc.data().lists);
            setIsAnoun(change.doc.data().isAnoun);
            setIsMulti(change.doc.data().isMulti);
          });
        }
      });
    //FBcreatePull(roomId, title, lists, isAnoun, isMulti);
  }, []);
  return (
    <Box w="full" h="full" bg="#323232" px="22px" pt="14px" pb="20px">
      <Flex direction="column" w="full" h="full">
        <Text textAlign="left" fontSize="18px" fontWeight="bold" color="white" mb="11px">
          {title}
        </Text>
        <Wrap spacing="8px">
          {lists &&
            lists.map((index, key) => {
              return (
                <Box
                  as={Link}
                  key={key}
                  onClick={() => {
                    let temp = lists;
                    temp[key].count = index.count + 1;
                    setList([...temp]);
                    FBcreatePull(roomId, title, lists, isAnoun, isMulti);
                  }}
                  minW="43px"
                  borderRadius="full"
                  border="2px"
                  borderColor="white"
                  align="center"
                  py="1"
                  px="1"
                  bg="transparent"
                  color="white"
                  fontSize="12px">
                  {index.obj} : {index.count}표
                </Box>
              );
            })}
        </Wrap>

        <Spacer />
      </Flex>
    </Box>
  );
};

export default PullBlock;
