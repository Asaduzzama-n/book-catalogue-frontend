import React from "react";
import { useForm } from "react-hook-form";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { Link, useNavigate } from "react-router-dom";
// import { createUser, updateUserProfile } from "@/redux/features/auth/authSlice";
// import { useAppDispatch } from "@/redux/hooks";
import { toast } from "react-toastify";
import { useUserSignupMutation } from "@/redux/features/auth/authApi";

interface SignupFormProps {
  // Add any additional props if needed
}

type Inputs = {
  email: string;
  emailRequired: string;
  password: string;
  passwordRequired: string;
  name: string;
  nameRequired: string;
};

const SignupForm: React.FC<SignupFormProps> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  // const dispatch = useAppDispatch();
  const [userSignup] = useUserSignupMutation();
  const navigate = useNavigate();
  const onSubmit = async (data: any) => {
    try {
      // const result = await dispatch(
      //   createUser({ email: data.email, password: data.password })
      // );
      // if (createUser.fulfilled.match(result)) {
      //   //Update User profile
      //   handleProfileUpdate(data?.name, data?.email);
      //   console.log(result.payload);
      //   toast.success(`Account created successfully`);
      // } else if (createUser.rejected.match(result)) {
      //   const errorMessage = result.error.message;
      //   const toastMessage = errorMessage!
      //     .split("/")[1]
      //     .slice(0, -2)
      //     .toUpperCase();
      //   toast.error(toastMessage);
      // }
      const options = {
        data: {
          name: {
            firstName: data?.name,
          },
          email: data?.email,
          password: data?.password,
          role: "user",
        },
      };

      const res = await userSignup(options).unwrap();
      if (res?.success) {
        toast.success("Account created successfully!");
        navigate("/login");
      }
    } catch (error) {
      //@ts-ignore
      console.log(error?.data?.message);
      //@ts-ignore
      toast.error(error?.data?.message);
    }
  };

  // const handleProfileUpdate = (name: string, email: string) => {
  //   const profile = { displayName: name };

  //   dispatch(updateUserProfile(profile))
  //     .then(() => saveUserInfo(name, email))
  //     .catch((error) => console.error(error));
  // };

  // const saveUserInfo = (name: string, email: string) => {
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
            SIGN UP
          </h1>
          <div className="grid  items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              placeholder="Email"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <span className="text-error">{errors?.email?.message}</span>
            )}
          </div>

          <div className="grid  items-center gap-1.5 my-2">
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              placeholder="Name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && <span>{errors?.name?.message}</span>}
          </div>

          <div className="grid  items-center gap-1.5 ">
            <Label htmlFor="email">Password</Label>
            <Input
              type="password"
              className=""
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters long",
                },
                pattern: {
                  value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                  message:
                    "Password must have uppercase, number and special characters",
                },
              })}
            />
            {errors.password && <span>{errors?.password?.message}</span>}
          </div>

          <div className="flex justify-center mt-4">
            <button
              className="bg-primary hover:opacity-90 w-full h-10 text-lg font-medium rounded-md cursor-pointer text-white"
              type="submit"
            >
              SIGN UP
            </button>
          </div>
          <div className="flex justify-center mt-2">
            <Link
              className="text-primary hover:opacity-90 dark:text-white"
              to={"/login"}
            >
              Already Have an account?
            </Link>
            {/* <p className="leading-7 [&:not(:first-child)] text-primary dark:text-white">
              Reset password
            </p> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
