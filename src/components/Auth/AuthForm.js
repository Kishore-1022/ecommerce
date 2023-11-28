import { useState, useRef ,useContext} from 'react';
import AuthContext from '../../store/auth-context';
import { useNavigate } from 'react-router';

import classes from './AuthForm.module.css';

const AuthForm = () => {
  const history = useNavigate();
  const authCtx=useContext(AuthContext)
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading,SetIsLoading]=useState(false);
  const email = useRef();
  const password = useRef();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  const submitHandler=async(e)=>{
    e.preventDefault();

    const updatedEmail = email.current.value;
    const updatedPassword = password.current.value;
    SetIsLoading(true)
    let url;
    if(isLogin){
       url ='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA2kiMvS-Nee_CWQlp9nfUcLLBSf_GX17U'

    }else{
      url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA2kiMvS-Nee_CWQlp9nfUcLLBSf_GX17U'
      
    }
    const res = await fetch(url, 
      {
        method: "POST",
        body: JSON.stringify({
          email:updatedEmail,
          password:updatedPassword,
          returnSecureToken: true
        }),
        headers:{'Content-Type':'application/json'}
      })
      SetIsLoading(false)
      if (res){
        const data = await res.json() 
        authCtx.login(data.idToken)
        localStorage.setItem('email',data.email)
        history('/')
      }else{
        const data = await res.json()      
        alert(data.error.message)
       
      }
  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form  onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required  ref={email}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            required
            ref={password}
          />
        </div>
        <div className={classes.actions}>

          {!isLoading && <button>{isLogin? "Login" : "Create Account"}</button>}
          {isLoading && <p>Loading...</p>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
