import React, {useState, useContext, useEffect} from 'react';
import AuthContext from '../../context/auth/authContext'
import AlertContext from '../../context/alert/alertContext'

const Login = (props) => {
    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);
    const {setAlert} = alertContext;
    const { login, error, clearErrors, isAuthenticated } = authContext;

    useEffect(() => {
        
        if(isAuthenticated){
            props.history.push('/Gallery')
        }

        if(error === 'Username or password is wrong'){
            setAlert(error, 'danger');
            clearErrors();
        }
        // selint-disable-next-line
    }, [error, isAuthenticated, props.history])

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const {email, password} = user;
    const onChange = e => setUser({...user, [e.target.name]: e.target.value})
    const onSubmit = e => {
        e.preventDefault();
            if(email === '' || password === ''){
                setAlert('Please fill in all fields', 'danger')
            }else {
                login({
                    email,
                    password
                })
            }
        }

    return (
        <div style={{ width:'50%', margin: '10rem auto'}}>
            <h1 style={{fontFamily:'cursive'}}>
                <center>
                    Sign in
                </center>
            </h1>
            <form onSubmit={onSubmit}>
                
                <div className='form-group'>
                    <input type='email' placeholder="your email" name='email' value={email} onChange={onChange} required/>
                </div>
                <div className='form-group'>
                    <input type='password' placeholder="your password" name='password' value={password} onChange={onChange} 
                    required
                    minLength="6"/>
                </div>
                
                <input type='submit' value='Login' className='btn btn-primary btn-block'/>
            </form>
        </div>
    )
}

export default Login;