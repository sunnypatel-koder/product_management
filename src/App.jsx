import React, { useEffect, useState } from "react";
import Modal from "./components/Modal";

const App = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    // Optionally, you can also display the selected file name
    console.log(selectedFile);
  };

  const items = [
    {
      id: 8,
      category: "JavaScript",
      image:
        "https://images.pexels.com/photos/14737664/pexels-photo-14737664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      category: "JavaScript",
      image:
        "https://images.pexels.com/photos/14267606/pexels-photo-14267606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    { id: 4, category: "JavaScript", image: "/node-js.png" },
    { id: 5, category: "JavaScript", image: "/express-js.png" },
    { id: 6, category: "JavaScript", image: "/next-js.png" },
    { id: 7, category: "JavaScript", image: "/angular-js.png" },
    { id: 10, category: "JavaScript", image: "/react-native.png" },
    { id: 9, category: "JavaScript", image: "/redux-js.png" },
    { id: 2, category: "PHP", image: "/php.png" },
    { id: 14, category: "PHP", image: "/wordpress.png" },
    { id: 15, category: "PHP", image: "/laravel.png" },
    { id: 11, category: "Databases", image: "/my-sql.png" },
    { id: 12, category: "Databases", image: "/mongo-db.png" },
    { id: 13, category: "Databases", image: "/postgre-sql.png" },
    { id: 1, category: "Java", image: "/java.png" },
    { id: 18, category: "Java", image: "/spring.png" },
    { id: 16, category: "Python", image: "/python.jfif" },
    { id: 17, category: "Python", image: "/django.png" },
    { id: 19, category: "CSS", image: "/css.png" },
    { id: 20, category: "CSS", image: "/sass.png" },
    { id: 21, category: "CSS", image: "/bootstrap.png" },
    { id: 22, category: "CSS", image: "/tailwindcss.png" },
  ];

  const [selectedFilter, setSelectedFilter] = useState("All");
  const [filteredItems, setFilteredItems] = useState(items);

  const handleFilter = (event) => {
    const selectedValue = event.target.value || event.target.innerText;
    setSelectedFilter(selectedValue);
  };

  useEffect(() => {
    if (selectedFilter === "All") {
      setFilteredItems(items); // Show all items
    } else {
      const filtered = items.filter((item) => item.category === selectedFilter);
      setFilteredItems(filtered); // Show only items of selected category
    }
  }, [selectedFilter, items]);

  return (
    <>
      <button
        data-drawer-target="cta-button-sidebar"
        data-drawer-toggle="cta-button-sidebar"
        aria-controls="cta-button-sidebar"
        type="button"
        class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        onClick={toggleSidebar}
      >
        <span class="sr-only">Open sidebar</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="cta-button-sidebar"
        class={`fixed left-0 z-40 w-64 h-screen sm:top-0 top-[3.97rem] transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-label="Sidebar"
      >
        <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul class="space-y-2 font-medium">
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span class="ms-3">Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span class="ms-3">Category</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      <div class="px-4 pb-4 sm:ml-64">
        <div class="p-4 dark:border-gray-700">
          <div class="grid grid-cols-2 gap-4 mb-4">
            <div className="flex items-center   sm:justify-normal  justify-center border-b sm:px-6 h-24  dark:bg-gray-800 relative">
              <label htmlFor="fileInput" className="cursor-pointer pr-4">
                <img
                  className="h-14 1-14"
                  src="/select_img.png"
                  alt="select img"
                />
              </label>
              <input
                id="fileInput"
                type="file"
                className="hidden"
                onChange={handleFileChange}
              />
              <div
                className="w-16 h-16 border border-gray-300"
                style={{ display: file ? "block" : "none" }}
              >
                {file && (
                  <img
                    src={URL.createObjectURL(file)}
                    alt="Selected File"
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            </div>

            <div class="flex items-center  sm:justify-normal  justify-center sm:pl-6 h-24 border-b dark:bg-gray-800 relative">
              <select className="h-10 px-3 outline-none bg-gray-800/75 rounded text-[#ffffff] font-semibold">
                <option>Select Category</option>
                <option>Select Here</option>
              </select>
            </div>

            <div class="flex items-center col-span-2 sm:px-6 justify-center border-b sm:justify-normal h-24   dark:bg-gray-800">
              <button className="bg-teal-500 hover:bg-teal-600 text-white p-2 rounded">
                Upload Now!
              </button>
            </div>
          </div>

          <div class="flex items-center sm:px-6 mb-4  dark:bg-gray-800">
            {/* <p class="text-2xl text-gray-400 dark:text-gray-500">
              <svg
                class="w-3.5 h-3.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 1v16M1 9h16"
                />
              </svg>
            </p> */}
            <h1 className="text-2xl   font-semibold">
              Uploaded Images by Category
            </h1>
          </div>

          <div class="grid grid-cols-1 gap-4 mb-4">
            <div class="flex items-center sm:px-6  sm:justify-normal rounded py-3 dark:bg-gray-800">
              {/* <p class="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  class="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p> */}
              <select
                onChange={handleFilter}
                value={selectedFilter}
                className="block xl:hidden w-52 px-3 py-2 outline-none border-none bg-gray-800/75 text-white font-semibold"
              >
                <option value="All">All</option>
                <option value="Databases">Databases</option>
                <option value="JavaScript">JavaScript</option>
                <option value="Java">Java</option>
                <option value="PHP">PHP</option>
                <option value="Python">Python</option>
              </select>
              <ul className="hidden xl:flex gap-4">
                <li
                  onClick={handleFilter}
                  className={` rounded-md py-2 px-2 cursor-pointer ${
                    selectedFilter === "All"
                      ? "bg-teal-500/95 hover:bg-teal-600 text-white"
                      : "bg-gray-600/20 hover:bg-gray-600/30"
                  }`}
                >
                  All
                </li>
                <li
                  onClick={handleFilter}
                  className={`bg-gray-600/20 rounded-md py-2 px-2 cursor-pointer ${
                    selectedFilter === "Databases"
                      ? "bg-teal-500/95 text-white"
                      : ""
                  }`}
                >
                  Databases
                </li>
                <li
                  onClick={handleFilter}
                  className={`bg-gray-600/20 rounded-md py-2 px-2 cursor-pointer ${
                    selectedFilter === "Java" ? "bg-teal-500/95 text-white" : ""
                  }`}
                >
                  Java
                </li>

                <li
                  onClick={handleFilter}
                  className={`bg-gray-600/20 rounded-md py-2 px-2 cursor-pointer ${
                    selectedFilter === "PHP" ? "bg-teal-500/95 text-white" : ""
                  }`}
                >
                  PHP
                </li>
                <li
                  onClick={handleFilter}
                  className={`bg-gray-600/20 rounded-md py-2 px-2 cursor-pointer ${
                    selectedFilter === "Python"
                      ? "bg-teal-500/95 text-white"
                      : ""
                  }`}
                >
                  Python
                </li>
              </ul>
            </div>
          </div>
          <div className="flex sm:px-6 gap-7 flex-wrap ">
            {filteredItems.map((item) => (
              <a key={item.id} href={item.link}>
                <div className="bg-white rounded h-28  overflow-hidden">
                  <img
                    className="object-contain h-full w-full cursor-pointer"
                    src={item.image}
                    alt={item.category}
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <Modal />
    </>
  );
};

export default App;
