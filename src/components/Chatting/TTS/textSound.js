import Speech from "speak-tts";

const speech = new Speech(); // will throw an exception if not browser supported
if (speech.hasBrowserSupport()) {
  // returns a boolean
  console.log("speech synthesis supported");
}
speech
  .init()
  .then((data) => {
    // The "data" object contains the list of available voices and the voice synthesis params
    console.log("Speech is ready, voices are available", data);
  })
  .catch((e) => {
    console.error("An error occured while initializing : ", e);
  });

export const TTS = (e) => {
  speech
    .speak({
      text: e,
    })
    .then(() => {
      console.log("Success !");
    })
    .catch((e) => {
      console.error("An error occurred :", e);
    });
};
