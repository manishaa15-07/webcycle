import React ,{useState} from 'react'
import './head.css'
export default function Header() {
  const [mode,setMode]=useState('light')
  const toggleMode=()=>{
  if(mode==='dark'){
      setMode('light');
      console.log('dark mode enalbed');
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
    }else{
      setMode('dark');
      console.log('light mode enables');
      document.body.style.backgroundColor='rgb(14,48,14)';
      document.body.style.color='white';
    }
  }
  
  return (
    <div className='image'>
        <div className="header">
            <ul className='menu'>
             <li><a href="/">Home</a></li>
             <li><a href="/">News & Blogs</a></li>
             <li><a href="/">Quizzes</a></li>
             <li><a href="/">Programmes</a></li>
             <li><a href="/">Eco-Friendly</a></li>
             <li><a href="/">Contact Us</a></li>
             <li><a href="/">About Us</a></li>
             <label className="switch">
  <input type="checkbox"/>
  <span className="slider round"  onClick={toggleMode} mode={mode}></span>
</label>
             <li className='login'><a href='/'>Log In</a></li>
             <li  className='signin'><a href='/'>Sign In</a></li>
            </ul>
           
            <div>
   
        </div>
        </div>
        <div className="title">
                <div className="left">
                    WEBCYCLE - <br/>
                    Make Future <br/>
                    Sustainable
                </div>
                <div className="right">
                “There must be a better way to make the things we want, <br/>a way that doesn’t spoil the sky, or the rain or the land.” 
                </div>
        </div>
      
    </div>
  )
}
