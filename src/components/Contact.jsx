import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { name, email, subject, message } = formData;
    const mailtoLink = `mailto:gif.glses@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;

    // Redirect to mailto link
    window.location.href = mailtoLink;

    // Reset the form and status after redirection
    setIsSubmitting(false);
    setStatus('Message sent successfully!'); 
  };

  return (
    <section className="py-12 px-4">
      <div className="container mx-auto max-w-lg">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-8">Contact Me</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-wrap gap-4">
            <div className="flex-1">
              <label htmlFor="name" className="block mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-full dark:bg-gray-900 dark:border-gray-700 dark:text-gray-200"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="email" className="block mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-full dark:bg-gray-900 dark:border-gray-700 dark:text-gray-200"
              />
            </div>
          </div>
          <div>
            <label htmlFor="subject" className="block mb-2">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-full dark:bg-gray-900 dark:border-gray-700 dark:text-gray-200"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              required
              className="w-full p-3 border border-gray-300 rounded-xl dark:bg-gray-900 dark:border-gray-700 dark:text-gray-200"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 transition-all px-4 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 disabled:bg-blue-300"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
          {status && <p className="text-center text-gray-900 dark:text-white">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
