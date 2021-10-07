import { Logo, InputCode, Button as LinkButton } from "..";
import { Box, Flex, Heading, Text, VStack, Container, Divider, HStack, Button } from "@chakra-ui/react";

export const VoteResult = ({ votepicks }) => {
  // const GetVoteContents = () => {
  //   if (votepicks == null) {
  //     return;
  //   }
  //   return votepicks.map((data, index) => (
  //     <>
  //       <Text fontSize="18px">{index + 1}번째 투표 | {data.title}</Text>
  //       <VStack alignItems="left" spacing="1px" fontWeight="200">
  //         {data.lists.map((data, index) => (
  //           <Text fontSize="14px">
  //             {index + 1}위. {data.count}표 {data.obj}
  //           </Text>
  //         ))}
  //       </VStack>
  //     </>
  //   ));
  // };
  // const voteContents = GetVoteContents();

  return (
    <>
      <VStack alignItems="left">
        <Text fontSize="18px">{votepicks.data().title}</Text>
        {console.log(votepicks.data())}
        <VStack alignItems="left" spacing="1px" fontWeight="200">
          {votepicks.data().lists.map((index, key) => (
            <Text fontSize="14px">
              {index.obj} : {index.count}표
            </Text>
          ))}
        </VStack>
      </VStack>
    </>
  );
};
export default VoteResult;
