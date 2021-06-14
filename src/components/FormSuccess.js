import React from "react"
import styled from "styled-components"
import EmailBg from "../assets/images/landscape.jpg"

const FormSuccess = () => {
  return (
    <EmailContainer>
      <EmailContent>
        <h1>You Have Successfully Signed Up For Our Newsletter!</h1>
      </EmailContent>
    </EmailContainer>
  )
}

export default FormSuccess

const EmailContainer = styled.div`
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.5) 35%,
      rgba(0, 0, 0, 0.5) 100%
    ),
    url(${EmailBg}) no-repeat center;
  background-size: cover;
  height: 450px;
  width: 100%;
  padding: 5rem calc((100vw - 1900px) / 2);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`
const EmailContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    text-align: center;
    margin-bottom: 1rem;
    font-size: clamp(1rem, 5vw, 3rem);
    padding: 0 1rem;
  }
`
