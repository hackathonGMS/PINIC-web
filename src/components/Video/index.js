import React, { useEffect, useState } from "react";
import Remon from '@remotemonster/sdk';

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


export default function Video({id, handelConnect}) {
  const room = id;
  const [videoState, setVideoState] = useState(false);
  const [audioState, setAudioState] = useState(false);
  const [handle, setHandle] = useState(false);
  

  const listener = {
    onConnect(chid) {
      console.log(`remon.listener.onConnect ${chid} at listener`);
    },
    onComplete() {
      console.log(`remon.listener.onComplete: ${remon.getChannelId()} `);
      remonRoom[remon.getChannelId()] = true;
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

            let newVideo = document.createElement('video');

            videoAttrs.id = result.channel.id.replace(":","-");

            Object.keys(videoAttrs).forEach(key => newVideo.setAttribute(key, videoAttrs[key]));

            config.view.remote = `#${newVideo.id}`;
            newVideo.remon = new Remon({ config });

            document.getElementById('otherVideos').appendChild(newVideo);
            newVideo.remon.joinCast(newVideo.id.replace("-",":"));
          }
          break;
        case 'leave':
          if(remonRoom[result.channel.id] && result.channel.id !== remon.getChannelId()){
            let video = document.getElementById(result.channel.id.replace(":","-"));
            document.getElementById('otherVideos').removeChild(video);
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

          if ( video && video.remon ) {
            document.getElementById('otherVideos').removeChild(video);
          }
        }
        delete remonRoom[id];
      })
      remon.close()
    } else {
      isConnected = true;
      remon = new Remon({ config, listener });
      
      await remon.createRoom( 'room' + room );
      let participants = await remon.fetchRooms( 'room' + room );

      participants.forEach( async function( participant ) {
        if ( !remonRoom[participant.id] ) {
          remonRoom[participant.id] = true;

          let newVideo = document.createElement('video');

          videoAttrs.id =  participant.id.replace(":","-");
          Object.keys(videoAttrs).forEach(key => newVideo.setAttribute(key, videoAttrs[key]))
          config.view.remote = `#${newVideo.id}`
          newVideo.remon = new Remon({ config })
          document.getElementById('otherVideos').appendChild(newVideo);

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
    if (!isConnected) start();
  }, [handelConnect]);

  return (
     <div style={{height: '100%', padding: '20px'}}>
      <div style={{height: '100%', display: 'flex', flexWrap: 'wrap', alignContent: 'space-between'}}>
        <div style={{ width: '100%'}}>
          <div>
            <div className="row" id="otherVideos" style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}} video={{ padding: '100px'}}/>
          </div>
        </div> 
        <div style={{ width: '100%'}}>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <button onClick={hadleMuteMyVideo} style={{marginRight: '10px'}}>{ !videoState ? '화면 끄기' : '화면 켜기'}</button>
            <button onClick={handleMuteMyAudio} style={{marginRight: '10px'}}>{ !audioState ? '음소거' : '음소거 해제'}</button>
            
          </div>
        </div>
      </div>
    </div>
  );
}
