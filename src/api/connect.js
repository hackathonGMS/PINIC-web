import io from "socket.io-client";
const URL = "ws://3.38.18.25:3012/chat";

export const SocektEventEnum = {
  CONNECT_O: "connect",
  DISCONNECT_E: "disconnect",
  SNED_MESSAGE_TO_SEVER_E: "sendMessage",
  RECEIVEMESSAGE_O: "receiveMessage",
  RAMDOM_PICK_E: "randomPick",
  RAMDOM_PICK_O: "randomPickResult",
  GET_ROOM_INFO_E: "roomInfo",
  GET_ROOM_INFO_O: "roomInfo",
  RAMDOM_PICK_E: "randomPick",
  RAMDOM_PICK_O: "randomPickResult",
  RANDOM_PICK_LIST_O: "randomPickList",
  JOIN_ROOM_E: "joinRoom",
  JOIN_ROOM_O: "joinRoom",
  CREATE_ROOM_E: "createRoom",
  ROOM_CODE_O: "roomCode",
};

export const socket = io(URL, { transports: ["websocket"] });

export const sendMsgToServer = (msg, room, name, time, type) => {
  socket.emit(SocektEventEnum.SNED_MESSAGE_TO_SEVER_E, msg, room, name, time, type);
};

export const joinRoom = (name, room) => {
  socket.emit(SocektEventEnum.JOIN_ROOM_E, name, room);
};
export const disconnect = () => {
  socket.on(SocektEventEnum.DISCONNECT_E, () => {});
};

export const randomPick = (title, list, room) => {
  socket.emit(SocektEventEnum.RAMDOM_PICK_E, title, list, room);
};
export const createRoom = (group, agenda, name) => {
  socket.emit(SocektEventEnum.CREATE_ROOM_E, group, agenda, name);
};
export const getRoomInfo = (code) => {
  socket.emit(SocektEventEnum.GET_ROOM_INFO_E, code);
};
