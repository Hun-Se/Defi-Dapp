<h1>스테이킹 Defi-App</h1>
 

<br>

# 📌 개요

```
- 스마트 컨트랙트 기반으로 동작하는 D-app을 만들어 본 토이 프로젝트입니다.

- 메타마스크를 통해 모의토큰을 스테이킹하고 스테이킹 한 토큰의 양에 따라 보상 토큰을 받는 형식의 D-app입니다.

```

</br>

# ⚙️ 기술 및 개발환경

### [기술]

📌 FrontEnd: React, TypeScript, Redux-Toolkit,
<br/>
📌 BackEnd: Solidity
<br/>
📌 Version:

```
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-redux": "^8.0.5",
    "react-router-dom": "^6.9.0",
    "react-scripts": "5.0.1",
    "solc": "^0.8.19",
    "styled-components": "^5.3.10",
    "styled-reset": "^4.4.6",
    "typescript": "^4.9.5",
    "web-vitals": "^2.1.4",
    "web3": "^1.9.0"
    "chai-as-promised": "^7.1.1",

    "devDependencies": {
    "@babel/core": "^7.21.3",
    "@babel/register": "^7.21.0",
    "@testing-library/react": "^14.0.0",
    "@types/jest": "^29.5.1",
    "@types/styled-components": "^5.1.26",
    "chai": "^4.3.7",
    "mocha": "^10.2.0",
    }
```

- server

```
  "express": "^4.18.2",
  "jsonwebtoken": "^9.0.0",
  "mongoose": "^7.0.3",
  "ts-node": "^10.9.1",
```

</br>

# ⚙️ 구현 기능

- 메타마스크 연결
- 모의 테더 토큰 예치
- 모의 테더 토큰 출금
- 리워드 토큰 발행

# ⚙️ 실행 방법

```
  1. Ganache 다운로드
  2. 테스트용 주소 생성 후 메타마스크와 연결

  > npm install
  > truffle compile
  > truffle migrate
  > npm start
```

# ✨ 코드 포인트

### Redux-toolkit

- 미들웨어 Thunk를 사용하여 스마트컨트랙트와 연동 하였습니다.
- Redux를 사용하여 deposit, withrow, 리워드 토큰 발행 기능을 구현했습니다.

### Mocha와 Chai를 이용한 테스트

- 스마트컨트랙트가 잘 작동이 되는지 확인하기 위하여 테스트코드를 실행시켜주는 테스트 프레임워크인 Mocha를 사용하였습니다.
- Mocha에는 assertion을 제공하지 않기 때문에 assertion 라이브러리인 Chai를 사용했습니다.

</br>

# 🗂 폴더트리

```
📦 src
 ┣📂 client
 ┃ ┣📂 public
 ┃ ┗📂 src
 ┃  ┣📂 api
 ┃  ┣📂 app
 ┃  ┣📂 asset
 ┃  ┣📂 components
 ┃  ┣📂 constant
 ┃  ┣📂 hoc
 ┃  ┣📂 hook
 ┃  ┣📂 lib
 ┃  ┣📂 pages
 ┃  ┣📂 redux
 ┃  ┣📂 router
 ┃  ┣📂 styles
 ┃  ┗📂 types
 ┃
 ┣📂 server
   ┣📂 dist
   ┗📂 src
    ┣📂 config
    ┣📂 controllers
    ┣📂 middleware
    ┣📂 models
    ┣📂 routes
    ┗📂 utils


```

</br>
