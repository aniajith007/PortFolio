import React from 'react';
import axios from 'axios';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// Import styles
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const DownloadButton = () => {
  const fileId = '1JRB4nne2oxu9hrUTgvmY9neYg8BSGtZ5'; // Replace with your actual Google Drive file ID
  const apiKey = 'AIzaSyBW4wH4cSOUERpXYlbCKEbTtgCUi6zzaAI'; // Replace with your actual Google API key

  const downloadFile = () => {
    const apiUrl = `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media&key=${apiKey}`;

    axios.get(apiUrl, { responseType: 'blob' })
      .then(response => {
        // Handle the file download response
        const blob = new Blob([response.data]);
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'downloaded_file.xlsx'; // Replace with the desired file name
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      })
      .catch(error => {
        // Handle errors
        console.error('Error downloading file:', error);
      });
  };
  return (<>
    <button onClick={downloadFile}>
      Download File
    </button>
    </>
  );
};

export default DownloadButton;
