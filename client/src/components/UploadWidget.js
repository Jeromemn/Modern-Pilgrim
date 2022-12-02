import { useEffect, useRef } from "react";
import Button from "../components/Buttons/Button"

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
    <Button onClick={(e) => { 
        e.preventDefault();
        widgetRef.current.open()
        }} variant='secondary' > 
    Upload Photo</Button>
)
}

export default UploadWidget;