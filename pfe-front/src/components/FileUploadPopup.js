// src/components/FileUploadPopup.js
import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

const FileUploadPopup = ({ setShowPopup }) => {
  const [file, setFile] = useState(null);

  const onDrop = acceptedFiles => {
    setFile(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: [
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 
      'application/vnd.ms-excel',
      'application/vnd.oasis.opendocument.spreadsheet'
    ]
  });

  const handleSubmit = () => {
    // Handle file processing and download
    setShowPopup(false);
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center">
      <div className="bg-gray-900 text-white p-12 rounded-lg shadow-lg w-1/2">
        <h2 className="text-2xl mb-4 text-center">Upload Excel File</h2>
        <div 
          {...getRootProps()} 
          className="border-4 border-dashed border-gray-300 p-6 text-center cursor-pointer"
        >
          <input {...getInputProps()} />
          {
            file ? 
              <p>{file.name}</p> :
              <p>Drag & drop an Excel file here, or click to select one</p>
          }
        </div>
        <div className="mt-4 flex justify-center">
          <button 
            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 mr-2"
            onClick={handleSubmit}
          >
            Submit
          </button>
          <button 
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            onClick={() => setShowPopup(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default FileUploadPopup;
