import BlogPage from "../../components/BlogPage/BlogPage";

export default function Blogs() {
  return (
    <div>
      <div className="px-4 py-32 bg-black text-white text-center">
        <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">
          Blogs page
        </h1>
        <p className="text-gray-100 lg:w-3/5 mx-auto mb-5">
          This is the Blogs page. You can see all the blog posts here.
        </p>
      </div>

      {/* all blogs container */}
      <div className="max-w-7xl mx-auto">
        <BlogPage />
      </div>
    </div>
  );
}
