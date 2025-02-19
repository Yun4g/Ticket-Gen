import { Link } from "react-router-dom";
import BookedTicket from "../FormPage/BookedTicket";


function NavBar() {
    return (
        <nav className="flex justify-between items-center h-[76px] fonts  w-11/12 md:w-[1200px]  p-4 rounded-[24px] bg-customNavbg bg-opacity-50 backdrop-filter backdrop-blur-md    " style={{border:'2px solid #197686'}}>
             <div className="  w-20 h-7 md:h-full">
              <img src="/Ticketlogo.png"  className=" h-full"    alt="" />
             </div>

              <div className=" text-white  fonts hidden md:flex items-center font-jeju gap-4 ">
                 <Link>Events</Link>
                 <Link to={BookedTicket}>My Tickets </Link>
                 <Link>About Projects</Link>

              </div>

               <div  className="">

                  <button className=" w-28 md:w-[169px] h-[52px] font-jeju md:text-lg bg-white rounded-xl">
                    <Link to={BookedTicket}>
                    My Tickets 
                    </Link>
                       
                  </button>
               </div>
        </nav>
    );
}

export default NavBar;