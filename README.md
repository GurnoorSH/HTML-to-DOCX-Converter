# HTML to DOCX Converter

This is a web application that converts HTML files to DOCX format. It features a professional and user-friendly interface built with Next.js and a powerful backend powered by Flask.

## Key Features

*   **Preserving Formatting and Styles**: Maintains the original formatting of the HTML document, including fonts, colors, styles, and layouts, ensuring the converted DOCX file accurately represents the source.
*   **Hyperlinks and References**: All hyperlinks, references, and cross-references within the HTML document are retained and remain functional in the resulting DOCX file.
*   **Complex HTML Structures**: The converter robustly handles complex HTML structures, such as nested elements, tables, lists, and CSS styles, for a reliable and accurate conversion process.
*   **Minimized Data Loss**: The conversion process is designed to minimize the loss of information, including special characters, non-standard fonts, and custom CSS styles.
*   **Scalability and Performance**: The tool is capable of efficiently handling large or multiple HTML files without compromising on accuracy or speed.

## Tech Stack

*   **Frontend**: Next.js, React, TypeScript
*   **Backend**: Flask, Python
*   **HTML Parsing**: BeautifulSoup
*   **DOCX Generation**: python-docx

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   Node.js and npm
*   Python and pip

### Installation

1.  **Clone the repo**
    ```sh
    git clone https://github.com/your_username_/Project-Name.git
    ```
2.  **Install frontend dependencies**
    ```sh
    cd frontend
    npm install
    ```
3.  **Install backend dependencies**
    ```sh
    cd ../backend
    pip install -r requirements.txt
    ```

### Running the Application

1.  **Start the backend server**
    ```sh
    cd backend
    python app.py
    ```
2.  **Start the frontend development server**
    ```sh
    cd ../frontend
    npm run dev
    ```

The application will be available at `http://localhost:3000`.

## Usage

1.  Open the application in your browser.
2.  Click the "Choose File" button to select an HTML file from your local machine.
3.  Click the "Convert to DOCX" button to start the conversion process.
4.  Once the conversion is complete, a "Download DOCX" link will appear. Click it to download the converted file.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

Don't forget to give the project a star! Thanks again!

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Your Name - [@your_twitter](https://twitter.com/your_twitter) - email@example.com

Project Link: [https://github.com/your_username_/Project-Name](https://github.com/your_username_/Project-Name)
