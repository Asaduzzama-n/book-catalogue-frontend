import React from "react";
import { useForm } from "react-hook-form";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { Link } from "react-router-dom";

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

  const onSubmit = (data: any) => {
    // Handle login logic here
    console.log(data);
  };

  return (
    <div className="">
      <div className="min-h-[80vh]  flex justify-center items-center">
        <form className="md:w-1/5" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight text-[#232F3E] lg:text-4xl text-center mb-10">
            SIGN UP
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
              SIGN UP
            </button>
          </div>
          <div className="flex justify-center mt-2">
            <Link className="text-[#232F3E]" to={"/login"}>
              Already Have an account?
            </Link>
            {/* <p className="leading-7 [&:not(:first-child)] text-[#232F3E]">
              Reset password
            </p> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
