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
    <div id="invoice-container" className="bg-white dark:bg-inherit my-5  p-6">
      <div className="flex ">
        <img className="h-20" src={logo} alt="" />
        {/* <h1 className="text-2xl font-bold mb-4 text-primary dark:text-white">
          UPL eBook
        </h1> */}
      </div>

      <div className="grid md:grid-cols-2 items-center text-primary dark:text-white">
        <div className="text-start space-y-2">
          <p className="font-semibold">
            Invoice no: <span className="font-bold ">{invoiceId}</span>{" "}
          </p>
          <p className="font-semibold">
            Invoice date:{" "}
            <span className="font-bold">{formatDate(createdAt)}</span>
          </p>
          <p className="font-semibold">
            Status:
            <span className="font-bold py-1 mx-2 px-2  ">
              {paymentStatus.toLowerCase()}
            </span>
          </p>
        </div>
        <hr className="mt my-5 md:hidden" />
        <div className="  md:mt-0 md:text-end space-y-2">
          <p className="font-semibold">
            {name.firstName + " " + name?.lastName}
          </p>
          <p className="font-semibold">{email}</p>
          <p className="font-semibold">{contactNo}</p>
          <p className="font-semibold">{address}</p>
        </div>
      </div>

      <table className="w-full border-collapse table-auto my-5 ">
        <thead>
          <tr>
            <th className="border bg-slate-100 p-2 w-12"> Cover</th>

            <th className="border bg-slate-100 col-span-2 p-2">Title</th>

            <th className="border bg-slate-100 p-2">Price</th>
          </tr>
        </thead>

        <tbody>
          {books?.map((book: any) => (
            <tr>
              <td className="border p-2 ">
                <img className="h-14" src={book.coverImg.url} alt="" />
              </td>
              <td className="border font-semibold p-2 text-center">
                {book.title}
              </td>
              <td className="border p-2 font-semibold text-center">
                {book?.price}
              </td>
            </tr>
          ))}
          <tr>
            <td></td>
            <td className="p-2 text-end font-bold">
              <p>Total</p>
            </td>
            <td className=" font-semibold  p-2 text-center">{amount}</td>
          </tr>
        </tbody>
      </table>

      <div className="mt-4 flex justify-end">
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
