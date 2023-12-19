// Import the googleapis library
const { google } = require('googleapis');

// Set up Google authentication with the necessary scopes for Google Docs
const auth = new google.auth.GoogleAuth({
    keyFile: './google.json', // Path to your JSON key file
    scopes: ['https://www.googleapis.com/auth/documents'] // Scope for Google Docs
});

// Function to write to a Google Docs document
async function writeGoogleDocs(documentId, requests) {
    try {
        const docs = google.docs({ version: 'v1', auth }); // Create a Google Docs API client

        // Send a batchUpdate request to modify the document
        const writer = await docs.documents.batchUpdate({
            documentId, // ID of the document to update
            requestBody: {
                requests // Array of requests detailing the changes to be made
            }
        });
        return writer; // Return the response from the Google Docs API
    } catch (error) {
        console.error('error', error); // Log any errors that occur
    }
}

// Function to read from a Google Docs document
async function readGoogleDocs(documentId) {
    try {
        const docs = google.docs({ version: 'v1', auth }); // Create a Google Docs API client

        // Retrieve the document content
        const response = await docs.documents.get({ documentId }); // ID of the document to read
        return response.data // Return the document data
    } catch (error) {
        console.error('error', error); // Log any errors that occur
    }
}

// Self-invoking async function to execute the read and write operations
(async () => {
    // Example of writing to a document
    const writer = await writeGoogleDocs('14b1bQ6YcgZYgWGFWW3w936u1raKrQ4y-73hKVDZ9Vos', [{
        insertText: {
            location: {
                index: 1 // Specify the index to insert text
            },
            text: "Hello CodingWithAdo Fans!\n" // Text to be inserted
        }
    }]);
    console.log(writer); // Log the response from the write operation

    // Example of reading from a document
    const data = await readGoogleDocs('14b1bQ6YcgZYgWGFWW3w936u1raKrQ4y-73hKVDZ9Vos');
    // Extract and log the text content from the document
    console.log(data.body.content.map(d => d.paragraph?.elements[0]['textRun']));
})()
