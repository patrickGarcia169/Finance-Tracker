import './SignIn.css'

function SignIn(){
    return(
        <div id="login-main">
            <form action="" id="login-box">
                <h1>Login</h1>
                <div className='input-box'>
                    <input type="text" placeholder='Username' required/>
                </div>
                <div className='input-box'>
                    <input type="text" placeholder='Password' required/>
                </div>

                <button type='submit'>Login</button>

            </form>
        </div>
    )
}

export default SignIn