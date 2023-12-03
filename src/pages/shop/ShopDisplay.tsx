import Breadcrumb from "@/components/shared/Breadcrumb";

export default function ShopDisplay() {
  const breadcrumbPaths = [
    { label: "Shop", url: "/shop" },
    { label: "Category", url: "/category" },
  ];
  return (
    <div>
      <div>
        <div className="my-4">
          <Breadcrumb paths={breadcrumbPaths} />
        </div>
      </div>
      {/* Card that will be mapped */}
      <div className="shadow-lg w-52">
        <div className="">
          <img
            className="w-full"
            src="https://statusneo.com/wp-content/uploads/2023/02/MicrosoftTeams-image551ad57e01403f080a9df51975ac40b6efba82553c323a742b42b1c71c1e45f1.jpg"
            alt="abc"
          />
        </div>
        <div className="">
          <div className="p-2 ">
            <p className=" font-medium">Book Name...</p>
            <p>Price</p>
          </div>
          <button className="bg-primary p-2 w-full text-white font-medium hover:bg-secondary hover:text-black">
            Read Now
          </button>
        </div>
      </div>
    </div>
  );
}
