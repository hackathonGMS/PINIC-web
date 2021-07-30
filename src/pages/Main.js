import { Logo, InputCode } from "../components";
import { Link } from "react-router-dom";
import { Grid, GridItem, Heading, Link as ChakraLink, Center, HStack } from "@chakra-ui/react";
import PicnicBlock from "../components/PicnicBlock";
import AlertMsg from "../components/AlertMsg";
import React, { useState, useEffect } from "react";
import Chatting from "../components/Chatting";
import Video from "../components/Video";

export const Main = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    Video();
  }, []);
  return (
    <>
      {console.log(props)}
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

            {isOpen && <AlertMsg setIsOpen={setIsOpen} isOpen={isOpen} />}
          </HStack>
        </GridItem>
        <GridItem rowSpan={7} colSpan={9}>
          <PicnicBlock>
            <h1>메인화면</h1>
          </PicnicBlock>
        </GridItem>
        <GridItem rowSpan={12} colSpan={3}>
          <PicnicBlock>
            <Chatting name={props.name} roomId={String(props.match.params.id)} />
          </PicnicBlock>
        </GridItem>
        <GridItem rowSpan={4} colSpan={3}>
          <PicnicBlock header={"가상배경"}>
            <h1>ddd</h1>
          </PicnicBlock>
        </GridItem>
        <GridItem rowSpan={4} colSpan={3}>
          <PicnicBlock header={"캘린더"}>
            <h1>ddd</h1>
          </PicnicBlock>
        </GridItem>
        <GridItem rowSpan={4} colSpan={3}>
          <PicnicBlock header={"[투표]"}>
            <h1>ddd</h1>
          </PicnicBlock>
        </GridItem>
      </Grid>
    </>
  );
};
