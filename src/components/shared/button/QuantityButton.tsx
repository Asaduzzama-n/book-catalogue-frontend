import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

interface QuantityButtonProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export const QuantityButton: React.FC<QuantityButtonProps> = ({
  quantity,
  onIncrease,
  onDecrease,
}) => {
  return (
    <div className="flex items-center w-32  space-x-4 h-10 ">
      <button
        onClick={onDecrease}
        className="px-3 py-2  border-2 border-[#C89949] h-10  bg-[#c8994944]  hover:text-white hover:bg-[#C89949] focus:outline-none"
      >
        <AiOutlineMinus />
      </button>
      <span className="text-lg w-4 font-semibold ">{quantity}</span>
      <button
        onClick={onIncrease}
        className="px-3 py-2 border-2 border-[#232f3e69] h-10  bg-[#232f3e69]  hover:text-white hover:bg-[#232F3E] focus:outline-none"
      >
        <AiOutlinePlus />
      </button>
    </div>
  );
};
