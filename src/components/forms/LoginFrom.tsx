import React from "react";
import { useForm } from "react-hook-form";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { Link } from "react-router-dom";

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

  const onSubmit = (data: any) => {
    // Handle login logic here
    console.log(data);
  };

  return (
    <div className="">
      <div className="min-h-[80vh]  flex justify-center items-center">
        <form className="md:w-1/5" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight text-[#232F3E] lg:text-4xl text-center mb-10">
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
            <Label htmlFor="email">Password</Label>
            <Input
              type="password"
              className=""
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters or longer",
                },
              })}
            />
            {errors.password && <span>{errors?.password?.message}</span>}
          </div>

          <div className="flex justify-center mt-4">
            <button
              className="bg-[#232F3E] w-full h-10 text-lg font-medium rounded-md cursor-pointer text-white"
              type="submit"
            >
              LOGIN
            </button>
          </div>
          <div className="flex justify-between mt-2">
            <Link className="text-[#232F3E]" to={"/signup"}>
              Didn't Have an account?
            </Link>
            <p className="leading-7 [&:not(:first-child)] text-[#232F3E]">
              Reset password
            </p>
          </div>

          <div className="flex justify-center ">
            <div className="">
              <blockquote className="mb-2  italic">-or-</blockquote>
            </div>
          </div>
          <button className="bg-[#F0F3F7] w-full h-10 text-lg font-semibold rounded-md text-[#232F3E]">
            Log in with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
