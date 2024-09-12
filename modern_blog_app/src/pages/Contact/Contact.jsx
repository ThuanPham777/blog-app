export default function Contact() {
  return (
    <div>
      <div className="px-4 py-32 bg-black text-white text-center">
        <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">
          Contact Us
        </h1>
        <p className="text-gray-100 lg:w-3/5 mx-auto mb-5">
          Feel free to reach out if you have any questions, comments, or need
          further assistance.
        </p>
      </div>

      {/* Contact Information */}
      <div className="px-4 py-16 bg-white text-black">
        <div className="lg:w-3/4 mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">Get in Touch</h2>
          <p className="text-gray-600 mb-8">
            We'd love to hear from you. Reach out to us through any of the
            following methods:
          </p>

          <div className="mb-8">
            <p className="font-semibold">Phone:</p>
            <p className="text-gray-600">+1 234 567 890</p>
          </div>

          <div className="mb-8">
            <p className="font-semibold">Email:</p>
            <p className="text-gray-600">contact@yourcompany.com</p>
          </div>

          <div className="mb-8">
            <p className="font-semibold">Address:</p>
            <p className="text-gray-600">
              123 Business Street, Suite 101, City, Country
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="px-4 py-16 bg-gray-100 text-black">
        <div className="lg:w-3/4 mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10">
            Send Us a Message
          </h2>

          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter your message"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="inline-flex justify-center px-6 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Location Map (Optional Section) */}
      <div className="px-4 py-16 bg-white text-black">
        <div className="lg:w-3/4 mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10">Our Location</h2>
          <iframe
            className="w-full h-64"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093726!2d144.9559253153174!3d-37.81720997975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d3f6b9f6f0!2sYour+Business+Location!5e0!3m2!1sen!2sau!4v1633003078916!5m2!1sen!2sau"
            frameBorder="0"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
