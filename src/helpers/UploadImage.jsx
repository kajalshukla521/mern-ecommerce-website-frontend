const uploadImage = async (image) => {
    try {
     
        const cloudName = "dzcon8ol3";

        const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

        const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", "mern_product");

        const dataResponse = await fetch(url, {
            method: "POST",
            body: formData,
        });

        if (!dataResponse.ok) {
            throw new Error(`HTTP error! status: ${dataResponse.status}`);
        }

        const data = await dataResponse.json();
        console.log("Upload successful:", data);
        return data;
    } catch (error) {
        console.error("Error uploading image:", error.message);
        throw error;
    }
};

export default uploadImage;
