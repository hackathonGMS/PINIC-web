import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, VStack } from "@chakra-ui/react";
import First from "./One";
import Second from "./Two";
import Third from "./Three";

function ChapterForm() {
  const [step, setStep] = useState(0);
  const [party, setParty] = useState();
  const [title, setTitle] = useState();
  const stepRender = () => {
    if (step === 0) {
      return <First setStep={setStep} setParty={setParty} />;
    }
    if (step === 1) {
      return <Second setStep={setStep} setTitle={setTitle} />;
    }
    if (step === 2) {
      return <Third setStep={setStep} party={party} title={title} />;
    }
  };

  useEffect(() => {}, [step]);
  return <VStack>{stepRender()}</VStack>;
}

export default ChapterForm;
