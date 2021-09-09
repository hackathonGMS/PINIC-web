import React, { useEffect, useRef, useState }from "react";
import * as faceApi from "face-api.js";
import { SendFaceDetectionResult } from './connect';


const expressionMap = {
  neutral: "😶",
  happy: "😄",
  sad: "😞",
  angry: "🤬",
  fearful: "😖",
  disgusted: "🤢",
  surprised: "😲"
};

const TTest = ({id, room, emoticonState}) => {
  const video = useRef(null);
  const canvas = useRef(null);

  const bigger = (data, target) => {
    let near = 0;
    let abs = 0;
    let min = 100;
    for(var i = 0; i < data.length; i++) {
      abs = ((data[i] - target) < 0) ? - ((data[i])-target) : (data[i] - target);
      if(abs < min){
        min = abs;
        near = i;
      }
    }

    return near;
  }

  useEffect(() => {
    if (emoticonState) run();
  },[emoticonState]);

  const run = async () => {
    console.log("run started");

    try {
      await faceApi.nets.ssdMobilenetv1.loadFromUri("/models/");
      await faceApi.loadFaceExpressionModel(`/models/`);
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: {}
      });

      video.current.srcObject = mediaStream;
    } catch (e) {
      console.log(e.name, e.message, e.stack);
    }
  };

  const handleOnPlay = () => {
    while (emoticonState) {
      console.log('')
      onPlay();
    }
  }

  const onPlay = async () => {
    if (!emoticonState) return;
    if (
      video.current.paused ||
      video.current.ended ||
      !faceApi.nets.ssdMobilenetv1.params
    ) {
      setTimeout(() => onPlay());
      return;
    }

    const options = new faceApi.SsdMobilenetv1Options({
      inputSize: 512,
      scoreThreshold: 0.5
    });

    const result = await faceApi
      .detectSingleFace(video.current, options)
      .withFaceExpressions();

    if (result) {
      const testList = Object.values(result.expressions);

      // const dims = faceApi.matchDimensions(canvas.current, video.current, true)
      
      const context = canvas.current.getContext('2d');
      context.font = '120px serif'
      context.textAlign = "center"; 
      context.textBaseline = "middle";
      context.fillText(expressionMap[Object.keys(result.expressions)[bigger(testList, 1)]], 160, 120);

      SendFaceDetectionResult(expressionMap[Object.keys(result.expressions)[bigger(testList, 1)]], id, room)
    }

    setTimeout(() => onPlay());
  };

  useEffect(() => {
  }, []);


  return (
    <div className="App">
      <div style={{ position: 'relative'}}>
        <div style={{ width: "100%", height: "100vh", position: "relative" }}>
          { emoticonState ? 
              <canvas 
                id='canvas' 
                ref={canvas}
                style={{ backgroundColor: 'white', position: 'absolute' }}
              />
            :
              <canvas 
                id='canvas' 
                ref={canvas}
                style={{ display:'none' }}
              />
          }
          <video
            id="myVideo"
            className="remote-video" 
            ref={video}
            autoPlay
            muted
            onPlay={onPlay}
          />
        </div>
      </div>
    </div>
  );

}

export default TTest;