import { IoIosArrowForward } from "react-icons/io";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useForm } from "react-hook-form";

type FormData = {
  answer: boolean | null;
};

export default function ReviewReportSection() {
  const { handleSubmit, setValue } = useForm<FormData>();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const handleYesClick = () => {
    setValue("answer", true);

    handleSubmit(onSubmit)();
  };

  const handleNoClick = () => {
    setValue("answer", false);

    handleSubmit(onSubmit)();
  };

  return (
    <div className="font-serif">
      <p className="text-sm"> 3 People found this review helpful</p>
      <Accordion type="single" collapsible className="w-full md:my-2">
        <AccordionItem value="item-1">
          <AccordionTrigger>Was this helpful to you?</AccordionTrigger>
          <AccordionContent>
            <form className="md:w-1/5" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={handleYesClick}
                  className="bg-primary text-white  px-4 py-1"
                >
                  Yes
                </button>
                <button
                  type="button"
                  onClick={handleNoClick}
                  className="bg-primary text-white hover:bg-red-600 px-4 py-1"
                >
                  No
                </button>
              </div>
            </form>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="flex items-center">
        <p>Report as inappropriate</p>
        <IoIosArrowForward className="mx-2" />
      </div>
    </div>
  );
}
