import { useContext, } from "react";
import { GlobalContext } from "../GlobalContext";
const ImageUploader = () => {
    const {  handleUpload,   preview,   setPreview,   loading,     setImage} = useContext(GlobalContext);
 
    // API Key 837964638918412
    // API secret   rijBCzxgWT5cjw3ksCFxcRwnf1U



   const handleFileChange = (file) => {
    if (file && file.type.startsWith("image/")) {
        if (file.size > 5 * 1024 * 1024) { // 5MB limit
            alert("Image size exceeds 5MB. Please upload a smaller image.");
            return;
        }
        setImage(file);
        const reader = new FileReader();
        reader.onloadend = () => setPreview(reader.result);
        reader.readAsDataURL(file);
    } else {
        alert("Please upload a valid image file.");
    }
};



    const handleDragOver = (event) => {
        event.preventDefault();
        event.currentTarget.style.borderColor = "#28a745";
    };

    const handleDragLeave = (event) => {
        event.preventDefault();
        event.currentTarget.style.borderColor = "#007bff";
    };

    const handleDrop = (event) => {
        event.preventDefault();
        event.currentTarget.style.borderColor = "#007bff";
        const file = event.dataTransfer.files[0];
        handleFileChange(file);
    };
    // rijBCzxgWT5cjw3ksCFxcRwnf1U
 


    return (
        <div className="flex flex-col items-center space-y-4 "  >
            <div className=" w-fit h-fit rounded-[32px] text ">
            <div
                className="h-60 w-60 p-4  rounded-[32px] flex flex-col justify-center items-center bg-cover bg-no-repeat  bg-center  text-center cursor-pointer"        
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop} 
                onClick={()=> document.getElementById('fileInput').click()}
                style={{ backgroundImage: preview ? `url(${preview})` : "text" }}             
            >
                {
                    loading ? (<p className=" text-xl text-white">Uploading..</p>) : (
                        <div  className="flex flex-col justify-center items-center gap-1   "   >
                              

                             
                          
                          <img src="/icon.png" alt="" />
                            <p  className=" text-base text-white  "  onClick={handleUpload}  > Drag & drop or click to upload </p>

                            <input
                                type="file"
                                id="fileInput"
                                className="hidden"
                                accept="image/*"
                                onChange={(e) => handleFileChange(e.target.files[0])}
                               
                               
                            />

                          </div>
               
                    )
                }

            </div>
            </div>
            
          

        </div>
    );
};

export default ImageUploader;
