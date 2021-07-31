import firebase from "firebase";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyDb9OSntN8yMwRhFmOBdQJPMXCvgd1C1E4",
  authDomain: "picnic-163ae.firebaseapp.com",
  projectId: "picnic-163ae",
  storageBucket: "picnic-163ae.appspot.com",
  messagingSenderId: "306560948784",
  appId: "1:306560948784:web:8252a05408c61e908babf5",
  measurementId: "G-GXW7F7G36Y",
});
const db = firebaseConfig.firestore();
export default db;

export const FBcreateRoom = (codeNumber, party, title) => {
  db.collection("Chatting")
    .doc(String(codeNumber))
    .set({
      party: party,
      title: title || "",
      code: codeNumber,
    });
};
export const FBsendMessage = (e) => {
  db.collection("Chatting")
    .doc(e.roomId)
    .collection("data")
    .add({
      message: e.essage,
      name: e.name,
      type: e.chatMode,
      at: new Date().toLocaleTimeString(navigator.language, { hour: "2-digit", minute: "2-digit" }),
    });

  // 메세지 화면에 세팅
};

export const FBcreatePull = (roomId, title, list, isAnoun, isMulti) => {
  return db.collection("Chatting").doc(String(roomId)).collection("Pull").doc(String(title)).set({
    title: title,
    name: "james",
  });
};

export const FBcreatePull_ = (e) => {
  db.collection("Chatting")
    .doc(String(e.roomId))
    .collection("Pull")
    .doc(e.title)
    .set({
      at: new Date(),
      title: e.title || "",
      body: e.pullList,
      count: 0,
    })
    .collection("who");
};
export const FBcreateRandom = (e) => {
  db.collection("Chatting")
    .doc(String(e.roomId))
    .collection("Random")
    .doc(e.title)
    .set({
      randList: e.randList,
      win: e.win,
      at: new Date().toLocaleTimeString(navigator.language, { hour: "2-digit", minute: "2-digit" }),
    });
};
