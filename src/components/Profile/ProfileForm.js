import { useContext, useRef } from 'react';
import classes from './ProfileForm.module.css';
import AuthContext from '../../store/auth-context';
import { useNavigate } from 'react-router';

const ProfileForm = () => {
  const history = useNavigate();
  const newPassword=useRef()
  const ctxAuth=useContext(AuthContext)
  
  const submitHandler=async(e)=>{
    e.preventDefault(); 
    const updatedNewPassword = newPassword.current.value
    const res=await fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyA2kiMvS-Nee_CWQlp9nfUcLLBSf_GX17U',  {
      method: "POST",
      body: JSON.stringify({
        idToken: ctxAuth.token,
        password: updatedNewPassword,
        returnSecureToken: false
      }),
      headers:{
        'Content-Type':'application/json'
      }
    })
    history('/')
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password'  ref={newPassword}/>
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
