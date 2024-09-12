import { useEffect, useState } from "react";
import BlogCard from "../BlogCard/BlogCard";
import Pagination from "../Pagination/Pagination";
import CategorySelection from "../CategorySelection/CategorySelection";
import SideBar from "../SideBar/SideBar";

export default function BlogPage() {
  const [blogs, setBlog] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 12; // blogs per page

  const [selectedCategory, setSelectedCategory] = useState(null);

  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    async function fetchBlogs() {
      let url = `http://localhost:5000/blogs?page=${currentPage}&limit=${pageSize}`;

      //filter by category
      if (selectedCategory) {
        url += `&category=${selectedCategory}`;
      }
      console.log(url, "url");
      const response = await fetch(url);
      const data = await response.json();
      setBlog(data);
    }

    fetchBlogs();
  }, [currentPage, pageSize, selectedCategory]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    setActiveCategory(category);
  };

  return (
    <div>
      {/* category section */}
      <div>
        <CategorySelection
          blogs={blogs}
          onCategoryChange={handleCategoryChange}
          selectedCategory={selectedCategory}
          activeCategory={activeCategory}
        />
      </div>
      {/* blogCards section */}
      <div className="flex flex-col lg:flex-row gap-12">
        <BlogCard
          blogs={blogs}
          selectedCategory={selectedCategory}
          currentPage={currentPage}
          pageSize={pageSize}
        />
        {/* sidebar component */}
        <div>
          <SideBar />
        </div>
      </div>
      {/* pagination section */}
      <div>
        <Pagination
          onPageChange={handlePageChange}
          currentPage={currentPage}
          blogs={blogs}
          pageSize={pageSize}
        />
      </div>
    </div>
  );
}
