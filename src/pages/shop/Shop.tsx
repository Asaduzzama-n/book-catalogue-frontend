import ShopDisplay from "./ShopDisplay";
import ShopFilter from "./ShopFilter";

export default function Shop() {
  return (
    <div className="flex min-h-screen">
      <ShopFilter></ShopFilter>
      <ShopDisplay></ShopDisplay>
    </div>
  );
}
