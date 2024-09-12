export default function Modal({ onClose, isModalOpen }) {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${
        isModalOpen ? "" : "hidden"
      }`}
    >
      <div className="modal-container">
        <div className="bg-indigo-700 text-center p-5 h-96 lg:w-[500px] rounded shadow-md">
          {/* modal content */}
          <h2 className="text-xl font-semibold mb-4 mt-6 uppercase">
            Please Login Here!
          </h2>
          <form className="px-4">
            <div className="mb-4">
              <input
                className="w-full rounded-md border bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[blue] focus: shadow-md"
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email address"
              />
            </div>
            <div className="mb-4">
              <input
                className="w-full rounded-md border bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[blue] focus: shadow-md"
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
              />
            </div>
            <div className="mt-4">
              <button className="hover:shadow-md rounded-md bg-blue-400 hover:bg-orange-600 py-3 px-8 text-base font-semibold outline-none">
                Login
              </button>
            </div>
          </form>
          <button
            className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-3 px-8 rounded"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
