import Breadcrumb from "@/components/shared/Breadcrumb";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ShopFilter() {
  const breadcrumbPaths = [
    { label: "Shop", url: "/shop" },
    { label: "Category", url: "/category" },
  ];
  return (
    <div>
      <div>
        <div className="">
          <Breadcrumb paths={breadcrumbPaths} />
        </div>
      </div>
      <div className="my-5">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Language</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Author</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Tags</AccordionTrigger>
            <AccordionContent>Lorem, ipsum.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Price</AccordionTrigger>
            <AccordionContent>Price</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <button className="w-full p-2 bg-primary rounded-md my-5 font-medium text-white">
        Apply Filter
      </button>
    </div>
  );
}
