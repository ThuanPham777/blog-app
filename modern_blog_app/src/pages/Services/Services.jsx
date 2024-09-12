import contentWriting from "../../assets/sheet.png";
import webDesiging from "../../assets/app-development.png";
import digitalMarketing from "../../assets/marketing.png";
import seo from "../../assets/seo.png";
import socialMedia from "../../assets/social-media.png";
import graphicDesign from "../../assets/graphic-designer.png";

export default function Services() {
  return (
    <div>
      <div className="px-4 py-32 bg-black text-white text-center">
        <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">
          Services page
        </h1>
        <p className="text-gray-100 lg:w-3/5 mx-auto mb-5">
          We provide a variety of services to help you achieve your goals.
        </p>
      </div>

      {/* description for services */}

      <div className="text-center px-8 py-16">
        <h2 className="mb-2 text-lg text-orange-500">Services Description</h2>
        <h1 className="mb-2 text-5xl font-bold">What We Offer</h1>
        <p className="mb-2 text-base text-gray-500">
          Our wide range of services is designed to meet your unique needs,
          whether you're looking to enhance your online presence, create
          engaging content, or improve your brand's visual identity. We are
          committed to delivering high-quality solutions that help you achieve
          your business goals efficiently and effectively.
        </p>
      </div>

      {/* Service Section */}
      <div className="px-8 py-16 bg-white text-black">
        <div className="mx-auto text-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Service 1 */}
          <div className="px-4 py-6 rounded-sm shadow-md flex flex-col items-center">
            <img
              className="md:size-1/2 size-3/4 mb-3"
              src={contentWriting}
              alt="contentWriting"
            />
            <h3 className="text-2xl font-semibold mb-3">Content Writing</h3>
            <p className="text-gray-600 mb-4">
              High-quality, SEO-optimized content to boost your website traffic
              and engage your audience.
            </p>
            <a
              href="/contact"
              className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Learn More
            </a>
          </div>

          {/* Service 2 */}
          <div className="px-4 py-6 rounded-sm shadow-md flex flex-col items-center">
            <img
              className="md:size-1/2 size-3/4 mb-3"
              src={webDesiging}
              alt="webDesiging"
            />
            <h3 className="text-2xl font-semibold mb-3">Web Design</h3>
            <p className="text-gray-600 mb-4">
              Custom, responsive websites tailored to your brand’s identity and
              user experience.
            </p>
            <a
              href="/contact"
              className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Learn More
            </a>
          </div>

          {/* Service 3 */}
          <div className="px-4 py-6 rounded-sm shadow-md flex flex-col items-center">
            <img
              className="md:size-1/2 size-3/4 mb-3"
              src={digitalMarketing}
              alt="digitalMarketing"
            />
            <h3 className="text-2xl font-semibold mb-3">Digital Marketing</h3>
            <p className="text-gray-600 mb-4">
              Effective marketing strategies that drive conversions and grow
              your online presence.
            </p>
            <a
              href="/contact"
              className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Learn More
            </a>
          </div>

          {/* Service 4 */}
          <div className="px-4 py-6 rounded-sm shadow-md flex flex-col items-center">
            <img className="md:size-1/2 size-3/4 mb-3" src={seo} alt="seo" />
            <h3 className="text-2xl font-semibold mb-3">SEO Optimization</h3>
            <p className="text-gray-600 mb-4">
              Boost your website's visibility on search engines with our expert
              SEO services.
            </p>
            <a
              href="/contact"
              className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Learn More
            </a>
          </div>

          {/* Service 5 */}
          <div className="px-4 py-6 rounded-sm shadow-md flex flex-col items-center">
            <img
              className="md:size-1/2 size-3/4 mb-3"
              src={socialMedia}
              alt="socialMedia"
            />
            <h3 className="text-2xl font-semibold mb-3">
              Social Media Management
            </h3>
            <p className="text-gray-600 mb-4">
              Build and manage your social media presence to connect with your
              audience and grow your brand.
            </p>
            <a
              href="/contact"
              className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Learn More
            </a>
          </div>

          {/* Service 6 */}
          <div className="px-4 py-6 rounded-sm shadow-md flex flex-col items-center">
            <img
              className="md:size-1/2 size-3/4 mb-3"
              src={graphicDesign}
              alt="graphicDesign"
            />
            <h3 className="text-2xl font-semibold mb-3">Graphic Design</h3>
            <p className="text-gray-600 mb-4">
              Stunning graphic design services to create logos, banners, and
              visuals that resonate with your brand.
            </p>
            <a
              href="/contact"
              className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
