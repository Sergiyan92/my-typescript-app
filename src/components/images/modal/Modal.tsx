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
    <div className="" onClick={handleBackdrop}>
      <div className="">
        <img src={largeImageURL} alt="" />
      </div>
    </div>
  );
};

export default Modal;
