import React, { useContext, useState } from "react";
import { GoogleAuthProvider, signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa";
import { IoIosEyeOff } from "react-icons/io";
import { Link } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import { auth } from "../../firebase.config";

const provider = new GoogleAuthProvider();

const Login = () => {
    const [show, setShow] = useState(false);
    const {
        createUserWithEmailAndPasswordFunc,
        signInWithEmailFunc,
        signOutFunc,
        user,
        setUser
    } = useContext(AuthContext)

    const handelSignIn = (e) => {
        e.preventDefault();
        const email = e.target.email?.value
        const password = e.target.password?.value
        console.log("Sign in function entered", { email, password });

        // PASSWORD VALIDATION BY REGEX
        const regExp =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (!regExp.test(password)) {
            toast.error(
                "Password must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, one number, and one special character."
            );
            return;
        }

        // SIGN IN WITH EMAIL & PASSWORD
        // signInWithEmailAndPassword(auth, email, password)
        createUserWithEmailAndPasswordFunc(email, password)
            .then((res) => {
                console.log(res);
                setUser(res.user)
                toast.success("Sign in successful");
            })
            .catch((error) => {
                console.log(error.message);
                toast.error("Invalid email or password, please try again");
            });
    };

    // GOOGLE SIGN UP
    const handelGoogleSignIn = () => {
        console.log('click')
        // signInWithPopup(auth, provider)
        signInWithEmailFunc(provider)
            .then(res => {
                console.log(res.user)
                toast.success('Sign In successful')
                // setUser(null)
            })
            .catch(error => {
                console.log(error.message)
                toast.error('Sign In faild')
            })
    }

    return (
        <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
            <div className="card bg-base-100 w-full max-w-md shadow-2xl">

                {/* FORM TITILE */}
                <div className="card-body">
                    <h1 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
                        Login Now
                    </h1>

                    {/* HAVE AN ACCOUNT & REGISTER NOW */}
                    <p className="text-center mt-4 text-sm">
                        Don’t have an account?{" "}
                        <Link to='/signup' className="link text-[#632EE3] font-semibold">
                            Register Now
                        </Link>
                    </p>

                    <form onSubmit={handelSignIn}>
                        <fieldset className="fieldset mt-4">
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
                            {/* PASSWORD */}
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
                                {/* EYE ON / EYE OF ICON */}
                                <span
                                    onClick={() => setShow(!show)}
                                    className="absolute right-3 top-[33px] cursor-pointer text-gray-500 z-50"
                                >
                                    {show ? <IoIosEyeOff /> : <FaEye />}
                                </span>
                            </div>

                            {/* FORGOT PASSWORD */}
                            <div className="mt-2 text-left">
                                <a className="link link-hover text-sm text-[#632EE3]">
                                    Forgot password?
                                </a>
                            </div>

                            {/* SIGN IN BUTTON */}
                            <button
                                type="submit"
                                className="btn w-full mt-4 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold border-none hover:opacity-90"
                            >
                                Signin
                            </button>
                        </fieldset>
                    </form>

                    {/* GOOGLE AUTHENTICATION */}
                    <button onClick={handelGoogleSignIn} className="btn bg-white text-black border-[#e5e5e5]">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Sign In With Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
