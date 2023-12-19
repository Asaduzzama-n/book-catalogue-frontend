import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useAppSelector } from "@/redux/hooks";

export default function Checkout() {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const { books, total } = useAppSelector((state) => state.cart);

  return (
    <div className="md:h-screen md:w-4/5 mx-auto my-10 ">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-3/5">
          <Table className="w-full border rounded-md ">
            <TableCaption>A list of your added books.</TableCaption>
            <TableHeader className="sticky top-0 bg-white z-0">
              <TableRow>
                <TableHead className="w-[100px] font-medium text-lg">
                  Books
                </TableHead>
                <TableHead className="font-medium text-lg">Title</TableHead>
                <TableHead className="text-right font-medium text-lg">
                  Price
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="w-full">
              {books?.map((book) => (
                <TableRow key={book?.title}>
                  <TableCell>
                    <img
                      className="h-16 w-12"
                      src={book?.coverImg?.url}
                      alt="book"
                    />
                  </TableCell>
                  <TableCell className="font-medium text-lg">
                    {book?.title}
                  </TableCell>
                  <TableCell className="text-right font-medium text-lg">
                    {book?.price}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="md:w-1/4 md:mx-auto my-10 mx-5 md:my-0">
          <div className="border w-full p-5 mb-5">
            <div className="flex justify-between items-center my-2  p-2">
              <h3 className="font-semibold text-lg">Subtotal:</h3>
              <h3 className="font-semibold text-lg">{total}</h3>
            </div>
            <hr />
            <div className="flex justify-between items-center my-2  p-2">
              <h3 className="font-semibold text-lg">Total:</h3>
              <h3 className="font-semibold text-lg">{total}</h3>
            </div>
          </div>
          <h2 className="text-3xl font-medium text-[#232F3E]">PAY WITH</h2>
          <div className="p-5 border rounded-md my-5 flex items-center">
            <h3 className="text-sm font-medium">
              Secure Payment with SSLZCOMMERZ
            </h3>
            <img
              className="h-8"
              src="https://sslcommerz.com/wp-content/uploads/2019/11/footer_logo.png"
              alt=""
            />
          </div>
          <div>
            <div className="items-top flex space-x-2">
              <Checkbox
                onClick={() => setIsChecked(!isChecked)}
                className="secondary"
                id="terms1"
              />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="terms1"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Accept terms and conditions
                </label>
                <p className="text-sm text-muted-foreground">
                  You agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </div>
          </div>
          <Button
            disabled={!isChecked}
            className=" bg-[#232F3E] w-full my-5 hover:bg-[#C89949] hover:text-[#232F3E] font-bold"
          >
            PAY
          </Button>
        </div>
      </div>
    </div>
  );
}
