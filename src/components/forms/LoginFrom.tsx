import React from "react";
import { useForm } from "react-hook-form";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { useAppDispatch, useAppSelector } from "@/redux/hooks";
// import { googleSignIn, loginUser } from "@/redux/features/auth/authSlice";
// import { toast } from "react-toastify";
// import useToken from "@/hooks/useToken";
// import { getUserInfo } from "@/services/auth.service";
import { useUserLoginMutation } from "@/redux/features/auth/authApi";
import { toast } from "react-toastify";
import { getUserInfo, storeUserInfo } from "@/services/auth.service";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setUser } from "@/redux/features/user/userSlice";

interface LoginFormProps {
  // Add any additional props if needed
}

type Inputs = {
  email: string;
  emailRequired: string;
  password: string;
  passwordRequired: string;
};

const LoginForm: React.FC<LoginFormProps> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();

  // const [token] = useToken(user?.email);

  // const navigate = useNavigate();
  // const location = useLocation();
  // const from = location.state?.from?.pathname || "/";
  // getUserInfo();
  // if (token) {
  //   navigate(from, { replace: true });
  // }
  // const dispatch = useAppDispatch();
  const [userLogin] = useUserLoginMutation();

  const onSubmit = async (data: { email: string; password: string }) => {
    try {
      const options = {
        data: {
          email: data?.email,
          password: data?.password,
        },
      };
      const res = await userLogin(options).unwrap();
      toast.success(res.message);
      storeUserInfo({ accessToken: res?.data?.accessToken });
      navigate(location.state?.from || "/");
      console.log(res);
      // const userData = getUserInfo();
      dispatch(setUser(res?.data?.userData));
    } catch (error) {
      toast.error(error?.data?.message);
    }
    // const result = await dispatch(
    //   loginUser({ email: data.email, password: data.password })
    // );
    // if (result.payload) {
    //   toast.success(`Welcome ${result.payload}`);
    // }
  };

  // const handleGoogleSignIn = async () => {
  //   await dispatch(googleSignIn())
  //     .then((result) => {
  //       console.log(result?.payload);
  //       // @ts-ignore
  //       const { name, email } = result?.payload;
  //       saveUserInfo(name, email);
  //       // storeUserInfo(res?.data?.accessToken)
  //       toast.success(`Welcome ${name}`);
  //       navigate(location.state?.from || "/");
  //     })
  //     .catch((error) => toast.error(error.message));
  // };

  // const saveUserInfo = async (name: string, email: string) => {
  //   const user = {
  //     name: {
  //       firstName: name.includes(" ") ? name.split(" ")[0] : name,
  //       lastName: name.includes(" ") ? name.split(" ")[1] : "",
  //     },
  //     email: email,
  //     role: "user",
  //   };
  //   fetch("http://localhost:5000/api/v1/auth/signup", {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(user),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  // };

  return (
    <div className="">
      <div className="min-h-[80vh]  flex justify-center items-center">
        <form className="md:w-1/5" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight text-primary dark:text-white lg:text-4xl text-center mb-10">
            LOGIN
          </h1>
          <div className="grid  items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              placeholder="Email"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && <span>{errors?.email?.message}</span>}
          </div>

          <div className="grid  items-center gap-1.5 my-2">
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              className=""
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 4,
                  message: "Password must be 6 characters or longer",
                },
              })}
            />
            {errors.password && <span>{errors?.password?.message}</span>}
          </div>

          <div className="flex justify-center mt-4">
            <button
              className="bg-primary w-full h-10 text-lg font-medium rounded-md cursor-pointer hover:opacity-90  text-white"
              type="submit"
            >
              LOGIN
            </button>
          </div>
          <div className="flex justify-between mt-2">
            <Link
              className="text-primary hover:opacity-90  dark:text-white"
              to={"/signup"}
            >
              Didn't Have an account?
            </Link>
            <p className="leading-7 [&:not(:first-child)] hover:opacity-90  text-primary dark:text-white">
              Reset password
            </p>
          </div>

          <div className="flex justify-center ">
            <div className="">
              <blockquote className="mb-2  italic">-or-</blockquote>
            </div>
          </div>
          <button
            // onClick={handleGoogleSignIn}
            className="bg-primary w-full h-10 text-lg font-semibold rounded-md hover:opacity-90  text-white"
          >
            Log in with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
