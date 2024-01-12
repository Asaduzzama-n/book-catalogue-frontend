import Breadcrumb from "@/components/shared/Breadcrumb";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { setCategory, setLanguage } from "@/redux/features/shop/shopSlice";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export default function ShopFilter() {
  const breadcrumbPaths = [
    { label: "Shop", url: "/shop" },
    { label: "Category", url: "/shop" },
  ];

  const dispatch = useAppDispatch();
  const { language, category } = useAppSelector((state) => state.shop);

  const handleLanguageChange = (data: string) => {
    dispatch(setLanguage(data));
  };

  const handleCategoryChange = (data: string) => {
    dispatch(setCategory(data));
  };
  const languages = [
    {
      name: "English",
    },
    {
      name: "Bangla",
    },
    {
      name: "France",
    },
  ];

  const categories = [
    {
      name: "Romance",
    },
    {
      name: "Science Fiction & Fantasy",
    },
    {
      name: "Kids",
    },
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
              {languages &&
                languages.map((lang) => (
                  <label
                    key={lang.name}
                    className={`flex items-center mb-2 hover:bg-customBG py-1 cursor-pointer ${
                      language === lang.name ? "bg-gray-200" : ""
                    }`}
                  >
                    <input
                      className="hidden"
                      type="checkbox"
                      name="language"
                      value={lang.name}
                      checked={language === lang.name}
                      onChange={() => handleLanguageChange(lang.name)}
                    />
                    <span className="ml-2">{lang.name}</span>
                  </label>
                ))}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Category</AccordionTrigger>
            <AccordionContent>
              {categories &&
                categories.map((cat) => (
                  <label
                    key={cat.name}
                    className={`flex items-center mb-2 hover:bg-customBG py-1 cursor-pointer ${
                      category === cat.name ? "bg-gray-200" : ""
                    }`}
                  >
                    <input
                      className="hidden"
                      type="checkbox"
                      name="category"
                      value={cat.name}
                      checked={category === cat.name}
                      onChange={() => handleCategoryChange(cat.name)}
                    />
                    <span className="ml-2">{cat.name}</span>
                  </label>
                ))}
            </AccordionContent>
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
