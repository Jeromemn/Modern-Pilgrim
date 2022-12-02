import { useEffect, useRef } from "react";


const UploadWidget = ({onUpload}) => {
const cloudinaryRef = useRef();
const widgetRef = useRef();


// 

useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
   widgetRef.current = cloudinaryRef.current.createUploadWidget({
        cloudName:'ddhobdqkx',
        uploadPreset: 'yanjaoxa',


    }, function(error, result) {
        onUpload(error, result);
    })
}, [])

return (
    <button onClick={() => widgetRef.current.open()}> 
    Upload Photo</button>
)
}

export default UploadWidget;