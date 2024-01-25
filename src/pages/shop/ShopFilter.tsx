import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
// import {
//   setCategory,
//   setLanguage,
//   setPriceRange,
// } from "@/redux/features/shop/shopSlice";

// import { useAppDispatch } from "@/redux/hooks";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import _ from "lodash";
import { TbCurrencyTaka } from "react-icons/tb";
import { useGetCategoryQuery } from "@/redux/features/shop/shopApi";

export default function ShopFilter(props: any) {
  // const dispatch = useAppDispatch();
  const { setSearchParams, category, language, minPrice, maxPrice } = props;

  const handleLanguageChange = (data: string) => {
    // dispatch(setLanguage(data));
    setSearchParams((prevParams: string) => {
      const updatedParams = new URLSearchParams(prevParams);
      updatedParams.set("language", data);
      return updatedParams;
    });
  };

  const handleCategoryChange = (data: { category: string; key: string }) => {
    // dispatch(setCategory(data));
    setSearchParams((prevParams: string) => {
      const updatedParams = new URLSearchParams(prevParams);
      updatedParams.set("category", data.key);
      return updatedParams;
    });
  };

  const debouncedHandlePriceChange = _.debounce(
    (newRange: number | number[]) => {
      setSearchParams((prevParams: string) => {
        const updatedParams = new URLSearchParams(prevParams);
        if (Array.isArray(newRange)) {
          // dispatch(
          //   setPriceRange({
          //     minPrice: Number(newRange[0]),
          //     maxPrice: Number(newRange[1]),
          //   })
          // );
          updatedParams.set("minPrice", newRange[0] + "");
          updatedParams.set("maxPrice", newRange[1] + "");
        }
        return updatedParams;
      });
    },
    500
  );

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
      name: "French",
    },
  ];

  const { data } = useGetCategoryQuery(undefined);
  const categories = data?.data;
  return (
    <div>
      <div className="border-t">
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
            <AccordionContent className="overflow-y-scroll h-[400px]">
              {categories &&
                categories.map((cat: any) => (
                  <label
                    key={cat.category}
                    className={`flex items-center mb-2 hover:bg-customBG dark:hover:bg-primary py-1 cursor-pointer ${
                      category === cat.key ? "bg-gray-200 dark:bg-primary" : ""
                    }`}
                  >
                    <input
                      className="hidden"
                      type="checkbox"
                      name="category"
                      value={cat.category}
                      checked={category === cat.key}
                      onChange={() => handleCategoryChange(cat)}
                    />
                    <span className="ml-2">{cat.category}</span>
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
                  // defaultValue={[minPrice, maxPrice]}
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
        // onClick={() => handleResetFilter()}
        className="w-full p-2 bg-primary rounded-md my-5 font-medium text-white"
      >
        Reset Filter
      </button>
    </div>
  );
}
