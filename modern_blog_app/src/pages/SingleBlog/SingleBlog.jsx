import { FaClock, FaUser } from "react-icons/fa6";
import { useLoaderData } from "react-router-dom";
import SideBar from "../../components/SideBar/SideBar";

export default function SingleBlog() {
  const data = useLoaderData();
  const {
    title,
    image,
    category,
    author,
    published_date,
    reading_time,
    content,
  } = data[0];
  return (
    <div>
      <div className="px-4 py-32 bg-black text-white text-center">
        <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">
          Single Blog page
        </h1>
      </div>
      <div className="max-w-7xl mx-auto my-12 flex flex-col gap-12 md:flex-row">
        <div className="lg:w-3/4 mx-auto ml-4">
          <div>
            <img src={image} alt={title} className="w-full mx-auto rounded" />
          </div>
          <h2 className="text-3xl mt-8 font-bold mb-4 text-blue-500 cursor-pointer">
            {title}
          </h2>
          <p className="mb-3 text-gray-600">
            <FaUser className="inline-flex items-center mr-2" /> {author} |{" "}
            {published_date}
          </p>

          <p className="mb-3 text-gray-600">
            <FaClock className="inline-flex items-center mr-2" /> {reading_time}
          </p>
          <p className="text-base text-gray-500 mb-6">{content}</p>
          <div className="mb-3 text-gray-600">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consectetur facilis officiis minus alias quasi voluptas itaque
              iste reprehenderit modi dolores magni quam, earum praesentium quod
              omnis sapiente, blanditiis beatae rerum!
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consectetur facilis officiis minus alias quasi voluptas itaque
              iste reprehenderit modi dolores magni quam, earum praesentium quod
              omnis sapiente, blanditiis beatae rerum!
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consectetur facilis officiis minus alias quasi voluptas itaque
              iste reprehenderit modi dolores magni quam, earum praesentium quod
              omnis sapiente, blanditiis beatae rerum!
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consectetur facilis officiis minus alias quasi voluptas itaque
              iste reprehenderit modi dolores magni quam, earum praesentium quod
              omnis sapiente, blanditiis beatae rerum!
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consectetur facilis officiis minus alias quasi voluptas itaque
              iste reprehenderit modi dolores magni quam, earum praesentium quod
              omnis sapiente, blanditiis beatae rerum!
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consectetur facilis officiis minus alias quasi voluptas itaque
              iste reprehenderit modi dolores magni quam, earum praesentium quod
              omnis sapiente, blanditiis beatae rerum!
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consectetur facilis officiis minus alias quasi voluptas itaque
              iste reprehenderit modi dolores magni quam, earum praesentium quod
              omnis sapiente, blanditiis beatae rerum!
            </p>
            <br />
          </div>
        </div>
        <div className="lg:w-1/2">
          <SideBar />
        </div>
      </div>
    </div>
  );
}
