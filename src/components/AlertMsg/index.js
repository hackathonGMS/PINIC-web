import { AlertDialog, AlertDialogBody, AlertDialogFooter, AlertDialogHeader, AlertDialogContent, AlertDialogOverlay, Button } from "@chakra-ui/react";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
export default function AlertMsg({ isOpen, setIsOpen }) {
  const onClose = () => setIsOpen(false);
  const cancelRef = useRef();

  return (
    <>
      <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="md" fontWeight="bold">
              피크닉 나가기
            </AlertDialogHeader>

            <AlertDialogBody>정말 나가실건가요? 이 회의를 빠져나오게 됩니다!</AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                취소
              </Button>
              <Link to="/">
                <Button colorScheme="red" onClick={onClose} ml={3}>
                  나가기
                </Button>
              </Link>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}
