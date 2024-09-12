export default function CategorySelection({
  blogs,
  onCategoryChange,
  selectedCategory,
  activeCategory,
}) {
  const categoryList = blogs.map((blog, index) => {
    return blog["category"];
  });
  const uniqueCategories = [...new Set(categoryList)];
  //   console.log(uniqueCategories, "uniqueCategories");
  return (
    <div className="px-4 mb-8 py-2 flex items-center gap-4 flex-wrap">
      <button
        onClick={() => onCategoryChange(null)}
        className={`shadow-sm px-4 py-2 cursor-pointer ${
          activeCategory ? "" : "active-category"
        }`}
      >
        All
      </button>
      <ul className="flex items-center gap-4 flex-wrap">
        {uniqueCategories.map((category) => (
          <li
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`shadow-sm px-4 py-2 cursor-pointer ${
              activeCategory === category ? "active-category" : ""
            }`}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}
