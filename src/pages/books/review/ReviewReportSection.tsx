import { IoIosArrowForward } from "react-icons/io";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { useUpdateReviewMutation } from "@/redux/features/review/reviewsApi";
import { IReview } from "@/types/globalTypes";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setHelpful } from "@/redux/features/review/reviewSlice";
import { useState } from "react";
import CustomAlert from "@/components/shared/CustomAlert";

interface IProps {
  review: IReview;
}
export default function ReviewReportSection(props: IProps) {
  const { id, helpfulVotes, unhelpfulVotes } = props?.review;

  const [isModalOpen, setModalOpen] = useState(false);

  const [updateReviewMutation] = useUpdateReviewMutation();

  const dispatch = useAppDispatch();
  const { helpful } = useAppSelector((state) => state.review);

  const handleVote = async (isHelpful: any) => {
    try {
      const options = {
        id: id,
        data: {
          helpfulVotes: isHelpful,
          unhelpfulVotes: !isHelpful,
        },
      };

      const response = await updateReviewMutation(options);
      console.log("From Review Report section", response);
      dispatch(setHelpful(true));
    } catch (error) {
      console.error("Error updating review:", error);
    }
  };

  const handleReport = async () => {
    setModalOpen(true);
  };

  const handleConfirm = async () => {
    try {
      const options = {
        id: id,
        data: {
          inappropriateCount: true,
        },
      };
      const response = await updateReviewMutation(options);
      console.log("From Review Report section", response);
    } catch (error) {
      console.error("Error creating report:", error);
    }
    setModalOpen(false);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <div className="font-serif">
      <p className="text-sm">
        {" "}
        {`${helpfulVotes} of ${
          helpfulVotes + unhelpfulVotes
        } People found this review helpful`}
      </p>
      <Accordion type="single" collapsible className="w-full md:my-2">
        <AccordionItem value="item-1">
          <AccordionTrigger>Was this helpful to you?</AccordionTrigger>
          <AccordionContent>
            <div className="flex space-x-4">
              {!helpful ? (
                <p className="my-1">Thanks for your feedback!</p>
              ) : (
                <>
                  {" "}
                  <button
                    type="button"
                    onClick={() => handleVote(true)}
                    className="bg-primary text-white px-4 py-1"
                  >
                    Yes
                  </button>
                  <button
                    type="button"
                    onClick={() => handleVote(false)}
                    className="bg-primary text-white hover:bg-red-600 px-4 py-1"
                  >
                    No
                  </button>
                </>
              )}
            </div>
            <div className="flex items-center mt-2">
              <button onClick={() => handleReport()} className="hover:border-b">
                Report as inappropriate
              </button>
              <IoIosArrowForward className="mx-2" />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <CustomAlert
        isOpen={isModalOpen}
        onClose={handleClose}
        onConfirm={handleConfirm}
        title="Report a review"
        description="At VerseVoyage, we try to ensure that published reviews do not contain rude or profane language, spoilers, 
        or any of our reviewer's personal information."
      />
    </div>
  );
}
