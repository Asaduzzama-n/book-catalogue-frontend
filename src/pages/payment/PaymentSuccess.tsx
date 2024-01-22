import Invoice from "@/components/shared/Invoice";
import Loader from "@/components/shared/Loader";
import { clearCart } from "@/redux/features/cart/cartSlice";
import { useGetSinglePaymentQuery } from "@/redux/features/payment/paymentApi";
import { useAppDispatch } from "@/redux/hooks";
import { useParams } from "react-router-dom";

export default function PaymentSuccess() {
  const { invoiceId } = useParams();
  const dispatch = useAppDispatch();
  if (invoiceId) {
    dispatch(clearCart());
  }
  const { data, isLoading } = useGetSinglePaymentQuery(invoiceId as string);
  const payment = data?.data;
  console.log(payment);

  return (
    <div className="min-h-screen container mb-10">
      {!data?.data || isLoading ? (
        <Loader></Loader>
      ) : (
        <Invoice payment={payment}></Invoice>
      )}
    </div>
  );
}
