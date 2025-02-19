import { useContext, useRef } from "react";
import { GlobalContext } from "../GlobalContext";
import html2canvas from "html2canvas";

function BookedTicket() {
  const { preview, setPage, userName } = useContext(GlobalContext);
  const ticketRef = useRef(null);

  const handleBookAnotherTicket = () => {
    setPage(0);
  };

  const handleDownloadTicket = () => {
    if (ticketRef.current) {
      // Capture the ticket container as an image
      html2canvas(ticketRef.current).then((canvas) => {
        const imgData = canvas.toDataURL("image/png"); // Convert canvas to image URL
        const link = document.createElement("a"); // Create a download link
        link.href = imgData;
        link.download = "ticket.png"; // Set the file name
        link.click(); // Trigger the download
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center md:p-4">
      {/* Header */}
      <div className="text-center mt-8 space-y-2">
        <h1 className="text-2xl md:text-3xl text-white font-bold">Your Ticket is Booked!</h1>
        <p className="text-gray-400 text-sm md:text-base">You can download or check your email for a copy</p>
      </div>

      {/* Ticket Container */}
      <div
        ref={ticketRef}
        className="relative w-full max-w-md md:max-w-lg mt-8 p-4 rounded-2xl bg-gradient shadow-lg overflow-hidden"
      >
        {/* Ticket Background */}
        <img
          src="/Ticket.png"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
          alt="Ticket bg"
        />

        {/* Ticket Content */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
          {/* QR Code Section */}
          <div className="w-full md:w-1/3 md:rounded-sm md:overflow-hidden">
            <img
              className="w-full h-full object-cover md:rounded-lg"
              src="/QRcode.png"
              alt="Preview"
            />
          </div>

          {/* Event Details */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left w-full h-auto lg:p-4">
            <h1 className="text-white text-lg lg:text-3xl font-semibold">Techember</h1>
            <h1 className="text-white text-lg lg:text-3xl font-semibold">Fest ’25</h1>
            <div className="mt-3 text-white space-y-1 text-sm md:text-base">
              <p>📍 04 Rumens road, Ikoyi, Lagos</p>
              <p>📅 March 15, 2025 | 7:00 PM</p>
              <p className="text-white flex text-sm md:text-base font-medium">🎟️ User Name: {userName}</p>
            </div>
          </div>

          {/* REG Image */}
          <div>
            <img
              src="/REGImage.png"
              className="w-16 md:w-24 h-auto"
              alt="REGImage"
            />
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="w-full max-w-lg flex flex-col md:flex-row gap-4 mt-6">
        <button
          className="w-full md:w-1/2 h-12 text-cyan-400 border border-cyan-500 rounded-lg transition hover:bg-cyan-500 hover:text-white"
          onClick={handleBookAnotherTicket}
        >
          Book Another Ticket
        </button>
        <button
          className="w-full md:w-1/2 h-12 bg-sky-500 text-white rounded-lg transition cursor-pointer hover:bg-sky-600"
          onClick={handleDownloadTicket}
        >
          Download Ticket
        </button>
      </div>
    </div>
  );
}

export default BookedTicket;