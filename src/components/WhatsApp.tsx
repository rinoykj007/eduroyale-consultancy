import React from "react";

interface WhatsAppProps {
  phoneNumber: string;
  message: string;
}

export const WhatsApp: React.FC<WhatsAppProps> = ({ phoneNumber, message }) => {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 bg-[#25D366] text-white rounded-full hover:bg-[#128C7E] transition-colors duration-300 flex items-center gap-2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.92 15.73C16.87 15.93 16.49 16.1 16.15 16.25C15.81 16.4 14.83 16.95 14.53 17.03C14.23 17.11 13.93 17.15 13.63 17.03C13.33 16.91 12.19 16.51 10.55 15.13C8.91 13.75 8.03 12.11 7.91 11.81C7.79 11.51 7.83 11.25 7.95 11.01C8.07 10.77 8.31 10.45 8.55 10.25C8.79 10.05 8.91 9.89 9.03 9.67C9.15 9.45 9.11 9.27 9.03 9.11C8.95 8.95 8.03 7.21 7.67 6.59C7.35 5.97 7.03 6.07 6.83 6.07H6.23C5.93 6.07 5.47 6.19 5.15 6.49C4.83 6.79 3.91 7.65 3.91 9.37C3.91 11.09 5.19 12.75 5.35 12.97C5.51 13.19 8.03 17.15 11.95 18.61C15.87 20.07 15.87 19.61 16.51 19.55C17.15 19.49 18.55 18.67 18.91 17.93C19.27 17.19 19.27 16.57 19.19 16.43L16.92 15.73Z" />
      </svg>
      Contact via WhatsApp
    </button>
  );
};
