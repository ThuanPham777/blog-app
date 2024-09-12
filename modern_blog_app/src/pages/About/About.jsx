export default function About() {
  return (
    <div>
      <div className="px-4 py-32 bg-black text-white text-center">
        <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">
          About Us
        </h1>
        <p className="text-gray-100 lg:w-3/5 mx-auto mb-5">
          We are passionate about delivering quality solutions that empower your
          business to grow. Learn more about our journey and what drives us.
        </p>
      </div>

      {/* Mission Section */}
      <div className="px-4 py-16 bg-white text-black">
        <div className="lg:w-3/4 mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">Our Mission</h2>
          <p className="text-gray-600 mb-8">
            Our mission is to provide exceptional services that help businesses
            reach their full potential. Through innovative solutions, we aim to
            build long-lasting relationships with our clients and contribute to
            their ongoing success.
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div className="px-4 py-16 bg-gray-100 text-black">
        <div className="lg:w-3/4 mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">Our Values</h2>
          <p className="text-gray-600 mb-8">
            We believe in integrity, innovation, and excellence. These core
            values guide us in everything we do, ensuring that we provide
            solutions that are not only effective but also ethical and
            sustainable.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="px-4 py-16 bg-white text-black">
        <div className="lg:w-3/4 mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">Meet the Team</h2>
          <p className="text-gray-600 mb-8">
            Our dedicated team of professionals brings together years of
            experience and a passion for helping businesses succeed. We're here
            to provide you with the support and expertise you need to achieve
            your goals.
          </p>
        </div>
      </div>
    </div>
  );
}
