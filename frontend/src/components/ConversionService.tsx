// API service for handling file conversion
export interface ConversionJob {
  jobId: string;
  status: 'pending' | 'uploading' | 'converting' | 'completed' | 'error';
  progress: number;
  downloadUrl?: string;
  error?: string;
}

const API_BASE_URL = 'http://localhost:5000'; // Adjust based on your Flask backend

export class ConversionService {
  static async convertFile(file: File): Promise<{ downloadUrl: string }> {
    const formData = new FormData();
    formData.append('htmlFile', file);

    try {
      const response = await fetch(`${API_BASE_URL}/api/convert`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Conversion failed: ${response.statusText}`);
      }

      const blob = await response.blob();
      const downloadUrl = URL.createObjectURL(blob);

      return { downloadUrl };

    } catch (error) {
      throw new Error(`Conversion failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }
}