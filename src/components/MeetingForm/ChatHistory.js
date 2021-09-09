import { Logo, InputCode, Button as LinkButton } from "..";
import { Box, Flex, Heading, Text, VStack, Container, Divider, HStack, Button } from "@chakra-ui/react";

export const ChatHistory = ({messages, chatMode}) => {
    const chatList = ["message", "important", "tts", "calander", "link"];
    const getMessage = () => {
        if(messages==null){
            return;
        }
        const filtered = messages.filter((e)=>e.type==chatList[chatMode]);
        return filtered.map((data) => (
            <HStack>
                <Text fontSize="18px">{data.time}</Text>
                <Text fontSize="18px">{data.name} : </Text>
                <Text fontSize="18px">{data.content}</Text>
            </HStack>
        ));
    }
    
    const messageList = getMessage();

    return (
        <>
            <VStack spacing="13px" alignItems="left">
                {messageList}
            </VStack>
        </>
    );
};
export default ChatHistory;