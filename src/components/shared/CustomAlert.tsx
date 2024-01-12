import Modal from "react-modal";
import { useTheme } from "../theme/theme-provider";
interface CustomAlertProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  description: string;
}

export default function CustomAlert({
  isOpen,
  onClose,
  onConfirm,
  title,
  description,
}: CustomAlertProps) {
  let { theme } = useTheme();

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)", // Background color of the overlay
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: theme == "dark" ? "#0E2A47" : "#F2F2F2",
      border: 0,
    },
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Confirmation Modal"
      style={customStyles}
    >
      <div className=" text-primary dark:text-white w-full md:w-[500px] font-serif">
        <h3 className="text-center  font-semibold text-2xl mb-5 ">{title}</h3>
        <p className="">{description}</p>
        <br />
        <div className="flex justify-between my-5">
          <button
            className=" py-1 bg-customRED ml-2 font-medium text-white hover:opacity-80 cursor-pointer w-1/2"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="py-1 bg-white font-medium text-primary hover:opacity-80 cursor-pointer w-1/2"
            onClick={onConfirm}
          >
            Confirm
          </button>
        </div>
      </div>
    </Modal>
  );
}
