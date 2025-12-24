
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export async function sendMessage(formData: ContactFormData) {
  try {
    // Attempt to reach the backend
    const res = await fetch("http://localhost:3001/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    return await res.json();
  } catch (err) {
    console.warn("Backend unavailable, switching to mock response.", err);
    
    // Fallback: Simulate a successful response so the UI doesn't break
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ 
          success: true, 
          message: "Message sent successfully! (Demo Mode: Backend unavailable)" 
        });
      }, 1000);
    });
  }
}
