import Breadcrumb from "@/components/shared/Breadcrumb";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  setCategory,
  setIsFilterApplied,
  setLanguage,
  setPriceRange,
} from "@/redux/features/shop/shopSlice";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import _ from "lodash";
import { TbCurrencyTaka } from "react-icons/tb";
export default function ShopFilter() {
  const breadcrumbPaths = [
    { label: "Shop", url: "/shop" },
    { label: "Category", url: "/shop" },
  ];

  const dispatch = useAppDispatch();
  const { language, category, minPrice, maxPrice } = useAppSelector(
    (state) => state.shop
  );

  const handleLanguageChange = (data: string) => {
    dispatch(setLanguage(data));
  };

  const handleCategoryChange = (data: string) => {
    dispatch(setCategory(data));
  };

  const handleResetFilter = () => {
    dispatch(setLanguage(null));
    dispatch(setCategory(null));
    dispatch(setPriceRange({ minPrice: 0, maxPrice: 5000 }));
  };

  const debouncedHandlePriceChange = _.debounce(
    (newRange: number | number[]) => {
      if (Array.isArray(newRange)) {
        dispatch(
          setPriceRange({
            minPrice: Number(newRange[0]),
            maxPrice: Number(newRange[1]),
          })
        );
        setIsFilterApplied(true);
      }
    },
    500
  );

  // Event handler for price range change
  const handlePriceChange = (newRange: number | number[]) => {
    debouncedHandlePriceChange(newRange);
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
                    className={`flex items-center mb-2 hover:bg-customBG dark:hover:bg-primary py-1 cursor-pointer ${
                      language === lang.name
                        ? "bg-customBG dark:bg-primary"
                        : ""
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
                    className={`flex items-center mb-2 hover:bg-customBG dark:hover:bg-primary py-1 cursor-pointer ${
                      category === cat.name ? "bg-gray-200 dark:bg-primary" : ""
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
            <AccordionContent className="w-full">
              <div className="mx-4">
                {/* Use rc-slider to create the price range slider */}
                <Slider
                  className=""
                  range
                  defaultValue={[minPrice, maxPrice]}
                  min={0}
                  max={5000}
                  step={1}
                  keyboard={true}
                  onChange={handlePriceChange}
                  draggableTrack={true}
                  handleStyle={[
                    { backgroundColor: "white", borderColor: "#0E2A47" }, // Style for the first handle
                    { backgroundColor: "white", borderColor: "#0E2A47" }, // Style for the second handle
                  ]}
                  trackStyle={[{ backgroundColor: "#0E2A47" }]}
                  railStyle={{ backgroundColor: "#F2F2F2" }}
                />
                <div className="flex justify-between mt-2 font-medium text-lg">
                  <span className="flex items-center">
                    Min: <TbCurrencyTaka />
                    {minPrice}
                  </span>
                  <span className="flex items-center">
                    Max: <TbCurrencyTaka />
                    {maxPrice}
                  </span>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <button
        onClick={() => handleResetFilter()}
        className="w-full p-2 bg-primary rounded-md my-5 font-medium text-white"
      >
        Reset Filter
      </button>
    </div>
  );
}
