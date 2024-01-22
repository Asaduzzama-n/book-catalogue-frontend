import { formatDate } from "@/utils/formate-date";
import logo from "../../assets/logo/logo-3.png";

export default function Invoice({ payment }: any) {
  const { amount, books, invoiceId, paymentStatus, createdAt, userId } =
    payment;
  const { name, address, contactNo, email } = userId;

  const downloadAsPDF = async () => {
    // const element = document.getElementById("invoice-container");
  };

  return (
    <div>
      <div
        id="invoice-container"
        className="bg-white dark:bg-inherit my-5  p-6"
      >
        <div className="flex ">
          <img className="h-20" src={logo} alt="" />
          {/* <h1 className="text-2xl font-bold mb-4  dark:text-white">
          UPL eBook
        </h1> */}
        </div>

        <div className="grid md:grid-cols-2 items-center  dark:text-white">
          <div className="text-start space-y-2">
            <p className="font-semibold">
              Invoice no:{" "}
              <span className="font-bold text-blue-800">{invoiceId}</span>{" "}
            </p>
            <p className="font-semibold">
              Invoice date:{" "}
              <span className="font-bold">{formatDate(createdAt)}</span>
            </p>
            <p className="font-semibold">
              Status:
              <span className="font-bold py-1 mx-2 px-2  text-blue-800">
                {paymentStatus.toLowerCase()}
              </span>
            </p>
          </div>
          <hr className="mt my-5 md:hidden" />
          <div className="  md:mt-0 md:text-end space-y-2">
            <p className="font-bold text-blue-800">Bill to</p>
            <p className="font-semibold">
              {name.firstName + " " + name?.lastName}
            </p>
            <p className="font-semibold">{email}</p>
            <p className="font-semibold">{contactNo}</p>
            <p className="font-semibold">{address}</p>
          </div>
        </div>

        <table className="w-full md:w-3/4 mx-auto border-collapse table-auto my-5 ">
          <thead>
            <tr className="border-t-2 border-blue-800 ">
              <th className="w-12 p-2 "> Cover</th>

              <th className="  p-2">Title</th>

              <th className="  p-2">Price</th>
            </tr>
          </thead>

          <tbody>
            {books?.map((book: any) => (
              <tr className="border-b-2 ">
                <td className=" p-2 ">
                  <img className="h-14" src={book.coverImg.url} alt="" />
                </td>
                <td className=" font-semibold p-2 text-center">{book.title}</td>
                <td className=" p-2 font-semibold text-center">
                  {book?.price}
                </td>
              </tr>
            ))}
            <tr>
              <td></td>
              <td className="p-2  text-end font-bold">
                <p className="">Subtotal</p>
              </td>
              <td className=" font-semibold  p-2 text-center">{amount}</td>
            </tr>
            <tr>
              <td></td>
              <td className="p-2  text-end font-bold">
                <p className="">Discount</p>
              </td>
              <td className=" font-semibold  p-2 text-center">{amount}</td>
            </tr>
            <tr>
              <td></td>
              <td className="p-2  text-end font-bold">
                <p className="">Total</p>
              </td>
              <td className=" font-semibold border-b-2 border-blue-800  p-2 text-center">
                {amount}
              </td>
            </tr>
          </tbody>
        </table>

        <div className="space-y-2  mt-20">
          <p className="font-bold ">Notes</p>
          <p className="text-blue-800 font-semibold">
            Thank you for your purchase
          </p>
          <p className="font-bold ">Terms & Condition</p>
          <p className="text-blue-800 font-semibold">
            You have agreed to our terms & condition
          </p>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          onClick={downloadAsPDF}
          className="bg-primary text-white px-4 py-1 rounded"
        >
          Download
        </button>
      </div>
    </div>
  );
}
