import { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../GlobalContext";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@radix-ui/react-select";
import { ChevronDown } from "lucide-react";

function TicketSelection() {
  const { FormTitles, page, handleIncreasedSteps, handleDecreaseSteps, handleUserChoice, buttonsChoice, selectedButtonId, setSelectedButtonId   } = useContext(GlobalContext);
  
  

  const [selectedValue, setSelectedValue] = useState(() => localStorage.getItem("numberOfTickets") || 1);

  const handleSelectValue = (value) => {
    localStorage.setItem("numberOfTickets", value);
    setSelectedValue(value);
  };

  const handleButtonClick = (buttonId) => {
     localStorage.setItem("selectedButtonId", buttonId);
    setSelectedButtonId(buttonId);
    handleUserChoice(); 
  };
  
  const selectNumbers = Array.from({ length: 20 }, (_, i) => i + 1);

  useEffect(() => {
     setSelectedButtonId(localStorage.getItem("selectedButtonId") || null);
  }, [])
  
  console.log("Rendering TicketSelection");
  console.log("FormTitles:", FormTitles);
  console.log("page:", page);
  console.log("selectedButtonId:", selectedButtonId);
  console.log("selectedValue:", selectedValue);


  return (
    <div className="md:mt-9 rounded-[40px] md:bg-customNavbg md:border border-cyan-500 bg-opacity-70 backdrop-filter backdrop-blur-lg p-[20px] md:p-[24px]">
      <section className="bg-gradient rounded-3xl text-center text-white flex flex-col items-center h md:h-[248px] p-3 md:p-[24px]">
        <h1 className="text-3xl md:text-4xl lg:text-[62px] fonts2">Techember Fest ’25</h1>
        <p className="text-[10px] md:text-lg w-3/4 md:w-3/4 lg:w-7/12 mb-3 mt-4">
          Join us for an unforgettable experience at [Event Name]! Secure your spot now.
        </p>
        <p>📍 [Event Location] || March 15, 2025 | 7:00 PM</p>
      </section>

      <div className="mt-[30px]">
        <p className="text-lg text-white">Select Ticket Type:</p>

        <div className="bg-section h-fit flex flex-wrap gap-3 rounded-[30px] mt-4 p-3 md:p-[24px]" style={{ border: "1px solid #0E464F" }}>
          {buttonsChoice.map((button) => (
            <div
              key={button.id}
              onClick={() => handleButtonClick(button.id)}
              className={`hover:bg-sky-900 transition-colors duration-300 p-[8px] cursor-pointer flex w-full md:w-[45%] h-14 md:h-[78px] rounded-[12px] justify-between ${
                selectedButtonId === button.id ? "bg-sky-500" : ""
              }`}
              style={{ border: "1px solid #0E464F" }}
            >
              <div className="block gap-3">
                <p className="text-white text-sm lg:text-lg">{button.type}</p>
                <p className="text-white text-sm">20 left</p>
              </div>

              <div className="bg-section w-1/3 md:w-16 lg:w-[5.4rem] p-[6px] flex justify-end h-fit rounded-[9px]">
                <p className="text-lg font-semibold text-white">${button.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-[30px]">
        <p className="text-base text-white">Number of Tickets</p>
      </div>

      <div className="w-full">
        <Select value={selectedValue} onValueChange={handleSelectValue}>
          <SelectTrigger className="w-full outline-none h-[50px] rounded-[12px] px-4 p-[8px] flex justify-between items-center text-white" style={{ border: "1px solid #0E464F" }}>
            <p className="text-white">{selectedValue}</p>
            <SelectValue value={selectedValue} />
            <ChevronDown className="h-4 w-4 text-white" />
          </SelectTrigger>

          <SelectContent className=" w-[300px] md:w-[400px] mt-3 bg-section bg-opacity-80 rounded-[12px] px-4 p-[8px] text-white" style={{ border: "1px solid #0E464F" }} position="popper">
            {selectNumbers.map((number) => (
              <SelectItem key={number} value={String(number)} className="text-white w-full cursor-pointer hover:bg-sky-900">
                {number}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="h-fit flex flex-col md:flex-row justify-center md:bg-section bg-opacity-80 md:border border-cyan-500 gap-6 md:h-12 md:rounded-full mt-[30px] w-full">
        <button className="h-10 md:h-full w-full md:w-[212px] text-cyan-400 text-base rounded-lg border border-cyan-500" disabled={page === 0} onClick={handleDecreaseSteps}>
          Cancel
        </button>
        <button
          className={`h-10 md:h-full w-full md:w-[212px] rounded-lg text-base text-white bg-sky-500 ${
            !selectedButtonId ? "cursor-not-allowed opacity-50" : "cursor-pointer"
          }`}
          disabled={page === FormTitles.length - 1 || !selectedButtonId || !selectedValue}
          onClick={handleIncreasedSteps}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default TicketSelection;
