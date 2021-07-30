import { Button as chakraButton, LinkBox, LinkOverlay } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
export default function Button(props) {
  return (
    <LinkBox onClick={props.onClick} as={chakraButton} w="full" variant={props.variant}>
      <LinkOverlay as={RouterLink} to={props.Link}>
        {props.text}
      </LinkOverlay>
    </LinkBox>
  );
}
