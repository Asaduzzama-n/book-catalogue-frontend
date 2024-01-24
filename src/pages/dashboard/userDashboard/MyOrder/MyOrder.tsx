import NoDataFound from "@/components/shared/NoDataFound";
import { useGetUserPurchaseHistoryQuery } from "@/redux/features/payment/paymentApi";
import { formatDate } from "@/utils/formate-date";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function MyOrder() {
  const { data } = useGetUserPurchaseHistoryQuery(undefined);
  const purchasedHistory = data?.data;

  const generateRandomIndex = (arr: any[]) => (): number => {
    return Math.floor(Math.random() * arr.length);
  };
  const [randomIndexes, setRandomIndexes] = useState<{ [key: number]: number }>(
    {}
  );

  useEffect(() => {
    if (purchasedHistory) {
      // Initialize random indexes for each book array
      const initialRandomIndexes: { [key: number]: number } = {};
      purchasedHistory.forEach((history: any, index: number) => {
        initialRandomIndexes[index] = generateRandomIndex(history.books)();
      });
      setRandomIndexes(initialRandomIndexes);

      const intervalId = setInterval(() => {
        setRandomIndexes((prevIndexes) => {
          const newIndexes: { [key: number]: number } = { ...prevIndexes };
          purchasedHistory.forEach((history: any, index: number) => {
            newIndexes[index] = generateRandomIndex(history.books)();
          });
          return newIndexes;
        });
      }, 5000);
      return () => clearInterval(intervalId);
    }
  }, [purchasedHistory]);

  return purchasedHistory?.length == 0 ? (
    <NoDataFound message="Sorry no purchased data found!"></NoDataFound>
  ) : (
    <div className="min-h-screen md:container p-5">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
        {purchasedHistory &&
          purchasedHistory.map((history: any, index: number) => (
            <div className="bg-customBG dark:bg-primary  rounded-md md:flex">
              <div className="w-full md:w-1/4 md:mx-auto ">
                <Link
                  to={`/details/${history?.books[randomIndexes[index]]?.id}`}
                >
                  <img
                    className="max-h-60 mx-auto rounded-md"
                    src={history?.books[randomIndexes[index]]?.coverImg?.url}
                    alt="Book Image"
                  />
                </Link>
              </div>
              <div className="w-full md:w-3/4 pb-1">
                <div className="mx-4">
                  <div className="space-y-1">
                    <h1 className=" font-semibold">
                      Items: {history?.books?.length}
                    </h1>
                    <p className="">
                      <span className="font-medium ">{history?.invoiceId}</span>
                    </p>

                    <div className=" ">
                      <span className="font-medium text-lg text-green-500">
                        {history?.paymentStatus.toLowerCase()}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium">
                        TK: {history?.amount}
                      </h3>
                      <p>{formatDate(history?.createdAt)}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
