import PropTypes from "prop-types";
import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const GlobalContext = createContext();

function GlobalState({ children }) {
    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);

   
    useEffect(() => {
        const savedImage = localStorage.getItem("storeImage");
        if (savedImage) {
            setPreview(savedImage);
        }
    }, []);

    useEffect(() => {
        if (preview) {
            localStorage.setItem("storeImage", preview);
        }
    }, [preview]);

    const [page, setPage] = useState(() => {
        const savedPage = localStorage.getItem("currentPage");
        return savedPage !== null ? JSON.parse(savedPage) : 0;
    });

    const [userName, setUserName] = useState(localStorage.getItem("name") || "");

const setUserDetails = (formData) => {
  setUserName(formData.name); 
  localStorage.setItem("name", formData.name); 
};

    useEffect(() => {
        localStorage.setItem("currentPage", JSON.stringify(page));
    }, [page]);

    const FormTitles = ["Ticket Selection", "Attendee Details", "Ready"];
    const steps = ["step 1/3", "step 2/3", "step 3/3"];

    const [selectedButtonId, setSelectedButtonId] = useState(null);
    const [backgroundColor, setBackgroundColor] = useState(false);

    const [buttonsChoice, setButtonsChioce] = useState([
        { id: "free", label: "Free", type: "REGULAR ACCESS", price: "Free" },
        { id: "vip", label: "VIP", type: "VIP ACCESS", price: "50" },
        { id: "vvip", label: "VVIP", type: "VVIP ACCESS", price: "150" }
    ]);

    const handleUserChoice = () => {
        setBackgroundColor(!backgroundColor);
    };

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        aboutProject: "",
        avaterUrl: ""
    });

    const handleIncreasedSteps = () => {
        setPage(currPage => currPage + 1);
    };

    const handleDecreaseSteps = () => {
        setPage(currPage => currPage - 1);
    };

    const handleUpload = async () => {
        if (!image) {
            alert("Please upload an image.");
            return;
        }
        setLoading(true);
        const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", "delight");

        try {
            const response = await axios.post(
                "https://api.cloudinary.com/v1_1/dcynveqkz/image/upload",formData
            );
            const uploadedImageUrl = response.data.secure_url;
            setPreview(uploadedImageUrl); 
            console.log("Uploaded Image URL:", uploadedImageUrl);
        } catch (error) {
            console.error("Upload failed. Try again later.", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <GlobalContext.Provider
            value={{
                page,
                setPage,
                FormTitles,
                steps,
                handleIncreasedSteps,
                handleDecreaseSteps,
                formData,
                setFormData,
                handleUserChoice,
                buttonsChoice,
                setButtonsChioce,
                backgroundColor,
                setBackgroundColor,
                selectedButtonId,
                setSelectedButtonId,
                handleUpload,
                preview,
                setPreview,
                loading,
                setLoading,
                setImage,
                setUserDetails,
                userName
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}

export default GlobalState;

GlobalState.propTypes = {
    children: PropTypes.node.isRequired
};
