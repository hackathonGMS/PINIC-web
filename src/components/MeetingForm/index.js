import { Logo, InputCode, Button as LinkButton } from "..";
import { Box, Flex, Heading, Text, VStack, Container, Divider, HStack, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import TitleInfo from "./TitleInfo";
import ChatHistoryCategory from "./ChatHistoryCategory";
import ChatHistory from "./ChatHistory";
import VoteResult from "./VoteResult";
import DrawResult from "./DrawResult";
import KakaoShareButton from "./KakaoShareButton";

export const login = (data) => {
    
    return axios.get("http://3.38.18.25:3000/chat/chatlist/001656");
};

export const MeetingForm = ( {match} ) => {
    const [messages, setMessages] = useState([]);
    const [roomInfo, setRoomInfo] = useState([]);
    const [randompicks, setRandompicks] = useState([]);
    const [users, setUsers] = useState([]);
    const [chatMode, setChatMode] = useState(0);
    useEffect(() => {
        console.log(match.params.id);
        axios.get(`http://3.38.18.25:3000/chat/chatlist/${match.params.id}`)
        .then(response => setMessages(response.data));
        axios.get(`http://3.38.18.25:3000/chat/getRoom/${match.params.id}`)
        .then(response => setRoomInfo(response.data));
        axios.get(`http://3.38.18.25:3000/chat/randompick/${match.params.id}`)
        .then(response => setRandompicks(response.data));
        axios.get(`http://3.38.18.25:3000/chat/user/${match.params.id}`)
        .then(response => setUsers(response.data));

        console.log(messages);
        console.log(roomInfo);
        console.log(randompicks);
    }, []);
  return (
    <>
    <VStack align={"center"} mt={"77px"} mb={"77px"} spacing={"70px"} direction={"column"} color="white">
        <Text color="white" fontSize="32px">PICNIC | 12345의 회의록</Text>
        <Box bg="white" maxW="650px" w="100%" h="300px" borderRadius="12px" display="flex" 
        flexDirection="column" overflowY="auto" bgColor="rgba(0,0,0,0.3)" padding="25px">
            <TitleInfo roomInfo={roomInfo} users={users}/>
        </Box>
        <VStack w="100%" align="left">
            <Text fontSize="24px">회의 ToDo</Text>
            <Divider w="60px" border="2px" borderColor="white" backgroundColor="white"/>
            <Text fontSize="18px">1. 아이디어 브레인스토밍</Text>
            <Text fontSize="18px">2. 아이디어 구체화</Text>
            <Text fontSize="18px">3. 아이디어 결정하기</Text>
        </VStack>
        <VStack w="100%" align="left">
            <Text fontSize="24px">채팅 History</Text>
            <Divider w="60px" border="2px" borderColor="white" backgroundColor="white"/>
            <ChatHistoryCategory setChatMode = {setChatMode}/>
            <Box bg="white" maxW="650px" w="100%" h="300px" borderRadius="12px" display="flex" 
            flexDirection="column" overflowY="auto" bgColor="rgba(0,0,0,0.3)" padding="25px">
                <ChatHistory messages = {messages} chatMode={chatMode}/>
            </Box>
        </VStack>
        <VStack w="100%" align="left">
            <Text fontSize="24px">투표 결과</Text>
            <Divider w="60px" border="2px" borderColor="white" backgroundColor="white"/>
            <Box bg="white" maxW="650px" w="100%" h="300px" borderRadius="12px" display="flex" 
            flexDirection="column" overflowY="auto" bgColor="rgba(0,0,0,0.3)" padding="25px">
                <VoteResult/>
            </Box>
        </VStack>
        <VStack w="100%" align="left">
            <Text fontSize="24px">뽑기 결과</Text>
            <Divider w="60px" border="2px" borderColor="white" backgroundColor="white"/>
            <Box bg="white" maxW="650px" w="100%" h="300px" borderRadius="12px" display="flex" 
            flexDirection="column" overflowY="auto" bgColor="rgba(0,0,0,0.3)" padding="25px">
                <DrawResult/>
            </Box>
        </VStack>
        <HStack spacing="27px">
            <LinkButton Link="/" text="돌아가기" variant="main_button"/>
            <LinkButton Link="/Meeting" text="로그 공유하기" variant="main_button"/>
            <KakaoShareButton image="/image1" url="https://developers.kakao.com/sdk/js/kakao.js"></KakaoShareButton>
        </HStack>
    </VStack>
    </>
  );
};
export default MeetingForm;