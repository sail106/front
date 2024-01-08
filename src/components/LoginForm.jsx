

const LoginForm = () => {
  return (
    <>
      <h2>안녕하세요</h2>
      <h2>~~~입니다.</h2>
      <p>~~~~를 하는 서비스입니다.</p>

      <form action="#">
        <div>
          <label htmlFor="loginEmail"></label>
          <input type="email" id="loginEmail" placeholder="이메일 입력" />
        </div>
        <div>
          <label htmlFor="loginPw"></label>
          <input type="password" id="loginPw" placeholder="비밀번호 입력" />
        </div>

        <button>로그인</button>
      </form>

      <div>
        <a href="#">이메일 찾기</a> | 
        <a href="#">비밀번호 찾기</a> |
        <a href="#">회원가입</a>
      </div>
      <p>SNS 계정으로 로그인</p>

      <div>
        a, b, c
      </div>
    </>

  )
}

export default LoginForm;