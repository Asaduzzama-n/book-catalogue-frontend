import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { DialogClose } from "@radix-ui/react-dialog";
import { usePostReviewMutation } from "@/redux/features/review/reviewsApi";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setHelpful } from "@/redux/features/review/reviewSlice";
import { TiStar } from "react-icons/ti";

type Inputs = {
  title: string;
  review: string;
};

export function ReviewForm(props: any) {
  const { book } = props;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();
  const [rating, setRating] = useState(0);

  const [postReview] = usePostReviewMutation();
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);

  const onSubmit = async (data: any) => {
    const options = {
      data: {
        rating: rating,
        review: data.review,
        title: data.title,
        book: id,
        user: user.id,
      },
    };
    const res = await postReview(options);
    console.log("Review Post Response", res);
    dispatch(setHelpful(false));
    reset();
    setRating(0);
  };

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className=" text-white w-full">Write you review</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] md:max-w-[600px] dark:bg-primary border-none">
        <div className="flex flex-col md:flex-row my-4">
          <div className="w-full md:w-1/4 p-1 mt-2">
            <img className="max-h-24" src={book?.coverImg?.url} alt="image" />
            <p className="text-sm font-medium mt-2">{book?.title}</p>
            <br />
            <p className="">
              <span className="font-medium text-sm">By:</span>{" "}
              {book?.author?.author1?.name?.firstName}
            </p>
          </div>
          <div className="w-full md:w-3/4 p-2 font-serif ">
            <h2 className="text-2xl mb-2">Share your thoughts</h2>
            <span>
              Tell readers what you thought by rating and reviewing this book.
            </span>
            <div className="flex items-center justify-between">
              <span className="font-semibold">Rate it *</span>
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => handleRatingChange(star)}
                    className={`text-3xl ${
                      star <= rating
                        ? "text-primary dark:text-customBG"
                        : "text-gray-200 hover:text-primary dark:text-black"
                    } focus:outline-none`}
                  >
                    <TiStar />
                  </button>
                ))}
              </div>
            </div>

            <div className="my-2">
              <div className="flex items-center">
                <span>Add a Review *</span>
              </div>
              <div>
                <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
                  <div className="my-2">
                    <textarea
                      className="w-full h-32 p-2 text-sm outline-none dark:text-primary"
                      placeholder="Tell us if you enjoyed the story. What was the author's style like? What did you like the best and the least? Who would you recommend this book for"
                      {...register("review", {
                        required: "Comment is required",
                      })}
                    />
                    {errors.review && (
                      <span className="text-customRED">
                        {errors?.review?.message}
                      </span>
                    )}
                  </div>
                  <div className="my-2">
                    <label htmlFor="title">Title *</label>
                    <input
                      className="w-full p-2 text-sm outline-none shadow-sm mt-2 dark:text-primary"
                      placeholder="Briefly give your overall impression."
                      {...register("title", {
                        required: "Title is required",
                      })}
                    />
                    {errors.title && (
                      <span className="text-customRED">
                        {errors?.title?.message}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center">
                    <DialogClose asChild>
                      <Button
                        onClick={() => {
                          reset(), setRating(0);
                        }}
                        className="w-4/12 mx-auto h-8 text-white font-semibold bg-customRED hover:bg-white hover:border-2 border-customRED rounded-none hover:text-customRED"
                        type="button"
                      >
                        Cancel
                      </Button>
                    </DialogClose>
                    <Button
                      disabled={!rating}
                      className="w-4/12 mx-auto h-8 text-white font-semibold bg-primary hover:bg-white hover:border-2 border-primary rounded-none hover:text-primary"
                      type="submit"
                    >
                      Submit
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
