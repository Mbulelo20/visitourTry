import React, {useState, useContext, useEffect, Fragment} from 'react'
import AlertContext from '../../context/alert/alertContext'
import AuthContext from '../../context/auth/authContext'
 
const Register = (props) => {
    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);

    const {setAlert} = alertContext;
    const { register, error, clearErrors, isAuthenticated } = authContext;

    useEffect(() => {
        
        if(isAuthenticated){
            props.history.push('/Gallery')
        }

        if(error === 'User already exists'){
            setAlert(error, 'danger');
            clearErrors();
        }
        // selint-disable-next-line
    }, [error, isAuthenticated, props.history, clearErrors, setAlert])

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const {name, email, password, password2} = user;
    const onChange = e => setUser({...user, [e.target.name]: e.target.value})
    const onSubmit = e => {
        e.preventDefault();
        if(name === '' || email === '' || password === ''){
            setAlert('Please enter all the fields', 'danger')
        }else if(password !== password2){
            setAlert('Passwords do not match', 'danger')
        }else if(error === 'User already exists'){
            setAlert(error, 'danger');
            clearErrors();
        }
        else{
            register({
                name, 
                email, 
                password
            })
        }
    }

    return (
        <Fragment >
            
            <div style={{ width:'50%', margin: '10rem auto'}}>
                
            <h1 style={{fontFamily:'cursive'}}>
                <center>
                    Register
                </center>
            </h1>
                <form onSubmit={onSubmit}>
                    <div className='form-group'>
                        <input type='text' placeholder="Name" name='name' value={name} onChange={onChange} required/>
                    </div>
                    <div className='form-group'>
                        <input type='email' placeholder="Email" name='email' value={email} onChange={onChange} required/>
                    </div>
                    <div className='form-group'>
                        <input type='password' placeholder="Create a password" name='password' value={password} onChange={onChange} 
                        required
                        minLength="6"/>
                    </div>
                    <div className='form-group'>
                        <input type='password' placeholder="Confirm password" name='password2' value={password2} onChange={onChange} required/>
                    </div>
                    <input type='submit' value='Register' className='btn btn-primary btn-block'/>
                </form>
            </div>
        </Fragment>
    )
}

export default Register;