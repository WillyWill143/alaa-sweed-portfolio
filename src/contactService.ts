import emailjs from '@emailjs/browser';

// Define the shape of the form data
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export const sendMessage = async (data: ContactFormData) => {
  // 1. Go to https://www.emailjs.com/
  // 2. Create a free account
  // 3. Add a Service (Gmail) -> Get Service ID
  // 4. Add a Template -> Get Template ID
  // 5. Go to Account -> API Keys -> Get Public Key
  
  // REPLACE THE STRINGS BELOW WITH YOUR ACTUAL KEYS
  const serviceID = 'service_xdm9561';  
  const templateID = 'template_wmv8kqh'; 
  const publicKey = 'VB-HD0qHz56DIPflL';  

  try {
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      phone: data.phone,
      subject: data.subject,
      message: data.message,
    };

    // This sends the email directly from the browser
    await emailjs.send(serviceID, templateID, templateParams, publicKey);
    
    return { success: true, message: 'Message sent successfully!' };
  } catch (error) {
    console.error('Failed to send message:', error);
    return { success: false, message: 'Failed to send message. Please check your internet connection.' };
  }
};
