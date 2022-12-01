import { useEffect, useRef } from "react";


const UploadWidget = () => {
const cloudinaryRef = useRef();
const widgetRef = useRef();

useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
   widgetRef.current = cloudinaryRef.current.createUploadWidget({
        cloudName:'ddhobdqkx',
        uploadPreset: 'yanjaoxa',


    }, function(error, result) {
        console.log(result);
    })
}, [])

return (
    <button onClick={() => widgetRef.current.open()}> 
    Upload Photo</button>
)
}

export default UploadWidget;