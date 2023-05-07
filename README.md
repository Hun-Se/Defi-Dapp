<h1>Defi 프로젝트</h1>
 

<br>

# 📌 개요

```
- 스마트 컨트랙트 기반으로 동작하는 D-app을 만들어 본 토이 프로젝트입니다.

- 메타마스크를 통해 모의토큰을 스테이킹하고 스테이킹 한 토큰의 양에 따라 보상 토큰을 받는 형식의 Defi 앱입니다.

- 스테이킹 금액이 20모의 테더 이상이라면 30초 후 리워트 토큰이 보상으로 지급됩니다.

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

### 1. Redux-toolkit

- 미들웨어 Thunk를 사용하여 스마트컨트랙트와 연동 하였습니다.
- Redux를 사용하여 deposit, withrow, 리워드 토큰 발행 기능 로직을 뷰와 분리하여 구현했습니다.
- Redux를 사용함으로써 props drilling 없이 원하는 컴포넌트에서 기능을 실행할 수 있습니다.
- toolkit을 사용하면 기존 Redux를 사용했을 때 보다 코드 수를 줄 일 수 있고 configStore을 통해 store를 간단하게 구성 할 수 있다는 장점이 있어서 사용하였습니다.

</br>

### 2. Truffle, Mocha, Chai를 이용한 스마트 컨트랙트 테스트

- 스마트컨트랙트가 잘 작동이 되는지 확인하기 위하여 테스트코드를 실행시켜주는 테스트 프레임워크인 Mocha를 사용하였습니다.
- Mocha에는 assertion을 제공하지 않기 때문에 assertion 라이브러리인 Chai를 사용했습니다.
- 여러 라이브러리와 같이 사용할 수 있는 유연성을 지니고 있기 때문에 해당 테스트 프레임워크를 선택하게 되었다.
- 테스트 방법 :

```
 truffle test
```

- 스마트컨트렉트가 제대로 작동이 되는지 테스트를 먼저 해보고 개발하였기 때문에 프론트엔드 개발에서 보다 안전성 있게 개발 할수 있었다.

### 3. styled-components 사용

- css가 전역적으로 중첩되지 않고 class이름을 지어주지 않아도 된다는 장점이 있어서 styled-components를 사용했습니다.
- 스타일을 컴포넌트화하여 사용하기 때문에 필요한 곳에 불러와서 사용할 수 있다는 장점이 있었다.
- 라이브러리를 추가로 설치해야 한다는 단점이 있지만 작은 규모의 토이프로젝트이기 때문에 영향이 적을 것이라고 판단했습니다.
- 여러곳에서 사용되는 스타일을 컴포넌트화 하여 사용한다면 개발 속도를 높일 수 있다고 생각했습니다.

### 4. truffle 과 web3.js를 사용한 D-app 개발

- Truffle을 사용하여 이더리움기반 스마트컨트렉트를 배포
- web3.js를 사용하여 스마트컨트렉트와 연동하여 클라이언트 개발

</br>

# 🗂 폴더트리

```
📦
 ┣📂 migrations
 ┣📂 public
 ┣📂 script
 ┣📂 src
 ┃┗📂 app
 ┃ ┣📂 asset
 ┃ ┣📂 components
 ┃ ┣📂 constant
 ┃ ┣📂 pages
 ┃ ┣📂 redux
 ┃ ┗📂 truffle_abis
 ┗📂 test


```

</br>
