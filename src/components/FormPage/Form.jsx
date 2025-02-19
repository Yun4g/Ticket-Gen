import { useContext } from "react";
import NavBar from "../navbar/NavBar";
import { GlobalContext  } from "../GlobalContext";
import TicketSelection from "../FormPage/TicketSelection";
import AtendeeDetail from "../FormPage/AtendeeDetail";
import BookedTicket from "../FormPage/BookedTicket";

function Form() {
    const { FormTitles, steps, page, } =  useContext(GlobalContext);

    console.log(" FormTitles:", FormTitles);
    console.log("steps: ", steps);
    console.log("page:", page);



    return (
        <section className=" relative   sectionbg  h-[fit] w-full  md:p-16 md:pb-16 lg:p-0">
            <header className="flex justify-center pt-6 w-full">
              <NavBar/>
            </header>

            <section className="flex  justify-center mt-4 md:mt-[100px] p-3 md:p-0 pb-[112px]">
                <div className=" innerSectionbg bg-opacity-40 backdrop-filter backdrop-blur-lg  w-full  md:w-[800px] h-fit  p-3  md:p-11  rounded-1xl md:rounded-[32px]" style={{ border: ' 1px solid #197686 ' }}>

                    {FormTitles && FormTitles.length > 0 ? (  
                        <>
                            <div className=" block md:flex items-center font-jeju  justify-between p-4 md:p-0 text-white">
                              
                                <h1 className=" md:text-[37px]  font-jeju">{FormTitles[page]}</h1>
                                <p className="text-[18px]">{steps[page]} </p>
                            </div>
                           
                             <div className="h-[4px] m-3 md:m-0  max-w-[240px] md:max-w-[700px] md:mt-4 bg-progress transition-all duration-300 rounded-full " style={{ width: `${(page + 1) * 100 / FormTitles.length}% ` }}>
                           
                           </div>
                           
                           
                            <div className=" " >
                              
                                {
                                    page === 0 ? <TicketSelection/> : page === 1 ? <AtendeeDetail/> : <BookedTicket/>
                                }
                            </div>
            

                        </>
                    ) : (
                        <div>Loading...</div> 
                    )}

                </div>
            </section>
            <div className="bg-[radial-gradient(ellipse_at_bottom,_rgba(36,160,181,0.3)_0%,_rgba(36,160,181,0)_70%)] h-[30vh] w-full   bottom-0 left-0"></div>
        </section>
    );
}


export default Form