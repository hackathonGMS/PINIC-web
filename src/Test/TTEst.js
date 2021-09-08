import React from "react";
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

class TTest extends React.Component {
  video = React.createRef();
  canvas = React.createRef();

  state = { expressions: [] };

  bigger = (data, target) => {
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

  componentDidMount() {
    this.run();
  }

  log = (...args) => {
    console.log(...args);
  };

  run = async () => {
    this.log("run started");

    try {
      await faceApi.nets.ssdMobilenetv1.load("/models/");
      await faceApi.loadFaceExpressionModel(`/models/`);
      this.mediaStream = await navigator.mediaDevices.getUserMedia({
        video: {}
      });

      this.video.current.srcObject = this.mediaStream;
    } catch (e) {
      this.log(e.name, e.message, e.stack);
    }
  };

  onPlay = async () => {
    if (
      this.video.current.paused ||
      this.video.current.ended ||
      !faceApi.nets.ssdMobilenetv1.params
    ) {
      setTimeout(() => this.onPlay());
      return;
    }

    const options = new faceApi.SsdMobilenetv1Options({
      inputSize: 512,
      scoreThreshold: 0.5
    });

    const result = await faceApi
      .detectSingleFace(this.video.current, options)
      .withFaceExpressions();

    if (result) {
      const testList = Object.values(result.expressions);

      const dims = faceApi.matchDimensions(this.canvas.current, this.video.current, true)

      const resizedResult = faceApi.resizeResults(result, dims)
      const minConfidence = 0.05

      // faceApi.draw.drawDetections(this.canvas.current, resizedResult)
      const context = this.canvas.current.getContext('2d');
      context.font = '120px serif'
      context.textAlign = "center"; 
      context.textBaseline = "middle";
      context.fillText(expressionMap[Object.keys(result.expressions)[this.bigger(testList, 1)]], 160, 120);
      console.log(this.props)
      SendFaceDetectionResult(expressionMap[Object.keys(result.expressions)[this.bigger(testList, 1)]], this.props.id, this.props.room)
    }

    setTimeout(() => this.onPlay());
  };

  render() {
    return (
      <div className="App">
        <div style={{ position: 'relative'}}>
          <div style={{ width: "100%", height: "100vh", position: "relative" }}>
            <canvas id='canvas' ref={this.canvas} style={{ backgroundColor: 'white', position: 'absolute'}}/>
            <video
              id="myVideo"
              className="remote-video" 
              ref={this.video}
              autoPlay
              muted
              onPlay={this.onPlay}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default TTest;