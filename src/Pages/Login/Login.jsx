import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate,  validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2'
import loginImage from '../../assets/others/authentication2.png'

const Login = () => {
    const {loginByEmailAndPass } = useContext(AuthContext);
    const captchaRef = useRef(null);
    const [allowLogin, setAllowLogin] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";


    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])
    

    const handleValidateCaptcha = (event) => {
        event.preventDefault();
        const userCaptchaValue = captchaRef.current.value;
        if (validateCaptcha(userCaptchaValue) == true) {
            setAllowLogin(false);
        }
        else {
            setAllowLogin(true);
        }
    }


    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        loginByEmailAndPass(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User Login Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from, { replace: true });
        })
    }

    return (
        <div style={{background:`url("../../../src/assets/others/authentication.png")`}}>
            <Helmet>
                <title>Food Planet | Login</title>
            </Helmet>
                <div className="hero min-h-screen">
                <div className="hero-content  md:flex-row flex-col-reverse shadow-2xl my-12">
                    <div className="text-center md:w-1/2 lg:text-left">
                    <img src={loginImage} alt="" />
                    </div>
                    <div className="card md:w-1/2 sm:w-full"> 
                    <h2 className='text-3xl font-bold text-center'>Login</h2>          
                    <form onSubmit={handleLogin} className="card-body px-0 md:px-10 sm:px-0 py-0">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        </div>
                        <div className="form-control">
                        <LoadCanvasTemplate />
                        <input ref={captchaRef} type="text" name="captcha" placeholder="typed the captcha above" className="input input-bordered mt-2" />
                        <button onClick={handleValidateCaptcha} className="btn btn-outline btn-xs mt-4">Validate</button>
                        </div>
                        <div className="form-control mt-6">
                            <input disabled={allowLogin} className="btn btn-primary bg-[#D1A054] border-[#D1A054]" type="submit" value="Login" />
                        </div>
                    </form>
                    <div>
                        <p className='text-center py-2 text-[#D1A054]'>New Here? <Link to="/signUp" className='hover:border-b-2 border-[#D1A054]'>Create a New Account</Link></p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login