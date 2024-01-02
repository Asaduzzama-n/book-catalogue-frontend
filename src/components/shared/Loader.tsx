import { CircleLoader } from "react-spinners";

export default function Loader() {
  return (
    <div className="my-10 flex justify-center">
      {" "}
      <CircleLoader color="#0E2A47" loading size={26} speedMultiplier={1} />
    </div>
  );
}
