import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import signUpImage from '../../assets/others/authentication2.png'

const SignUp = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { makingUserByEmailAndPass, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();


    const onSubmit = data => {
      console.log(data);
      makingUserByEmailAndPass(data.email, data.password)
        .then(result => {
          const user = result.user;
          updateUserProfile(data.name, data.photoURL)
            .then(() => {
              reset();
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'User Created Successfully',
                showConfirmButton: false,
                timer: 1500
              })
              navigate("/");
              console.log(user, "user profile info updated");
             })
            .catch(error => { 
              console.log(error)
             });
      })
      };
  
    return (
      <div style={{background:`url("../../../src/assets/others/authentication.png")`}}>
        <Helmet>
        <title>Food Planet | Sign Up</title>
        </Helmet>
        <div className="hero min-h-screen">
            <div className="hero-content flex-col-reverse lg:flex-row-reverse shadow-2xl my-12">
              <div className="text-center w-1/2 lg:text-left">
                <img src={signUpImage} alt="" />
              </div>
              <div className="card flex-shrink-0 w-1/2 max-w-sm">
              <h2 className='text-3xl font-bold text-center'>Sign Up</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body px-0 md:px-10 sm:px-0 py-0">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input type="text" {...register("name",{ required: true })} placeholder="name" className="input input-bordered" />
                    {errors.name && <span className="text-red-600">Name is required</span>}
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" {...register("photoURL",{ required: true })} placeholder="photo URL" className="input input-bordered" />
                    {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                    </div>
                    <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                    {errors.email && <span className="text-red-600">Email is required</span>}
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input type="text" {...register("password",{ required: true, minLength:6, pattern: /^(?=.*[0-9])(?=.*[^a-zA-Z0-9])(.{6,})$/ })} placeholder="password" className="input input-bordered" />
                    {errors.password?.type === 'minLength' && <span className="text-red-600">Password must be 6 characters</span>}
                    {errors.password?.type === 'required' && <span className="text-red-600">Password is required</span>}
                    {errors.password?.type === 'pattern' && <span className="text-red-600">Password must be at least one number and one special character</span>}
                    <label className="label">
                      <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                  </div>
                  <div className="form-control mt-3">
                    <input className="btn bg-[#D1A054] text-white hover:bg-[#D1A054] " type="submit" value="Sign Up" />
                  </div>
              </form>
              <div>
                <p className='text-center py-2 text-[#D1A054]'>Already registered? <Link to="/login" className='hover:border-b-2 border-[#D1A054]'>Go to login</Link></p>
              </div>
              </div>
            </div>
          </div>
      </div>
    );
};

export default SignUp;