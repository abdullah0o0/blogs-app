import React from "react";

export default function SignUp() {
    const submitHandler = (e) =>{
        e.prventDefault()
        const userName= e.target.username.value;
        const email = e.target.email.value;
        const password =e.target.password.value;
        const confirmPassword= e.target.confirmPassword.value;

        const data ={
            userName,email,password,confirmPassword
        }
        console.log('sign up data ==>',data);

        //POST req  ==> http://localhost:5000/api/v1/signup
    }
  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={submitHandler}>
      <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            User Name
          </label>
          <input
          name='username'
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            name='email'
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
          name='password'
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Confirm Password
          </label>
          <input
          name='confirmPassword'
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
