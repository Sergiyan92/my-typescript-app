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
      className=" flex justify-center items-center top-0 left-0 w-full h-full bg-[rgba(0, 0, 0, 0.8)] fixed"
      onClick={handleBackdrop}
    >
      <div className=" relative w-11/12 h-5/6">
        <img src={largeImageURL} alt="Large img" />
      </div>
    </div>
  );
};

export default Modal;
