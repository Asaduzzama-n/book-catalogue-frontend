import ShopDisplay from "./ShopDisplay";
import ShopFilter from "./ShopFilter";

export default function Shop() {
  return (
    <div className="md:flex min-h-screen my-5 justify-between">
      <div className=" p-5 md:p-0 w-full md:w-1/5">
        <ShopFilter></ShopFilter>
      </div>
      <div className="p-5 md:p-0 md:w-3/4">
        <ShopDisplay></ShopDisplay>
      </div>
    </div>
  );
}
