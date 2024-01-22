import CommonSearchForm from "@/components/forms/CommonSearchForm";

export default function Authors() {
  return (
    <div className="min-h-screen container my-10">
      <div className="md:flex md:justify-between">
        <div>
          <h2 className="mt-10 scroll-m-20 hidden md:inline-block pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            Authors
          </h2>
        </div>
        <div>
          <CommonSearchForm></CommonSearchForm>
        </div>
      </div>
      <div className="my-10 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 "></div>
    </div>
  );
}
