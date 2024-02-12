import React, {useState} from 'react'
import img from '../assets/img1.jpeg'

export default function Image() {
    const [uploadedImage, setUploadedImage] = useState(null);
    const [buttonText, setButtonText] = useState('Upload');
  
    const handleImageUpload = (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          setUploadedImage(reader.result);
          setButtonText('Re-Upload');
        };
        reader.readAsDataURL(file);
      }
    };
  return (
    <div className='flex flex-col min-h-screen bg-white'>
      <h1 className=' items-center text-center mt-6 text-3xl font-bold'>
        Upload Your Image Here.
      </h1>
      <div className='flex mt-8 space-x-6 text-center items-center justify-center'>
      <img
        className="inline-block h-48 w-48 rounded-full text-3xl "
        src={uploadedImage || img}
        alt="Dan_Abromov"
      />
      </div>
      {/* <div className=' flex space-x-6 text-center items-center justify-center mt-8'>
        <button className=' rounded-full border bg-blue-500 w-24 py-2 text-white'>
          Upload
        </button>
      </div>
       */}
       <div className='flex space-x-6 text-center items-center justify-center mt-8'>
        <label htmlFor="image-upload" className='cursor-pointer rounded-full border bg-blue-500 w-24 py-2 text-white'>
          {buttonText}
        </label>
        <input
          type="file"
          id="image-upload"
          accept="image/*"
          className="hidden"
          onChange={handleImageUpload}
        />
      </div>
    </div>
  )
}
