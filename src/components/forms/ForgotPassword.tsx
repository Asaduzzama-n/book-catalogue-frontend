// ForgotPassword.js

import { useForgetPasswordMutation } from "@/redux/features/auth/authApi";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [forgetPassword] = useForgetPasswordMutation();

  const onSubmit = async (data: any) => {
    const options = {
      data: { email: data.email },
    };

    try {
      const res = await forgetPassword(options).unwrap();
      console.log(res);
      toast.success("Check your email.");
    } catch (error) {
      toast.error(error?.data?.message);
    }
  };
  return (
    <div className="flex items-top justify-center h-screen bg-inherit">
      <form onSubmit={handleSubmit(onSubmit)} className=" my-5 w-3/4 md:w-1/4 ">
        <div className="mb-4">
          <label htmlFor="email" className="block  text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email", { required: "Email is required" })}
            className="w-full border rounded bg-inherit py-2 px-3 outline-none"
          />
        </div>
        <button
          type="submit"
          className="bg-primary text-white py-2 px-4 rounded "
        >
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
