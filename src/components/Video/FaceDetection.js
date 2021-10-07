import React, { useEffect, useRef }from "react";
import * as faceApi from "face-api.js";
import { SendFaceDetectionResult, SendStopEmoticon } from '../../api/connect';

const expressionMap = {
  neutral: "😶",
  happy: "😄",
  sad: "😞",
  angry: "🤬",
  fearful: "😖",
  disgusted: "🤢",
  surprised: "😲",
};

const FaceDetection = ({ video, id, room, emoticonState}) => {
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

    const context = canvas.current.getContext('2d');
    let testList;

    const tempCanvas = document.getElementById('canvas');
    context.clearRect(0, 0, tempCanvas.width, tempCanvas.height);

    if (result) {

      testList = Object.values(result.expressions);  
    
      context.font = '100px Arial'
      context.textAlign = "center"; 
      context.textBaseline = "middle";

      context.fillText(expressionMap[Object.keys(result.expressions)[bigger(testList, 1)]], 150, 75);
      SendFaceDetectionResult(expressionMap[Object.keys(result.expressions)[bigger(testList, 1)]], id, room)
    } else {}

    

    setTimeout(() => onPlay());
  };

  return (
    <div className="App">
      <div style={{ position: 'relative'}}>
        <div style={{ }}>
        { emoticonState ? 
              <canvas 
                id='canvas' 
                ref={canvas}
                style={{ backgroundColor: 'black', position: 'absolute' , width: '100%', height: '100%', borderRadius: '10px'}}
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
            autoPlay
            muted
            ref={video}
            onPlay={onPlay}
            style={{backgroundColor: 'black', borderRadius: '10px', width: '100%' , height: '100%'}}
            />
        </div>
      </div>
    </div>
  );

}

export default FaceDetection;