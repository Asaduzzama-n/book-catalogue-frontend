import {
  useGetUserProfileQuery,
  useUpdateUserMutation,
} from "@/redux/features/user/userApi";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function MyProfile() {
  const { register, handleSubmit, reset } = useForm();
  const [edit, setEdit] = useState(false);

  const [updateUser] = useUpdateUserMutation();

  const { data } = useGetUserProfileQuery(undefined);

  const { image, contactNo, name, gender, dateOfBirth, address, email } =
    data?.data || {};

  const onSubmit = async (data: any) => {
    const { avatar, email, firstName, lastName, ...restData } = data;
    //Formatting name for backend requirement
    const formattedName = {
      name: {
        firstName: firstName || name?.firstName,
        lastName: lastName || name?.lastName,
      },
    };
    const updatedData = {
      ...formattedName,
      ...restData,
    };

    const formData = new FormData();
    if (avatar) {
      formData.append("avatar", avatar[0] as Blob);
    }
    formData.append("data", JSON.stringify(updatedData));

    try {
      await updateUser(formData).unwrap();
      toast.success("Profile updated successfully.");
      setEdit(!edit);
    } catch (error) {
      toast.error("Failed to update profile");
    }
    reset();
  };
  return (
    <div className="container mx-auto my-5 p-8   rounded-md min-h-screen">
      <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
        <div className="flex justify-center mb-4">
          <img
            src={image?.url}
            alt="User Avatar"
            className="rounded-full w-24 h-24 border-2 border-primary p-1"
          />
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-3">
          <div>
            <label
              htmlFor="email"
              className="text-primary font-bold dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              defaultValue={email}
              className="w-full p-2 border rounded outline-none  dark:bg-primary dark:text-white "
              {...register("email", {})}
              // defaultValue={user.email}
              disabled
            />
          </div>
          <div>
            <label
              htmlFor="name"
              className="text-primary font-bold dark:text-white"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              defaultValue={name?.firstName}
              {...register("firstName", {})}
              className="w-full p-2 border rounded outline-none  dark:bg-primary dark:text-white"
              // defaultValue={user.name}
              disabled={!edit}
            />
          </div>
          <div>
            <label
              htmlFor="name"
              className="text-primary font-bold dark:text-white"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              defaultValue={name?.lastName}
              {...register("lastName", {})}
              className="w-full p-2 border rounded outline-none  dark:bg-primary dark:text-white"
              // defaultValue={user.name}
              disabled={!edit}
            />
          </div>

          <div>
            <label
              htmlFor="contact"
              className="text-primary font-bold dark:text-white"
            >
              Contact
            </label>
            <input
              type="tel"
              defaultValue={contactNo}
              id="contact"
              {...register("contactNo")}
              className="w-full p-2 border rounded outline-none  dark:bg-primary dark:text-white"
              // defaultValue={user.contact}
              disabled={!edit}
            />
          </div>
          <div>
            <label
              htmlFor="gender"
              className="text-primary font-bold dark:text-white"
            >
              Gender
            </label>
            <select
              id="gender"
              defaultValue={gender}
              {...register("gender")}
              className="w-full p-2 border rounded outline-none  dark:bg-primary dark:text-white"
              // defaultValue={user.gender}
              disabled={!edit}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="dob"
              className="text-primary font-bold dark:text-white"
            >
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              {...register("dateOfBirth")}
              defaultValue={dateOfBirth}
              className="w-full p-2 border rounded outline-none  dark:bg-primary dark:text-white"
              // defaultValue={user.dob}
              disabled={!edit}
            />
          </div>
          <div className="form-control w-full ">
            <label className="text-primary font-bold dark:text-white">
              <span className=" ">Image</span>
            </label>
            <input
              type="file"
              {...register("avatar")}
              disabled={!edit}
              className="w-full p-2 border rounded outline-none  dark:bg-primary dark:text-white "
            />
          </div>
          <div>
            <label
              htmlFor="address"
              className="text-primary font-bold dark:text-white "
            >
              Address
            </label>
            <textarea
              id="address"
              {...register("address")}
              defaultValue={address}
              className="w-full p-2 border rounded outline-none  dark:bg-primary dark:text-white "
              // defaultValue={user.address}
              disabled={!edit}
            />
          </div>
        </div>
        <div className="flex justify-end my-10">
          <button
            type="button"
            onClick={() => setEdit(!edit)}
            className="mt-4 bg-customBG text-primary py-2 px-4 rounded outline-none"
          >
            Edit
          </button>
          <button
            hidden={!edit}
            type="submit"
            className="mt-4 bg-primary text-white py-2 px-4 rounded outline-none ml-2"
          >
            Save changes
          </button>
        </div>
      </form>
    </div>
  );
}
