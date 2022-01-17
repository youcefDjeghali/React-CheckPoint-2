import React from 'react'
import styled from 'styled-components';

const First=styled.div`
  border: 1px solid #1a202c;
  height:700px;
  width: 620px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color:white;
  border-radius: 17px;
  gap:40px
`;
const Form1=styled.form`

  height:150px;
  width: 480px;
  display: flex;
  flex-direction: column;
  gap:20px;
  align-items: center;
  
`
const Input1 =styled.div`
  width: 500px;
  height:250px;
`
const Footer2=styled.div`
  width: 500px;
  height:250px;
  display: flex;
  flex-direction: column;
  gap:10px;
  align-items: center;

`
const Button1=styled.button`
font-size:12px;
padding:10px 30px
`


function Form() {
    return (
          
     <First className="form-container">
        <h1>Sign Up</h1>

      <Form1 className="form-register">

      <Input1 className="Name">
      <i class="fas fa-user"></i>
         <input type="text" placeholder="Name"/>
      </Input1>

      <Input1 className="Email">
      <i class="fas fa-envelope"></i>
         <input type="text" placeholder="Email" />
      </Input1>

      <Input1 className="Password">
         <i class="fas fa-lock"></i>
         <input type="text"  placeholder="Password" />
      </Input1>

      </Form1>

      <Footer2 className="footer">
         <p><input type="checkbox"/>I read and agree to <span>Terms and conditions</span></p>
         <Button1> CREAT ACCOUNT</Button1>
         <p>Already have an account?<span>Sign in</span></p>
      </Footer2>





    </First>
    
    )
}

export default Form