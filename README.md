# HTML to DOCX Converter

This project is a web application that converts HTML files to DOCX format. Users can upload an HTML file through a simple web interface, and the application will generate a corresponding DOCX file that can be downloaded.

## Features

-   **HTML to DOCX Conversion:** Convert HTML files to DOCX format while preserving basic formatting.
-   **Web-based Interface:** Easy-to-use web interface for uploading files.
-   **Supports various HTML tags:** Handles common HTML tags such as headings, paragraphs, lists, and links.
-   **Preserves Basic Styling:** Retains basic styling attributes like font size, bold, and italic.

## How to Use

1.  **Open the web application:** Access the application through your web browser.
2.  **Upload an HTML file:** Click on the "Choose File" button to select the HTML file you want to convert.
3.  **Convert to DOCX:** Click the "Convert to DOCX" button to start the conversion process.
4.  **Download the DOCX file:** Once the conversion is complete, a download link for the DOCX file will appear. Click on it to download the file.

## Technologies Used

-   **Python:** The backend of the application is built using Python.
-   **Flask:** A lightweight web framework for Python used to create the web server.
-   **BeautifulSoup:** A Python library for pulling data out of HTML and XML files.
-   **python-docx:** A Python library for creating and updating Microsoft Word (.docx) files.
-   **Bootstrap:** A popular CSS framework for building responsive and mobile-first websites.

## How to Run Locally

To run the project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    ```
2.  **Install the required dependencies:**
    ```bash
    pip install -r requirements.txt
    ```
    *(Note: You will need to create a `requirements.txt` file that includes `Flask`, `beautifulsoup4`, and `python-docx`.)*
3.  **Run the application:**
    ```bash
    python app.py
    ```
    *(Note: You will need to create an `app.py` file to serve the `INDEX.HTML` file and handle the file conversion.)*
4.  **Access the application:** Open your web browser and go to `http://127.0.0.1:5000`.
