import { useChangePasswordMutation } from "@/redux/features/auth/authApi";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import { toast } from "react-toastify";

const AccountSettings = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({ mode: "onChange" });

  const [isPasswordMatched, setIsPasswordMatched] = useState(false);

  const newPassword = watch("newPassword", "");
  const confirmPassword = watch("confirmPassword", "");

  useEffect(() => {
    setIsPasswordMatched(newPassword === confirmPassword);
  }, [newPassword, confirmPassword]);

  const [changePassword] = useChangePasswordMutation();

  const onSubmit = async (data) => {
    const options = {
      data: {
        oldPassword: data.oldPassword,
        newPassword: data.newPassword,
      },
    };

    try {
      const res = await changePassword(options).unwrap();
      console.log(res);
      toast.success("Password updated successfully");
    } catch (error) {
      console.log(error);
      toast.error(error.data.message);
    }
  };

  return (
    <div className="flex items-top justify-center h-screen bg-inherit">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-8 rounded w-full md:w-1/2 lg:w-1/3 xl:w-1/4 ml-4"
      >
        <h2 className="text-2xl font-semibold my-10">Change Password</h2>
        <div className="mb-4">
          <label htmlFor="newPassword" className="block text-sm font-bold mb-2">
            New Password
          </label>
          <input
            type="password"
            id="oldPassword"
            placeholder="Old Password"
            {...register("oldPassword", {
              required: "Old Password is required",
              minLength: {
                value: 6,
                message: "Password must be 6 characters long",
              },
            })}
            className="w-full bg-inherit border rounded py-2 px-3 outline-none"
          />
          {errors.oldPassword && (
            <span className="text-red-500">{errors.oldPassword.message}</span>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="newPassword" className="block text-sm font-bold mb-2">
            New Password
          </label>
          <input
            type="password"
            id="newPassword"
            placeholder="New Password"
            {...register("newPassword", {
              required: "New Password is required",
              minLength: {
                value: 6,
                message: "Password must be 6 characters long",
              },
            })}
            className="w-full bg-inherit border rounded py-2 px-3 outline-none"
          />
          {errors.newPassword && (
            <span className="text-red-500">{errors.newPassword.message}</span>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-bold mb-2"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
            {...register("confirmPassword", {
              required: "Confirm Password is required",
              validate: (value) =>
                value === newPassword || "Passwords do not match",
            })}
            className="w-full bg-inherit border rounded py-2 px-3 outline-none"
          />
          {errors.confirmPassword && (
            <span className="text-red-500">
              {errors.confirmPassword.message}
            </span>
          )}
        </div>

        <button
          type="submit"
          className={`bg-primary text-white py-2 px-4 rounded w-full mt-4 ${
            isPasswordMatched ? "" : "opacity-50 cursor-not-allowed"
          }`}
          disabled={!isPasswordMatched}
        >
          Change Password
        </button>
      </form>
    </div>
  );
};

export default AccountSettings;
