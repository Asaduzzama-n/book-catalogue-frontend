import AuthorSearchForm from "@/components/forms/AuthorSearchForm";

export default function Authors() {
  return (
    <div className="min-h-screen container my-10">
      <div className="flex justify-between">
        <div>
          <h2 className="mt-10 scroll-m-20  pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            Authors
          </h2>
        </div>
        <div>
          <AuthorSearchForm></AuthorSearchForm>
        </div>
      </div>
      <div>Author Card Container</div>
    </div>
  );
}
