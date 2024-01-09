import styled from "styled-components";
import { Link } from "react-router-dom";
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
  display: flex;
  justify-content: space-between;
`;

const ATag = styled.a`
  text-decoration: none;
  color: black;
`;

const LoginForm = () => {
  return (
    <>
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
          <ATag href="#">이메일 찾기</ATag> | 
          <Link to="/pw">비밀번호 찾기</Link> |
          <ATag href="#">회원가입</ATag>
        </AccountContainer>
        <p>SNS 계정으로 로그인</p>

        <div>
          a, b, c
        </div>
      </OuterDiv>

    </>

  )
}

export default LoginForm;