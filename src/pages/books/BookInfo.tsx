import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { IBook } from "@/types/globalTypes";

interface IProps {
  book: IBook;
}

export default function BookInfo(props: IProps) {
  const { book } = props;
  return (
    <div className="flex flex-col w-4/5 mx-auto md:w-full  md:flex-row justify-between ">
      <div className=" md:w-2/5">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="w-1/2">
              Book Information
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex justify-end">
                <img className="h-32" src={book?.coverImg.url} alt="" />
              </div>
              <hr className="my-5 " />
              <div>
                <p>{book?.bookDescription}</p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="md:w-2/5">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Author Information</AccordionTrigger>
            <AccordionContent className="">
              <div className="flex justify-end">
                <img
                  className="h-32"
                  src={book?.author?.author1?.image?.url}
                  alt=""
                />
              </div>
              <hr className="my-5 " />
              <div>{book?.author?.author1?.bio}</div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
