const {Kakao, location} = window;

export const shareKakao = (title, imageUrl) => {
  const sharedUrl = location.href;
  
  Kakao.Link.sendDefault({
    objectType: 'feed',
    content: {
      title: title,
      description: '피크닉 회의록',
      imageUrl: imageUrl,
      link: {
        webUrl: sharedUrl,
        mobileWebUrl: sharedUrl,
      },
    },
    buttons: [
      {
        title: '회의록 보러 가기',
        link: {
          webUrl: sharedUrl,
          mobileWebUrl: sharedUrl,
        },
      },
    ],
  });
};