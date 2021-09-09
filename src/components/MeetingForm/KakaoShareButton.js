import React, { useEffect } from 'react'

//카카오톡 공유버튼 만들기
function KakaoShareButton({ image = '', url = '', title = '', description = '', children }) {
  function createShareButton() {
    if (window.Kakao) {
      const kakao = window.Kakao
        process.env.KAKAO_KEY="67eff8bf1c775bdcad01f6a5b47bf4cc";
      kakao.init(process.env.KAKAO_KEY)

      kakao.Link.createDefaultButton({
        container: '.kakaoBtn',
        objectType: 'feed',
        content: {
          title: title || 'title = string',
          description: description || 'description = string',
          imageUrl: image || 'image = string',
          link: {
            mobileWebUrl: url || 'url = string',
            webUrl: url || 'url = string'
          }
        },
        buttons: [
          {
            title: '자세히 보기',
            link: {
              mobileWebUrl: url,
              webUrl: url
            }
          }
        ]
      })
    } else {
      console.log('KaKao CDN fetch error')
    }
  }

  useEffect(() => {
    createShareButton()
  }, [])

  return (
    <>
      <button className="kakaoBtn">{children}</button>
    </>
  )
}

export default KakaoShareButton