import SignupHeader from "./signup/SignupHeader"
import Input from "./store/Input"
import Button from "./store/Button"

const SignupForm = () => {
  return (
    <>
      <SignupHeader />
      {/* <div style={{display: 'flex'}}> */}
      <Input htmlFor="signupEmail" width="200px" id="signupEmail" placeholder="이메일 입력" />
      <Button width="150px" >다시 요청</Button>
      {/* </div> */}
      <Input htmlFor="authNumber" id="authNumber" placeholder="인증번호"/>
      <p>인증 번호가 같아요</p>
      <p>인증번호가 오지 않아요.</p>
      <Button>다음</Button>
    </>
  )
}

export default SignupForm