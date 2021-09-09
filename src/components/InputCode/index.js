import { Box, HStack, Heading, PinInput, PinInputField } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { joinRoom } from "../../api/connect";

import db from "../Chatting/firbase";

export default function InputCode(props) {
  const [code, setCode] = useState(null);
  const requestJoin = () => {
    return true;
  };
  let history = useHistory();
  const checkCode = (e) => {
    if (!code) {
      alert("코드를 먼저 입력해주세요");
      return;
    }
    history.push(`/ready/${e}`);
    // db.collection("Chatting")
    //   .doc(String(e))
    //   .get()
    //   .then((doc) => {
    //     if (doc.exists) {
    //       history.push(`/ready/${e}`);
    //     } else {
    //       // doc.data() will be undefined in this case
    //       alert("방이 존재하지 않습니다!");
    //     }
    //   })
    //   .catch((error) => {
    //     console.log("Error getting document:", error);
    //   });
  };
  const inputStyle = {
    height: "50px",
    textAlign: "center",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  };
  return (
    <>
      <Box alignContent="center" my={12}>
        <Heading as="h3" size="sm" color="white" textAlign="center" mb={3}>
          피크닉 참여 코드 입력
        </Heading>

        <HStack>
          <PinInput
            type="number"
            size="sm"
            variant="unstyled"
            focusBorderColor="black"
            onComplete={(e) => checkCode(e)}
            onChange={(value) => {
              setCode(value);
            }}>
            {[...Array(6)].map((index) => (
              <PinInputField errorBorderColor="red.500" size="md" style={inputStyle} />
            ))}
          </PinInput>
        </HStack>
      </Box>
    </>
  );
}
