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
              <div>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
                nam neque cum voluptate inventore voluptatem? Consequuntur
                cupiditate commodi itaque et? Consectetur harum, doloribus
                dolore dolorum itaque non nobis minima eum quasi maxime aperiam
                suscipit tempora ratione explicabo debitis fugit. Iure, harum.
                Iste tempora facilis blanditiis cum odio esse corrupti quos
                ipsam vero. Laboriosam corrupti soluta numquam nihil? Inventore
                aperiam, alias veniam tenetur doloremque harum in, provident
                itaque dolor, et exercitationem assumenda quia? Nisi dolorem
                nemo quibusdam, fugiat iure autem maiores accusantium
                consequuntur molestias laboriosam nulla eaque laborum earum ipsa
                deleniti cupiditate in. Asperiores recusandae quisquam vitae ex
                sint molestias eligendi beatae veritatis architecto quidem
                delectus, minus, ipsum maiores nulla. Perferendis, quidem
                voluptatem omnis fuga rerum ipsa. Maiores nemo aperiam tenetur
                quidem architecto qui voluptate distinctio ipsam rerum sed
                doloribus explicabo, nostrum velit laboriosam, eum optio
                deserunt veniam non voluptatem suscipit, ut sunt et eaque
                dolore? Sed, eius perspiciatis blanditiis iusto ea sequi
                repudiandae explicabo minima ex ducimus quaerat voluptate magnam
                consequuntur veniam est dolorum recusandae incidunt molestias
                vitae unde aperiam! Eos atque inventore deserunt sequi nihil
                illo veritatis consequuntur perspiciatis, mollitia nam
                molestiae. Iusto delectus, nobis iure assumenda, nulla quisquam
                dolorum sit enim laboriosam eveniet ex molestiae architecto
                harum tempora!
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
