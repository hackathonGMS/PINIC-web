import { Logo, InputCode, Button as LinkButton } from "..";
import { Box, Flex, Heading, Text, VStack, Container, Divider, HStack, Button } from "@chakra-ui/react";

export const RandomResult = ({randompicks}) => {
  const GetRandomContents = () => {
      if(randompicks == null){
        return;
      }
      
      return randompicks.map((data, index) => (
        <>
          <Text fontSize="18px">{index+1}번째 뽑기 | {data.title}</Text>
          <Text fontSize="14px" fontWeight="200">{data.result[0].result} 당첨</Text>
        </>
      ));
  }
  const randomContents = GetRandomContents();
  return (
    <>
        <VStack alignItems="left">
            {randomContents}
        </VStack>
    </>
  );
};
export default RandomResult;