import React, { useState } from 'react';
import styles from '../styles/FileUpload.module.css';

const FileUpload = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [downloadLink, setDownloadLink] = useState('');

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setSelectedFile(event.target.files[0]);
        }
    };

    const handleConvert = () => {
        if (!selectedFile) {
            alert('Please select a file first.');
            return;
        }

        const formData = new FormData();
        formData.append('htmlFile', selectedFile);

        fetch('/api/convert', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.blob())
        .then(blob => {
            const url = URL.createObjectURL(blob);
            setDownloadLink(url);
        })
        .catch(error => console.error('Conversion error:', error));
    };

    return (
        <div className={styles.fileUpload}>
            <div className={styles.featureList}>
                <h3>Key Features:</h3>
                <ul>
                    <li>
                        <strong>Preserving Formatting and Styles:</strong> Maintain the original formatting, including fonts, colors, styles, and layouts.
                    </li>
                    <li>
                        <strong>Dealing with Hyperlinks and References:</strong> Ensure that hyperlinks and references are retained and functional.
                    </li>
                    <li>
                        <strong>Supporting Complex HTML Structures:</strong> Robust handling of nested elements, tables, lists, and CSS styles.
                    </li>
                    <li>
                        <strong>Minimizing Data Loss:</strong> Minimize the loss of information during the conversion process.
                    </li>
                    <li>
                        <strong>Scalability and Performance:</strong> Efficiently handle large or multiple HTML files without compromising on accuracy or speed.
                    </li>
                </ul>
            </div>
            <div className={styles.uploadSection}>
                <input type="file" onChange={handleFileChange} accept=".html" />
                <button onClick={handleConvert}>Convert to DOCX</button>
                {downloadLink && (
                    <a href={downloadLink} download="converted.docx">
                        Download DOCX
                    </a>
                )}
            </div>
        </div>
    );
};

export default FileUpload;
