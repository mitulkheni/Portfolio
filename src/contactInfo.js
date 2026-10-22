// Single source of truth for contact details used by the Contact page, footer and hero.
export const EMAIL = 'mitulkheni695@gmail.com';
export const PHONE_DISPLAY = '+91 79841 54363';
export const PHONE_TEL = '+917984154363';
export const WHATSAPP_NUMBER = '917984154363';
export const LOCATION = 'Surat, Gujarat, India';
export const TIMEZONE = 'IST (UTC+5:30)';

export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
	"Hi Mitul, I found your portfolio and I'd like to discuss a project.",
)}`;

// Paste your Formspree form ID here (the part after /f/ in https://formspree.io/f/xxxxxxxx).
// While this is empty the contact form falls back to opening the visitor's email app.
export const FORMSPREE_FORM_ID = 'xyekrvvy';
export const FORMSPREE_ENDPOINT = FORMSPREE_FORM_ID
	? `https://formspree.io/f/${FORMSPREE_FORM_ID}`
	: '';
