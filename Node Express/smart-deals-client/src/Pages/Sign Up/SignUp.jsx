import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { IoIosEyeOff } from 'react-icons/io';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';

const provider = new GoogleAuthProvider();

const SignUp = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false)
    const {
        createUserWithEmailAndPasswordFunc,
        signInWithEmailFunc,
        setUser,
        updateProfileFunc
    } = useContext(AuthContext)

    const handelSignUp = (e) => {
        e.preventDefault()
        const displayName = e.target.name?.value
        const photoURL = e.target.photo?.value
        const email = e.target.email?.value
        const password = e.target.password?.value
        console.log('Entired function', { displayName, photoURL, email, password })

        // PASSWORD VALIDATION
        const regExp =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (!regExp.test(password)) {
            toast.error(
                "Password must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, one number, and one special character."
            );
            return;
        }

        // SIGNUP FROM FIREBASE
        // createUserWithEmailAndPassword(auth, email, password)
        createUserWithEmailAndPasswordFunc(email, password)
            .then((res) => {
                setUser(res.user)
                updateProfileFunc(displayName, photoURL)
                toast.success("Sign UP successful");
                navigate('/')
                const newUser = {
                    name: res.user.displayName,
                    email: res.user.email,
                    image: res.user.photoURL
                }


                // CREATE USER IN THE DATABASE
                fetch('http://localhost:3000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('Data after user save', data)
                    })
            })
            .catch((error) => {
                console.log(error.message);
                toast.error("Invalid email or password, please try again");
            });
    }

    // GOOGLE SIGN UP
    const handelGoogleSignIn = () => {
        console.log('click')
        // signInWithPopup(auth, provider)
        signInWithEmailFunc(provider)
            .then(res => {
                console.log(res.user)
                setUser(res.user)
                toast.success('Sign Up successful')
                navigate('/')
            })
            .catch(error => {
                console.log(error.message)
                toast.error('Sign up faild')
            })
    }

    return (
        <div>
            <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
                <div className="card bg-base-100 w-full max-w-md shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
                            Register Now !
                        </h1>
                        <p className="text-center mt-4 text-sm">
                            Don’t have an account?{" "}
                            <Link to='/signin' className="link text-[#632EE3] font-semibold">
                                Login Now
                            </Link>
                        </p>

                        <form onSubmit={handelSignUp}>
                            <fieldset className="fieldset mt-4">
                                {/* NAME */}
                                <label className="label text-sm font-semibold">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter your name"
                                    className="input input-bordered w-full"
                                    required
                                />
                                {/* EMAIL */}
                                <label className="label text-sm font-semibold">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    className="input input-bordered w-full"
                                    required
                                />
                                {/* PHOTO */}
                                <label className="label text-sm font-semibold">
                                    Photo URL
                                </label>
                                <input
                                    type="text"
                                    name="photo"
                                    placeholder="Enter your Photo URL"
                                    className="input input-bordered w-full"
                                    required
                                />

                                <div className="relative mt-3">
                                    <label className="label text-sm font-semibold">
                                        Password
                                    </label>
                                    <input
                                        type={show ? "text" : "password"}
                                        name="password"
                                        placeholder="Enter your password"
                                        className="input input-bordered w-full"
                                        required
                                    />
                                    <span
                                        onClick={() => setShow(!show)}
                                        className="absolute right-3 top-[33px] cursor-pointer text-gray-500 z-50"
                                    >
                                        {show ? <IoIosEyeOff /> : <FaEye />}
                                    </span>
                                </div>

                                {/* <div className="mt-2 text-right">
                                    <a className="link link-hover text-sm text-[#632EE3]">
                                        Forgot password?
                                    </a>
                                </div> */}

                                <button
                                    type="submit"
                                    className="btn w-full mt-4 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold border-none hover:opacity-90"
                                >
                                    Register
                                </button>
                            </fieldset>
                        </form>


                        {/* Google */}
                        <button onClick={handelGoogleSignIn} className="btn bg-white text-black border-[#e5e5e5]">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Sign UP With Google
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;