import React from 'react'
import signupImg from "../assets/cric3.jpg"
import Template from '../components/Template'

const Signup = ({setIsLoggedIn}) => {
  return (
    <Template
      title="Champions never sleep, the eternal spirit keep them alert and awake."
      desc1="Build skills for today, tomorrow, and beyond."
      desc2="Sports to future-proof your career."
      image={signupImg}
      formType="signup"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Signup
