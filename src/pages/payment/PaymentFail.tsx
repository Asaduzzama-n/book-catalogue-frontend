import { useNavigate } from "react-router-dom";
import warning from "../../assets/svgs/Warning-rafiki (1).svg";

export default function PaymentFail() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="min-h-screen flex mt-20 justify-center ">
        <div className=" p-8 rounded  max-w-md w-full">
          <div className="flex items-center justify-center mb-6">
            <img
              src={warning} // Replace with the path to your error icon
              alt="Error Icon"
              className="mr-2 text-red-500"
            />
            <h2 className="text-2xl font-bold text-red-500">Payment Failed</h2>
          </div>
          <p className="text-primary font-medium text-xl mb-4">
            Oops! Something went wrong while processing your payment. Please try
            again later.
          </p>
          <button
            className="bg-red-500 text-white py-2 px-4  rounded hover:bg-red-600 focus:outline-none focus:shadow-outline-red active:bg-red-800"
            onClick={() => navigate("/checkout")}
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  );
}
