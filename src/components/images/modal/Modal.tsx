import { useEffect } from "react";

interface ModalProps {
  onClose: () => void;
  largeImageURL: string;
}

const Modal = ({ onClose, largeImageURL }: ModalProps) => {
  useEffect(() => {
    const handleKeyDown = (event: Event) => {
      if (event instanceof KeyboardEvent && event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown as EventListener);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleBackdrop = (event: React.MouseEvent<HTMLDivElement>) => {
    const { target, currentTarget } = event;
    if (target === currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="flex justify-center items-center pb-12 pt-12 top-0 left-0 w-full h-full bg-[#000000cc] fixed"
      onClick={handleBackdrop}
    >
      <div className="relative pt-5 pb-5">
        <img
          src={largeImageURL}
          alt="Large img"
          className=" w-[1000px] h-[700px] mb-5 mt-5"
        />
      </div>
    </div>
  );
};

export default Modal;
