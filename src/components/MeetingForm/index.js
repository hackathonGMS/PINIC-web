import { Logo, InputCode, Button as LinkButton } from "..";
import { Box, Flex, Heading, Text, VStack, Container, Divider, HStack, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import TitleInfo from "./TitleInfo";
import ChatHistoryCategory from "./ChatHistoryCategory";
import ChatHistory from "./ChatHistory";
import VoteResult from "./VoteResult";
import RandomResult from "./RandomResult";
import db from "../Chatting/firbase";
import { shareKakao } from "../KakaoShare/KakaoShare";
import db from "../Chatting/firbase";
export const MeetingForm = ({ match }) => {
  const [todoList, setTodoList] = useState([]);
  const [title, setTitle] = useState("");
  const [lists, setList] = useState();
  const [isAnoun, setIsAnoun] = useState(false);
  const [isMulti, setIsMulti] = useState(false);
  const { Kakao } = window;
  const [messages, setMessages] = useState([]);
  const [roomInfo, setRoomInfo] = useState([]);
  const [votepicks, setVotepicks] = useState([]);
  const [randompicks, setRandompicks] = useState([]);
  const [users, setUsers] = useState([]);
  const [chatMode, setChatMode] = useState(-1);
  const [isInit, setIsInit] = useState(false);
  const notConfirmList = () => {
    return todoList.filter((todo) => {
      return todo.done !== false;
    });
  };
  const confirmedList = () => {
    return todoList.filter((todo) => {
      return todo.done !== true;
    });
  };
  const onKakaoClick = () => {
    console.log(isInit);
    if (!isInit) {
      console.log("카카오 초기화");
      Kakao.init("67eff8bf1c775bdcad01f6a5b47bf4cc");
      setIsInit(true);
    }
    shareKakao(`${match.params.id}의 회의록`, "");
  };
  useEffect(() => {
    db.collection("Chatting")
      .doc(String(match.params.id))
      .onSnapshot((d) => {
        if (d.data()?.todo !== undefined) {
          setTodoList(d.data().todo);
        }
      });
    db.collection("Chatting")
      .doc(String(match.params.id))
      .collection("Pull")
      .get()
      .then((data) => {
        if (data) {
          setList(data.docs);
          console.log("응애 나는 투표", data.docs[0].data());
        } else {
        }
      });
    console.log(String(match.params.id));
  }, []);
  useEffect(() => {}, [todoList, lists]);
  useEffect(() => {
    console.log(match.params.id);
    axios.get(`http://3.38.18.25:3000/chat/chatlist/${match.params.id}`).then((response) => setMessages(response.data));
    axios.get(`http://3.38.18.25:3000/chat/getRoom/${match.params.id}`).then((response) => setRoomInfo(response.data));
    axios.get(`http://3.38.18.25:3000/chat/randompick/${match.params.id}`).then((response) => setRandompicks(response.data));
    axios.get(`http://3.38.18.25:3000/chat/user/${match.params.id}`).then((response) => setUsers(response.data));
  }, []);
  return (
    <>
      <VStack align={"center"} mt={"77px"} mb={"77px"} spacing={"70px"} direction={"column"} color="white" w="80vw">
        <Text color="white" fontSize="32px" fontWeight="700">
          PICNIC | {match.params.id}의 회의록
        </Text>
        <Box
          bg="white"
          maxW="650px"
          w="100%"
          h="300px"
          borderRadius="12px"
          display="flex"
          flexDirection="column"
          overflowY="auto"
          bgColor="rgba(0,0,0,0.3)"
          padding="25px">
          <TitleInfo roomInfo={roomInfo} users={users} />
        </Box>
        <VStack w="100%" align="left">
          <Text fontSize="24px">회의 ToDo</Text>
          <Divider w="60px" border="2px" borderColor="white" backgroundColor="white" />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {todoList &&
              notConfirmList().map((todo, index) => (
                <>
                  <Text fontSize="18px">{todo.value}</Text>
                  <div style={{ display: "flex", alignSelf: "center" }}>
                    <input type="checkbox" checked={todo.done} />
                  </div>
                </>
              ))}
            {todoList && (
              <>
                {confirmedList().map((todo, index) => (
                  <>
                    <Text fontSize="18px">{todo.value}</Text>
                    <div style={{ display: "flex", alignSelf: "center" }}>
                      <input type="checkbox" checked={todo.done} />
                    </div>
                  </>
                ))}
              </>
            )}
          </div>
        </VStack>
        <VStack w="100%" maxW="650px" align="left">
          <Text fontSize="24px">채팅 History</Text>
          <Divider w="60px" border="2px" borderColor="white" backgroundColor="white" />
          <ChatHistoryCategory setChatMode={setChatMode} />
          <Box
            bg="white"
            maxW="650px"
            w="100%"
            h="300px"
            borderRadius="12px"
            display="flex"
            flexDirection="column"
            overflowY="auto"
            bgColor="rgba(0,0,0,0.3)"
            padding="25px">
            <ChatHistory messages={messages} chatMode={chatMode} />
          </Box>
        </VStack>
        <VStack w="100%" align="left">
          <Text fontSize="24px">투표 결과</Text>
          <Divider w="60px" border="2px" borderColor="white" backgroundColor="white" />
          <Box
            bg="white"
            maxW="650px"
            w="100%"
            h="300px"
            borderRadius="12px"
            display="flex"
            flexDirection="column"
            overflowY="auto"
            bgColor="rgba(0,0,0,0.3)"
            padding="25px">
            {
              (lists && console.log(lists),
              lists.map((data, index) => {
                console.log("투표데이터", data);
                return <VoteResult id={index} votepicks={data} />;
              }))
            }
          </Box>
        </VStack>
        <VStack w="100%" maxW="650px" align="left">
          <Text fontSize="24px">뽑기 결과</Text>
          <Divider w="60px" border="2px" borderColor="white" backgroundColor="white" />
          <Box
            bg="white"
            maxW="650px"
            w="100%"
            h="300px"
            borderRadius="12px"
            display="flex"
            flexDirection="column"
            overflowY="auto"
            bgColor="rgba(0,0,0,0.3)"
            padding="25px">
            <RandomResult randompicks={randompicks} />
          </Box>
        </VStack>
        <HStack spacing="27px">
          <LinkButton Link="/" text="돌아가기" variant="main_button" />
          <Button w="100%" variant="main_button" onClick={onKakaoClick}>
            로그 공유하기
          </Button>
        </HStack>
      </VStack>
    </>
  );
};
export default MeetingForm;
