import React, { useState } from 'react';
import { google } from 'googleapis';

const DownloadFile = () => {
  const [file, setFile] = useState(null);

  const downloadFile = async () => {
    const drive = google.drive({
      version: 'v3',
    });

    const fileId = 'YOUR_FILE_ID';

    const request = drive.files.get({
      fileId,
      alt: 'media',
    });

    const response = await request;

    // The response will be a stream of the file contents.
    // You can save the stream to a file or display it in the browser.

    setFile(response);
  };

  return (
    <div>
      <button onClick={downloadFile}>Download File</button>
      {file && <div>File downloaded!</div>}
    </div>
  );
};

export default DownloadFile;