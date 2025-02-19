import { useContext } from "react";
import { GlobalContext } from "../GlobalContext";
import ImageUploader from "./imageUploader";
import { useForm } from "react-hook-form";
import { useEffect } from "react";


function AtendeeDetail() {

  const { FormTitles, page, handleIncreasedSteps, handleDecreaseSteps,    selectedButtonId, setUserDetails  } = useContext(GlobalContext)


  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: {
      name: localStorage.getItem("name") || "",
      email: localStorage.getItem("email") || "",
      aboutProject: localStorage.getItem("aboutProject") || "",
      avaterUrl: localStorage.getItem("avaterUrl") || "",
    }
  });

  // Watch for changes and store them in localStorage
  useEffect(() => {
    const subscription = watch((formValues) => {
      localStorage.setItem("name", formValues.name || "");
      localStorage.setItem("email", formValues.email || "");
      localStorage.setItem("aboutProject", formValues.aboutProject || "");
      localStorage.setItem("avaterUrl", formValues.avaterUrl || "");
    });

    return () => subscription.unsubscribe();
  }, [watch]);






  // };


  const onsubmitForm = (formData) => {
    console.log(formData)
    setUserDetails(formData)
    handleIncreasedSteps()
  }



  return (
    <section className=" rounded-[32px] dragIMGbg border mt-8 p-6" style={{ border: '1px solid #0E464F' }}>

      <div className="uploader p-6 rounded-3xl" style={{ border: '1px solid #0E464F' }}>
        <p className=" text-base text-white"> Upload Profile Photo </p>

        <div className=" w-full sectionbg mt-8 ">
          <ImageUploader register={register} />
        </div>
      </div>

      <div className="text h-1 w-full mt-9"></div>


      <form action="" onSubmit={handleSubmit(onsubmitForm)} className=" mt-8">
        <div className="flex flex-col gap-4 text-white">
          <label htmlFor="Name">Enter your Name*</label>
          <input type="text"
            {
            ...register("name", {
              required: "This is required",
              pattern: {
              
                message: "Invalid Name"
              }
            })
            }
            className="outline-none h-12 ps-7 rounded-xl bg-transparent" style={{ border: '1px solid #0E464F' }} />

          {
            errors.name && <p className="text-red-500">{errors.name.message}</p>

          }
        </div>

        <div className="flex flex-col gap-4 text-white mt-8">
          <label htmlFor="email">Enter your email*</label>
          <div className="outline-none flex items-center  gap-2 h-12 ps-7 rounded-xl w-full  bg-inherit" style={{ border: '1px solid #0E464F' }}>
            <img src="/email.png" alt="" />

            <input type="email"
              {
              ...register("email", {
                required: "This is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid Email"
                }
              })
              }
              className="outline-none h-12 ps-2   w-full  bg-inherit" name="email" id="" placeholder="hello@avioflgos.io" />

          </div>

          {
            errors.email && <p className="text-red-500">{errors.email.message}</p>
          }

        </div>

        <div className="flex flex-col text-white gap-4 mt-8">
          <label htmlFor="textarea"> About the project</label>

          <textarea name="textarea"
            {
              ...register("aboutProject")
            }

            className=" h-36 p-3 bg-transparent rounded-2xl outline-none text-white" placeholder="About Project" id="" style={{ border: '1px solid #0E464F' }}></textarea>
        </div>


        <div className="  h-fit  flex flex-col gap-5 md:flex-row justify-center mt-[30px] w-full ">

          <button className="  h-12 w-full md:w-[212px] text-cyan-400  text-base rounded-lg border border-cyan-500 " disabled={page == 0} onClick={handleDecreaseSteps}>cancel</button>
          <button   type="submit"   className="h-12 w-full md:w-[212px] rounded-lg bg-sky-500 text-base text-white disabled:opacity-50 disabled:cursor-not-allowed"   disabled={page === FormTitles.length - 1}       >
            {selectedButtonId === 'free'
              ? 'FREE Ticket'
              : selectedButtonId === 'vip'
                ? 'VIP Ticket'
                : selectedButtonId === 'vvip'
                  ? 'Get VVIP Ticket'
                  : 'Select a Ticket'}
          </button>
        </div>

      </form>


    </section>
  );
}

export default AtendeeDetail;
