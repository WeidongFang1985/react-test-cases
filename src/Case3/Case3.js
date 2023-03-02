import {useState} from "react";

const Case3 = () => {
    const [imageSrc, setImageSrc] = useState(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = (event) => {
            setImageSrc(event.target.result);
        };

        reader.readAsDataURL(file);
    };

    return (
        <div>
            <input type="file" accept="image/*" onChange={handleImageUpload} />
            {imageSrc && <img src={imageSrc} alt="Uploaded image" />}
        </div>
    );
};

export default Case3;
