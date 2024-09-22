/**
 * Downloads a local file from the public directory and saves it with the specified file name.
 * 
 * @param fileName - The name of the file in the public directory
 */
export async function downloadFile(fileName: string): Promise<void> {
  try {
    // Construct the URL for the file in the public directory
    const fileUrl = `/${fileName}`;

    // Fetch the file
    const response = await fetch(fileUrl);
    if (!response.ok) throw new Error("Download failed");

    // Create a Blob from the file data
    const blob = await response.blob();
    
    // Create a temporary URL for the Blob
    const url = window.URL.createObjectURL(blob);
    
    // Create a temporary link element to trigger the download
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    
    // Append the link to the body, click it, and remove it
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Clean up the temporary URL
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Download error:", error);
    throw error;
  }
}