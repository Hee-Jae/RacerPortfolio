# 엘리스AI트랙 2기 개인프로젝트

### 주제 : 레이서 포트폴리오 웹 서비스
### 기간 : 2021. 08 16 ~ 2021. 08. 27 (2주)
### URL : http://racer-portfolio.koreasouth.cloudapp.azure.com/
### 기술 스택
<div align="center">

<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/>
<img src="https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=Redux&logoColor=white"/>
<img src="https://img.shields.io/badge/StyledComponents-DB7093?style=flat-square&logo=styled-components&logoColor=white"/>
<img src="https://img.shields.io/badge/ReactRouter-CA4245?style=flat-square&logo=ReactRouter&logoColor=white"/>
<br/>

<img src="https://img.shields.io/badge/Flask-000000?style=flat-square&logo=Flask&logoColor=white"/>
<img src="https://img.shields.io/badge/JWT-000000?style=flat-square&logo=jsonwebtokens&logoColor=white"/>
<img src="https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white"/>
<img src="https://img.shields.io/badge/OAuth2-4285F4?style=flat-square&logo=google&logoColor=white"/>
<br/>

<img src="https://img.shields.io/badge/Azure-0078D4?style=flat-square&logo=microsoftazure&logoColor=white"/>
</div>

---

### 디렉토리 구조
##### Client
```
Client
└───public
│       index.html
│          
└───src
    └───portfolio
    │   │   components.js         # 컴포넌트 모음
    │   │   Main.js               # 메인 컴포넌트
    │   │   Nav.js                # Navbar 컴포넌트
    │   │   Network.js            # 검색페이지 컴포넌트
    │   │   Posts.js              # 유저 포트폴리오 컴포넌트
    │   │
    │   └───contents
    │   │   │   all-contents.js   # 컨텐츠 컴포넌트 모음
    │   │   │
    │   │   └───Award             # 수상이력 컴포넌트
    │   │   └───Certificate       # 자격증 컴포넌트
    │   │   └───Edu               # 학력 컴포넌트
    │   │   └───Profile           # 프로필 컴포넌트
    │   │   └───Project           # 프로젝트 컴포넌트
    │   │
    │   └───login                 # 로그인 컴포넌트
    │   └───register              # 회원가입 컴포넌트
    │
    └───utils                     # util 디렉토리
    │       env.js                # 서버 주소
    │       header.js             # 요청 헤더값
    │       validation.js         # Validation 코드
    │
    └───redux                     # Redux 상태관리
```

##### Server
```
RacerPortfolio
│   app.py                # 실행 파일
│   config.py             # 설정 파일
│   db_connet.py          # DB 연동 파일
│   secret.py             # 서버 비밀키 (gitignore)
│
└───api
│      awards.py          # 수상 이력 수정 API
│      certificates.py    # 자격증 수정 API
│      edus.py            # 학력 수정 API
│      profile.py         # 프로필 수정 API
│      projects.py        # 프로젝트 수정 API
│      network.py         # 검색 페이지 API
│      posts.py           # 포트폴리오 내용 로딩 API
│      user_api.py        # 로그인 관리 API
│
└───models
│      award.py           # 수상 이력 테이블
│      certificate.py     # 자격증 테이블
│      edu.py             # 학력 테이블
│      project.py         # 프로젝트 테이블
│      token.py           # 토큰 테이블
│      user.py            # 유저 테이블
│
└───utils                 # 관리자 페이지
       validation.py      # Validation 코드
```

<br/>

### 프로젝트 실행
- **클라이언트**
`/Client yarn start`
- **서버**
`/Server/RacerPortfolio python3 app.py`

---

### 둘러보기

<details>
    <summary> 로그인 </summary>
    <img src=https://user-images.githubusercontent.com/22339356/132104178-32a419f2-1c30-4c7b-81ad-4281b956a453.png width="800">
</details>

<details>
    <summary> 회원가입 </summary>
    <img src=https://user-images.githubusercontent.com/22339356/132104183-3ad8fe1a-971c-4166-bbbb-803d4ba42adc.png width="800">
</details>

<details>
    <summary> 메인 페이지 </summary>
    <img src=https://user-images.githubusercontent.com/22339356/132104180-0a926752-ac3a-4eb4-b547-5304311926ad.png width="800">
</details>

<details>
    <summary> 포트폴리오 작성 </summary>
    <img src=https://user-images.githubusercontent.com/22339356/132104182-014a8a39-fbe2-41d4-bda5-8e23a7b64890.png width="800">
</details>

<details>
    <summary> 유저 검색 </summary>
    <img src=https://user-images.githubusercontent.com/22339356/132104176-ffdc0392-41fe-4932-b72e-0ce15155a59d.png width="800">
</details>

---

### What I Learned?

- [OAuth2란 무엇인가?](https://hee-jae.tistory.com/6?category=882483)
- [클라우드 스토리지는 무엇인가?](https://hee-jae.tistory.com/5?category=882483)
- [Bcrypt를 사용하는 이유](https://hee-jae.tistory.com/4?category=882483)
- [Refresh Token 관리 방법에 대해](https://hee-jae.tistory.com/3?category=882483)
- [단일 도메인에 배포해보기](https://hee-jae.tistory.com/2?category=882483)

### See Also
- [Wiki](https://github.com/Hee-Jae/RacerPortfolio/wiki)