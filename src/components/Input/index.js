import { Button as chakraButton, LinkBox, LinkOverlay } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
export default function Input(props) {
  return (
    <LinkBox as={chakraButton} w="full" variant="start">
      <LinkOverlay as={RouterLink} to={props.Link}>
        {"μμνκΈ°"}
      </LinkOverlay>
    </LinkBox>
  );
}
