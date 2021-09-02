import io from "socket.io-client";
const URL = "ws://localhost:3012/chat";

export const SocektEventEnum = {
  CONNECT_O: "connet",
  DISCONNECT_E: "disconnect",
  SNED_MESSAGE_TO_SEVER_E: "sendMessage",
  RECEIVEMESSAGE_O: "receiveMessage",
  RAMDOM_PICK_E: "randomPick",
  RAMDOM_PICK_O: "randomPickResult",
  GET_ROOM_INFO_E: "roomInfo",
  GET_ROOM_INFO_O: "roomInfo",
  JOIN_ROOM_E: "joinRoom",
  JOIN_ROOM_O: "joinRoom",
  CREATE_ROOM_E: "createRoom",
  ROOM_CODE_O: "roomCode",
};

export const socket = io(URL, { transports: ["websocket"] });

export const sendMsgToServer = (msg, room, name) => {
  socket.emit(SocektEventEnum.SNED_MESSAGE_TO_SEVER_E, msg, room, name);
};

export const joinRoom = (name, room) => {
  socket.emit(SocektEventEnum.JOIN_ROOM_E, name, room);
};
export const disconnect = () => {
  socket.on(SocektEventEnum.DISCONNECT_E, () => {});
};

export const randomPick = (list, room) => {
  socket.emit(SocektEventEnum.RAMDOM_PICK_E, list, room);
};
export const createRoom = (group, agenda, name) => {
  socket.emit(SocektEventEnum.CREATE_ROOM_E, group, agenda, name);
};
export const getRoomInfo = (code) => {
  socket.emit(SocektEventEnum.GET_ROOM_INFO_E, code);
};
