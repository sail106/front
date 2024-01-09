import styled from "styled-components";

const OuterDiv = styled.div`
  padding-top: 80px;
  padding-left: 40px;
  width: 520px;
`;

const Input = styled.input`
  border: 1px solid gray;
  border-radius: 6px;
  width: 500px;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 15px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  border: 1px solid #E66F75;
  background-color: #E66F75;
  border-radius: 6px;
  width: 520px;
  padding-top: 15px;
  padding-bottom: 15px;
  margin-bottom: 10px;
  color: white;
  font-size: medium;
  font-weight: bold;
  &:hover {
    background-color: #c94d53;
    cursor: pointer;
  }
`;

const AccountContainer = styled.div`
  padding-top: 15px;
  padding-bottom: 15px;
  text-align: center;
`;

const ATag = styled.a`
  text-decoration: none;
  color: black;
  margin-left: 15px;
  margin-right: 15px;
  font-weight: bold;
  color: #5d5253;
`;

const SnsWord = styled.p`
  text-align: center;
  color: #5d5253;
  padding-top: 5px;
  padding-left: 40px;
  padding-bottom: 3px;
`;

const ImgContainer = styled.div`
  text-align: center;
  padding-bottom: 40px;
`;


const LogoImg = styled.img`
  border-radius: 20px;
  width: 40px;
  height: 40px;
  margin-left: 40px;
`;

const LoginForm = () => {
  return (
    <OuterDiv>
      <h2>안녕하세요 :)</h2>
      <h2>~~~입니다.</h2>
      <p>_____ 를 하는 서비스입니다.</p>

      <form action="#">
        <div>
          <label htmlFor="loginEmail"></label>
          <Input type="email" id="loginEmail" placeholder="이메일 입력" />
        </div>
        <div>
          <label htmlFor="loginPw"></label>
          <Input type="password" id="loginPw" placeholder="비밀번호 입력" />
        </div>

        <Button>로그인</Button>
      </form>

      <AccountContainer>
        <ATag href="#">비밀번호 찾기</ATag>
        <ATag href="#">회원가입</ATag>
      </AccountContainer>

      <SnsWord>
        <p>SNS 계정으로 로그인</p>
      </SnsWord>
      <ImgContainer>
        <a href="#"><LogoImg src="src/assets/naverFavicon.jpg" alt="네이버 로고" /></a>
        <a href="#"><LogoImg src="src/assets/kakaoFavicon.png" alt="카카오 로고" /></a>
        <a href="#"><LogoImg src="src/assets/googleFavicon.jpg" alt="구글 로고" /></a>
      </ImgContainer>
    </OuterDiv>

  )
}

export default LoginForm;