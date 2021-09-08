import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, VStack } from "@chakra-ui/react";
import First from "./One";
import Second from "./Two";
import Third from "./Three";
import Forth from "./Four";
import Fifth from "./Five";
import Sixth from "./Six";
import Seventh from "./Seven";
import Eighth from "./Eight";
import Ninth from "./Nine";

function ExplanChapterForm() {
  const [step, setStep] = useState(0);
  const stepRender = () => {
    if (step === 0) {
      return <First setStep={setStep} />;
    }
    if (step === 1) {
      return <Second setStep={setStep} />;
    }
    if (step === 2) {
      return <Third setStep={setStep} />;
    }
    if (step === 3) {
      return <Forth setStep={setStep} />;
    }
    if (step === 4) {
      return <Fifth setStep={setStep} />;
    }
    if (step === 5) {
      return <Sixth setStep={setStep} />;
    }
    if (step === 6) {
      return <Seventh setStep={setStep} />;
    }
    if (step === 7) {
      return <Eighth setStep={setStep} />;
    }
    if (step === 8) {
      return <Ninth setStep={setStep} />;
    }
  };

  useEffect(() => {}, [step]);
  return <VStack>{stepRender()}</VStack>;
}

export default ExplanChapterForm;
