import Banner from "../../components/Banner/Banner";
import BlogPage from "../../components/BlogPage/BlogPage";

export default function Home() {
  return (
    <div>
      <Banner />
      <div className="max-w-7xl mx-auto">
        <BlogPage />
      </div>
    </div>
  );
}
