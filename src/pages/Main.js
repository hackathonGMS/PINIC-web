import { Logo, InputCode } from "../components";
import { Link } from "react-router-dom";
import { Grid, GridItem, Tabs, Tab, TabList, TabPanels, TabPanel, Heading, Link as ChakraLink, Text, HStack, Box } from "@chakra-ui/react";
import PicnicBlock from "../components/PicnicBlock";
import AlertMsg from "../components/AlertMsg";
import React, { useState, useEffect, useRef } from "react";
import Chatting from "../components/Chatting";
import Video from "../components/Video";
import { Todo } from "../components/Chatting/TodoBlock";
import PullBlock from "../components/Chatting/PullBlock";
import RandomBlock from "../components/Chatting/RandomBlock";
import { joinRoom } from "../api/connect";
import FaceDetection from "../components/Video/FaceDetection";

export const Main = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [handelConnect, setHandleConnect] = useState(false);
  const [test, setTest] = useState(false);
  const [emoticonState, setEmoticonState] = useState(false);
  const [myRemonId, setMyRemonId] = useState("");
  const video = useRef(null);
  const [isBlock, setIsBlock] = useState(0);
  useEffect(() => {
    joinRoom(String(props.match.params.id), props.name);
  }, []);
  const handleClick = (index) => {
    setIsBlock(index);
  };
  const SwitchButton = (onClick) => {
    return (
      <>
        <ChakraLink onClick={() => onClick(1)}>
          <Text color="white" fontSize="18px" fontWeight="bold">
            투표
          </Text>
        </ChakraLink>
        <ChakraLink onClick={() => onClick(2)}>
          <Text color="white" fontSize="18px" fontWeight="bold">
            뽑기
          </Text>
        </ChakraLink>
      </>
    );
  };
  return (
    <>
      <Grid color="white" pb="3" pr="3" h="100vh" templateRows="repeat(12, 1fr)" templateColumns="repeat(12, 1fr)" gap={0}>
        <GridItem pl="3" colSpan={12}>
          <HStack h="full" justify="space-between" align="flex-end">
            <Heading fontSize="xl" color="white">
              PICNIC | {props.match.params.id}
            </Heading>
            <ChakraLink onClick={() => setIsOpen(true)}>
              <Heading fontSize="sm" color="white">
                {props.name} | 피크닉 나가기
              </Heading>
            </ChakraLink>
            {isOpen && <AlertMsg setIsOpen={setIsOpen} isOpen={isOpen} setHandleConnect={setHandleConnect} />}
          </HStack>
        </GridItem>
        <GridItem rowSpan={7} colSpan={9}>
          <PicnicBlock>
            <Video
              id={String(props.match.params.id)}
              handelConnect={handelConnect}
              video={video}
              setMyRemonId={setMyRemonId}
              setEmoticonState={setEmoticonState}
              emoticonState={emoticonState}
            />
          </PicnicBlock>
        </GridItem>
        <GridItem rowSpan={12} colSpan={3}>
          <PicnicBlock>
            <Chatting setIsBlock={setIsBlock} name={props.name} roomId={String(props.match.params.id)} />
          </PicnicBlock>
        </GridItem>
        <GridItem rowSpan={4} colSpan={3}>
          <PicnicBlock header={"사과같은 내 얼굴"}>
            <FaceDetection id={myRemonId} room={String(props.match.params.id)} emoticonState={emoticonState} video={video} />
          </PicnicBlock>
        </GridItem>
        <GridItem rowSpan={4} colSpan={3}>
          <PicnicBlock header={"회의 안건"}>
            <Todo roomId={String(props.match.params.id)} />
          </PicnicBlock>
        </GridItem>
        <GridItem rowSpan={4} colSpan={3}>
          <PicnicBlock>
            <Tabs align="start" bg={"message"} borderTopRadius={"10px"} isFitted variant="unstyled" padding={0}>
              <TabList>
                <Tab _selected={{ color: "white", bg: "black" }} borderTopRadius={"15px"} padding={0}>
                  <Text textAlign="left" fontSize="16px" fontWeight="bold">
                    투표
                  </Text>
                </Tab>
                <Tab _selected={{ color: "white", bg: "black" }} borderTopRadius={"15px"} padding={0}>
                  <Text textAlign="left" fontSize="16px" fontWeight="bold">
                    뽑기
                  </Text>
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel padding={0}>
                  <PullBlock roomId={String(props.match.params.id)} />
                </TabPanel>
                <TabPanel padding={0}>
                  <RandomBlock roomId={String(props.match.params.id)} />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </PicnicBlock>
        </GridItem>
      </Grid>
    </>
  );
};
