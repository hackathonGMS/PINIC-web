import {
  IconButton,
  Box,
  Heading,
  Icon,
  Input,
  Flex,
  Text,
  Spacer,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Portal,
  Button,
  useToast,
  Link,
} from "@chakra-ui/react";
import React, { useState, useEffect, forwardRef } from "react";
import { IoEllipsisHorizontalCircleSharp, IoPaperPlane } from "react-icons/io5";

import db from "./firbase";
import MakingPull from "./ChatBubble/MakingPull";
import MakingRandom from "./ChatBubble/MakingRandom";
import ChatCategorySelect from "./ChatCategorySelect";
import MyChat from "./ChatBubble/MyChat";
import OtherChat from "./ChatBubble/OtherChat";
import ChatBar from "./ChatBubble/ChatBar";
import { TTS } from "./TTS/textSound";

export default function Chatting({ roomId, name }) {
  const [chatMode, setChatMode] = useState(0);
  const [isPullOpen, setIsPullOpen] = useState(true);
  const [isRandomOpen, setIsRandomOpen] = useState(true);
  //일반,중요,텍스트,일정,하이퍼링크
  const colorList = ["primary", "notice", "tts", "calander", "hyperlink"];
  const chatList = ["일반 채팅", "중요한 채팅", "텍스트로 말하기", "일정 정해요", "링크 전송"];
  const chatHandler = () => {};

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [message, setSendMessage] = useState("");
  const toast = useToast();
  useEffect(() => {
    db.collection("Chatting")
      .doc(roomId)
      .collection("data")
      .orderBy("at", "desc")
      .onSnapshot((d) => {
        if (d.docChanges().length < 3) {
          d.docChanges().forEach((change) => {
            if (change.type === "added" && change.doc.data().type === 2) {
              TTS(change.doc.data().message);
            }
            if (change.type === "added" && change.doc.data().type === 1) {
              toast({
                title: "중요한 채팅이 올라왔어요!",
                description: change.doc.data().message,
                status: "success",
                duration: 9000,
                isClosable: true,
              });
            } else if (change.type === "added" && change.doc.data().type === 4) {
              toast({
                duration: 9000,
                isClosable: true,
                status: "info",
                title: "새로운 링크가 올라왔어요!",
                description: (
                  <>
                    <Text fontSize="18px">바로 이동하기</Text>
                    <Text fontSize="18px" bold>
                      <Link href={change.doc.data().message}>{change.doc.data().message}</Link>
                    </Text>
                  </>
                ),
              });
            }
          });
        }
        setMessages(d.docs.map((doc) => ({ id: doc.id, message: doc.data() })));
      });
  }, []);

  const sendMessage = () => {
    if (!message.trim()) {
      return;
    }
    db.collection("Chatting")
      .doc(roomId)
      .collection("data")
      .add({
        message: message,
        name: name,
        type: chatMode,
        at: new Date().toLocaleTimeString(navigator.language, { hour: "2-digit", minute: "2-digit" }),
      });
    setChatMode(0);
    setSendMessage("");

    // 메세지 화면에 세팅
  };
  //   <div ref={ref} className={`message ${isUser && "msg_user"}`}>
  //   <p>
  //     {!isUser && `${message.name || "Unknown User"}: `} {message.message}
  //   </p>
  // </div>
  const Message = forwardRef(({ message }, ref) => {
    const isUser = name === message.name; // 이 메세지가 본인이름일경우

    if (isUser) {
      return (
        <div ref={ref} className={`message ${isUser && "msg_user"}`}>
          <MyChat at={message.at} message={message.message} name={message.name} type={colorList[message.type]} />
        </div>
      );
    } else if (!isUser) {
      return (
        <div ref={ref} className={`message ${isUser && "msg_user"}`}>
          <OtherChat at={message.at} message={message.message} name={message.name} type={colorList[message.type]} />
        </div>
      );
    }
    return <ChatBar at={message.at} message={message.message} name={message.name} type={message.type} />;
  });

  return (
    <Flex direction="column" h="full">
      <Box h="6" justify="center">
        <Heading size="xs">#전체 채팅</Heading>
      </Box>
      <Box flex="1" overflow="auto" p="2">
        {messages.map(({ id, message }) => (
          <Message key={id} message={message} />
        ))}
      </Box>
      {isRandomOpen && (
        <Box p="2">
          <MakingRandom setIsRandomOpen={setIsRandomOpen} />
        </Box>
      )}
      {isPullOpen && (
        <Box p="2">
          <MakingPull setIsPullOpen={setIsPullOpen} />
        </Box>
      )}

      <Box p="2">
        <ChatCategorySelect setChatMode={setChatMode} />
      </Box>

      <Box h="7%">
        <Flex h="full" w="full">
          <Box flex="1" pl="2">
            <Input
              onChange={(e) => {
                setSendMessage(e.target.value);
              }}
              placeholder={chatList[chatMode]}
              size="xs"
              variant="flushed"
              focusBorderColor={colorList[chatMode]}
              fontSize="12px"
              value={message}
            />
          </Box>
          <Box h="full">
            <Popover>
              <PopoverTrigger>
                <IconButton
                  m="0"
                  px="0"
                  h="100%"
                  minW="4"
                  pl="2"
                  variant="unstyled"
                  isRound
                  color={colorList[chatMode]}
                  aria-label="Search database"
                  icon={<Icon as={IoEllipsisHorizontalCircleSharp} />}
                />
              </PopoverTrigger>
              <Portal>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverHeader>피크닉만의 기능을 이용해보세요!</PopoverHeader>
                  <PopoverCloseButton />
                  <PopoverBody>
                    <Button colorScheme="blue">투표</Button>
                    <Button colorScheme="blue">랜덤 뽑기</Button>
                  </PopoverBody>
                </PopoverContent>
              </Portal>
            </Popover>

            <IconButton
              m="0"
              h="100%"
              pr="2"
              px="0"
              minW="8"
              variant="unstyled"
              isRound
              color={colorList[chatMode]}
              aria-label="Search database"
              icon={<Icon as={IoPaperPlane} />}
              onClick={() => sendMessage()}
            />
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}
