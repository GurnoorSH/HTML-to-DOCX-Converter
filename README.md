# HTML to DOCX Converter

This project is a web application that converts HTML files to DOCX format. It consists of a React frontend and a Flask backend.

## Features

*   **File Upload**: Upload one or more HTML files to be converted.
*   **HTML to DOCX Conversion**: The backend converts the uploaded HTML files to DOCX format.
*   **Download**: Download the converted DOCX files.

## Getting Started

### Prerequisites

*   Node.js and npm
*   Python 3 and pip

### Installation

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2.  **Install backend dependencies:**

    ```bash
    pip install -r backend/requirements.txt
    ```

3.  **Install frontend dependencies:**

    ```bash
    npm install --prefix frontend
    ```

### Running the Application

1.  **Start the backend server:**

    ```bash
    python backend/app.py
    ```

    The backend server will be running on `http://localhost:5000`.

2.  **Start the frontend development server:**

    ```bash
    npm run dev --prefix frontend
    ```

    The frontend development server will be running on `http://localhost:5173` (or another port if 5173 is in use).

3.  **Open the application in your browser:**

    Open your web browser and navigate to the URL provided by the frontend development server (e.g., `http://localhost:5173`).

## Usage

1.  Drag and drop your HTML files onto the upload area, or click the "Choose Files" button to select them.
2.  Click the "Convert to DOCX" button to start the conversion process.
3.  Once the conversion is complete, a "Download DOCX" button will appear for each successfully converted file. Click this button to download the file.
