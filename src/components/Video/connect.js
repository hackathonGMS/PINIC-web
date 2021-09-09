import io from 'socket.io-client';
const URL = 'ws://localhost:3012/chat'

export const socket = io(URL, { transports: [ 'websocket' ]});

export const SendFaceDetectionResult = (expr, id, room) => {
  socket.emit('emoticonExpression', expr, id, room);
}