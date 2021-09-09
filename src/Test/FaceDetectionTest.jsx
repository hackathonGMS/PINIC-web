import React, { useEffect, useState } from "react";
import Remon from '@remotemonster/sdk';
import TTest from './TTEst';
import './Test.css';
import { socket } from "./connect";

let isConnected = false;
let remon
let remonRoom = [];
const key = "1234567890";
const serviceId = "SERVICEID1";

let config = {
  credential: {
    key: key,
    serviceId: serviceId,
    wsurl : "wss://signal.remotemonster.com/ws",
    resturl : "https://signal.remotemonster.com/rest",
},
  view: {
    local: "#myVideo"
  },
  media: {
    video: {
      height: { max: 240 },
      frameRate: { min: 8, max: 30 },
      maxBandwidth: 500,
      codec: 'H264'
    },
    audio: true
  }
};

const videoAttrs = {
  className: "remote-video",
  autoPlay : true,
  muted : true,
  style :"background: rgba(0, 0, 0, 0.5); border-radius: 10px; margin-right: 15px;"
};

const canvasAttrs = {
  className: 'canvas',
  style: 'position: absolute; background: white; '
}

const wrapperAttrs = {
  style: 'position: relative;',
}
export default function FaceDetectionTest({id, handelConnect}) {
  const room = 'sdvcsdcs';
  const [videoState, setVideoState] = useState(false);
  const [audioState, setAudioState] = useState(false);
  const [socketConnected, setSocketConnected] = useState(false);
  const [handle, setHandle] = useState(false);
  const [myRemonId, setMyRemonId] = useState('');
  const [emoticonState, setEmoticonState] = useState(false);
  

  const listener = {
    onConnect(chid) {
      console.log(`my Id ${chid}`);
    },
    onComplete() {
      console.log(`remon.listener.onComplete: ${remon.getChannelId()} `);
      remonRoom[remon.getChannelId()] = true;
      setMyRemonId(() => remon.getChannelId().replace(":","-"));
    },
    onDisconnectChannel() {
      remon.close();
      isConnected = false;
    },
    onClose() {
      console.log(`remon.listener.onClose: ${remon.getChannelId()}`);
    },
    onError(error) {
      console.log(`remon.listener.onError: ${remon.getChannelId()} ${error}`);
    },
    onStat(result) {},
    onRoomEvent(result) {
      switch (result.event) {
        case 'join':
          if (!remonRoom[result.channel.id]) {
            remonRoom[result.channel.id] = true;
            let wrapper = document.createElement('div');
            let newVideo = document.createElement('video');
            let canvas = document.createElement('canvas');

            videoAttrs.id = result.channel.id.replace(":","-");
            canvasAttrs.id = 'cv' + result.channel.id.replace(":","-");
            wrapperAttrs.id = 'wp' + result.channel.id.replace(":","-");

            Object.keys(videoAttrs).forEach(key => newVideo.setAttribute(key, videoAttrs[key]));
            Object.keys(canvasAttrs).forEach(key => canvas.setAttribute(key, canvasAttrs[key]));
            Object.keys(wrapperAttrs).forEach(key => wrapper.setAttribute(key, wrapperAttrs[key]));

            config.view.remote = `#${newVideo.id}`;
            console.log(newVideo.id)
            newVideo.remon = new Remon({ config });

            document.getElementById('otherVideos').appendChild(wrapper).append(newVideo, canvas);
            // document.getElementById('otherVideos').appendChild(canvas);

            newVideo.remon.joinCast(newVideo.id.replace("-",":"));
          }
          break;
        case 'leave':
          if(remonRoom[result.channel.id] && result.channel.id !== remon.getChannelId()){
            let video = document.getElementById(result.channel.id.replace(":","-"));
            let canvas = document.getElementById('cv' + result.channel.id.replace(":","-"));
            document.getElementById('wp' + result.channel.id.replace(":","-")).removeChild(video);
            document.getElementById('wp' + result.channel.id.replace(":","-")).removeChild(canvas);
            delete remonRoom[result.channel.id]
          }
          break;
        default:
      }
      console.log(`EVENT FIRED: onRoomEvent channel Id : ${remon.getChannelId()}`)
      console.log(`EVENT FIRED: onRoomEvent: ${JSON.stringify(result)}`)
    }
  };

  async function start() {
    if ( isConnected ) {
      isConnected = false;
      
      Object.keys(remonRoom).forEach( function ( id ) {
        if( id !== remon.getChannelId() ) {
          let video = document.getElementById(id.replace(":","-"));
          let canvas = document.getElementById('cv' + id.replace(':', '-'));

          if ( video && video.remon ) {
            document.getElementById('wp' + id.replace(':', '-')).removeChild(video);
            document.getElementById('wp' + id.replace(':', '-')).removeChild(canvas);
          }
        }
        delete remonRoom[id];
      })
      remon.close()
    } else {
      isConnected = true;
      remon = new Remon({ config, listener });

      await remon.createRoom( 'room' + room );
      let participants = await remon.fetchRooms('room' + room );
      participants.forEach( async function( participant ) {
        if ( !remonRoom[participant.id] ) {
          remonRoom[participant.id] = true;

          let newVideo = document.createElement('video');
          let canvas = document.createElement('canvas');
          let wrapper = document.createElement('div');

          videoAttrs.id = participant.id.replace(":","-");
          canvas.setAttribute('id', 'cv' + participant.id.replace(":","-"));
          wrapper.setAttribute('id', 'wp' + participant.id.replace(":","-"));
          canvas.style.display = 'absolute';
          console.log(canvas);

          Object.keys(videoAttrs).forEach(key => newVideo.setAttribute(key, videoAttrs[key]));
          Object.keys(canvasAttrs).forEach(key => canvas.setAttribute(key, canvasAttrs[key]));
          Object.keys(wrapperAttrs).forEach(key => wrapper.setAttribute(key, wrapperAttrs[key]));

          config.view.remote = `#${newVideo.id}`
          newVideo.remon = new Remon({ config });
          document.getElementById('otherVideos').appendChild(wrapper).append(newVideo, canvas);

          await newVideo.remon.joinCast(newVideo.id.replace("-",":"));
        }
      })
    }
  }
  
  const hadleMuteMyVideo = () => {
    remon.pauseLocalVideo(!videoState);
    setVideoState(!videoState);
  }
  const handleMuteMyAudio = () => {
    remon.muteLocalAudio(!audioState);
    setAudioState(!audioState);
  }

  useEffect(() => {
    start();
  }, []);

  useEffect(() => {
    if (!socketConnected) socket.on('connect', () => {
      setSocketConnected(true);
      console.log(room);
      socket.emit('testJoinRoom', room);
    });
  }, [socketConnected])

  useEffect(() => {
    socket.on('getEmoticonExpression', (data) => {
      console.log('data', data);
      const canvas = document.getElementById('cv' + data.id);
      const context = canvas.getContext('2d');
      context.font = '100px';
      context.textAlign = "center"; 
      context.textBaseline = "middle";
      context.fillText(data.expr, 160, 120);
    })
  }, []);

  return (
     <div style={{height: '100%', padding: '20px'}}>
      <div style={{height: '100%', display: 'flex', flexWrap: 'wrap', alignContent: 'space-between'}}>
        <div style={{ width: '100%'}}>
          <div>
            <div className="row" id="otherVideos" style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}} video={{ padding: '100px'}}/>
          </div>
        </div> 
        <TTest id={myRemonId} room={room} emoticonState={emoticonState}/>
        <div style={{ width: '100%'}}>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <button onClick={hadleMuteMyVideo} style={{marginRight: '10px'}}>{ !videoState ? '화면 끄기' : '화면 켜기'}</button>
            <button onClick={handleMuteMyAudio} style={{marginRight: '10px'}}>{ !audioState ? '음소거' : '음소거 해제'}</button>
            <button onClick={() => setEmoticonState(!emoticonState)}>{ emoticonState ? '내가 피크닉 가기': '얘가 피크닉 가기' }</button>
          </div>
        </div>
      </div>
    </div>
  );
}