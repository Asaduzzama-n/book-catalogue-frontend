import { RiseLoader } from "react-spinners";

export default function Loader() {
  return (
    <div className="my-10 flex justify-center items-center h-screen">
      <RiseLoader loading margin={2} size={15} color="#0E2A47" />
      {/* <CircleLoader color="#0E2A47" loading size={26} speedMultiplier={1} /> */}
    </div>
  );
}
