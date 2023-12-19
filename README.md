# Node.js Google Docs Integration

## Introduction
This Node.js project demonstrates how to integrate with Google Docs to read from and write to documents using the Google Docs API.

## Features
- Read content from a Google Docs document.
- Write text to a Google Docs document.

## Setup
To set up this project, follow these steps:

1. **Clone the Repository**: 
   ```
   git clone https://github.com/adanzweig/nodejs-google-docs.git
   cd nodejs-google-docs
   ```

2. **Install Dependencies**: 
   ```
   npm install
   ```

3. **Google Cloud Project Configuration**:
   - Create a Google Cloud project and enable the Google Docs API.
   - Create credentials (OAuth 2.0 client IDs) and download the JSON key file.
   - Save the JSON key file in your project directory and rename it to `google.json`.

4. **Environment Variables**:
   - Optionally, you can set up environment variables for document IDs or other sensitive data.

## Usage

### Writing to a Google Docs Document
```javascript
// Example of writing to a document
writeGoogleDocs('your-document-id', [{
  insertText: {
    location: {
      index: 1 // Specify the index to insert text
    },
    text: "Your text here\n" // Text to be inserted
  }
}])
.then(response => console.log("Write response:", response))
.catch(error => console.error("Error writing to document:", error));
```

### Reading from a Google Docs Document
```javascript
// Example of reading from a document
readGoogleDocs('your-document-id')
.then(data => console.log("Document content:", data))
.catch(error => console.error("Error reading document:", error));
```

## Authentication
This project uses OAuth 2.0 for authentication with the Google Docs API. Ensure that you have set up your Google Cloud project correctly and downloaded the necessary JSON key file.

## Contributing
Contributions to this project are welcome. Please fork the repository and submit a pull request.
