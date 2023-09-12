import { useState } from "react"


const Login = () => {
    const [formData, setFormdata] = useState({
        email:'', 
        password:'',
        rememberMe:false
    });
    const [showPassword, setShowPassword] = useState(true);
    function onChangeHandler(event){
        const{name,value, checked, type} = event.target;
        setFormdata((prevData)=>{
            return({
                ...prevData,
                [name]:type==='checkbox'?checked:value
            })
        })
    }

    function submitHandler(e){
        e.preventDefault();
        let validRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if(!validRegex.test(formData.email)){
        alert("Invalid Email ID ")
    }else{
        console.log(formData);
    }
        
    }

  return (
    <div className="container">
        <div className="card">
            <h1>Log In</h1>
            <div className="input">
                <label htmlFor="">
                    <p>E-mail</p>
                <input type="text"
                placeholder=""
                required
                value={formData.email}
                onChange={onChangeHandler}
                name="email"
                />
                </label>
                <label htmlFor="" id="password">
                    <p>Password</p>
                <input type={showPassword?'password':'text'}
                placeholder=""
                required
                value={formData.password}
                onChange={onChangeHandler}
                name="password"
                />
                <span id="show" onClick={()=>setShowPassword((prev)=>!prev)}>{showPassword?'show':'hide'}</span>
                </label>
                <input type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={onChangeHandler}
                id="rememberMe"
                />
                <label htmlFor="rememberMe" style={{color:"black"}}>Remember Me?</label>
                <br />
                <button id="submit" onClick={submitHandler}>Log In</button>

            </div>
        </div>

    </div>
  )
}
export default Login