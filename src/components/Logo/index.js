import React from "react";
import { Link } from "react-router-dom";
import { Box, VStack } from "@chakra-ui/react";

function Logo() {
  return (
    <VStack>
      <Link as={Link} to="/">
        <Box as="b" fontSize="38px" color="white">
          PICNIC
        </Box>
      </Link>
      <Box as="md" fontSize="20px" color="white">
        이젠 먹지말고 참여해! 피크닉
      </Box>
    </VStack>
  );
}

export default Logo;
