import { useResetPasswordMutation } from "@/redux/features/auth/authApi";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [searchParams, setSearchParams] = useSearchParams();
  const userEmail = searchParams.get("email");
  const [resetPassword] = useResetPasswordMutation();
  const navigate = useNavigate();
  const onSubmit = async (data: any) => {
    const options = {
      data: {
        email: userEmail,
        newPassword: data.password,
      },
    };
    try {
      await resetPassword(options);
      toast.success("Password reset successful");
      navigate("/login");
    } catch (error) {
      toast.error("Failed to reset password");
    }
  };
  return (
    <div className="flex items-top justify-center h-screen bg-inherit">
      <form onSubmit={handleSubmit(onSubmit)} className=" my-5 w-3/4 md:w-1/4 ">
        <div className="mb-4">
          <input
            type="email"
            id="email"
            placeholder="Email"
            defaultValue={userEmail!}
            disabled
            className="w-full border bg-inherit rounded py-2 px-3 outline-none"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block  text-sm font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
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
            className="w-full border bg-inherit rounded py-2 px-3 outline-none"
          />
          {errors.password && <span>{errors?.password?.message}</span>}
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

export default ResetPassword;
