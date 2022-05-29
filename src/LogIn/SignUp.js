import React from "react";
import "react-toastify/dist/ReactToastify.css";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { useForm } from "react-hook-form";
import Loading from "../Shared/Loading";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import useToken from "../Hook/useToken";

const SignUp = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, upadatingError] = useUpdateProfile(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [token] = useToken(user || gUser);
  const navigate = useNavigate();
  let signInError;
  if (token) {
    alert("Registration Successful");
  }
  if (loading || gLoading || updating) {
    return <Loading></Loading>;
  }
  if (error || gError || upadatingError) {
    signInError = <p>{error?.message || gError?.message}</p>;
  }
  const handleSignUp = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    navigate("/dashboard");
  };
  return (
    <div className="flex justify-center align-center h-screen ">
      <div className="card w-96 shadow-xl">
        <div>
          <h2 className="text-center text-bold text-primary tex-xl">Sign Up</h2>
        </div>
        <form onSubmit={handleSubmit(handleSignUp)} className="container">
          <div className="form-control mx-auto max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="name"
              placeholder="Enter Your Name Here"
              className="input input-bordered w-full max-w-xs"
              {...register("name", {
                required: {
                  value: true,
                  message: "please Input a Valid Email",
                },
              })}
            />
          </div>
          <div className="form-control mx-auto max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter Your Email Here"
              className="input input-bordered w-full max-w-xs"
              {...register("email", {
                required: {
                  value: true,
                  message: "Please Input a Valid Email",
                },
                pattern: {
                  value: /[a-z0-9]+@[a-z]+.[a-z]{2,3}/,
                  message: "Provide a valid Email",
                },
              })}
            />
            <label className="label">
              {errors.email?.type === "required" && (
                <span className="label-text-alt text-red">
                  {errors.email.message}
                </span>
              )}
              {errors.email?.type === "pattern" && (
                <span className="label-text-alt text-red-500">
                  {errors.email.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control mx-auto max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Your Password Here"
              className="input input-bordered w-full max-w-xs"
              {...register("password", {
                required: {
                  value: true,
                  message: "please Input a Valid passward",
                },
                minLength: {
                  value: 4,
                  message: "Provided  Character must be At least Four length",
                },
              })}
            />
            <label className="label">
              {errors.password?.type === "required" && (
                <span className="label-text-alt text-red">
                  {errors.password.message}
                </span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="label-text-alt text-red-500">
                  {errors.password.message}
                </span>
              )}
            </label>
          </div>
          {signInError}
          <div className="mx-auto justify-center ">
            <input className="btn  w-80" type="submit" value="Sign up" />
          </div>
        </form>
        <small>
          Already Registered?{" "}
          <Link to="/login" className="text-primary">
            {" "}
            Log In{" "}
          </Link>{" "}
          Here
        </small>

        <div className="divider">OR</div>
        <button className="btn btn-outline" onClick={() => signInWithGoogle()}>
          Sign in with Google
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
