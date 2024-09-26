function Footer(){
    return(
        <div className="bg-white text-black border-t mt-5 h-full">
  <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div className="flex flex-col md:flex-row justify-between">
      <div className="mb-8 md:mb-0">
        <h2 className="text-2xl font-bold mb-4">Funiro.</h2>
        <address className="not-italic text-gray-500">
          400 University Drive Suite 200 Coral Gables,
          <br />
          FL 33134 USA
        </address>
      </div>
      <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-16">
        <div>
          <h3 className="text-gray-500 mb-4">Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-black">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-black">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="text-black">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-black">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-gray-500 mb-4">Help</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-black">
                Payment Options
              </a>
            </li>
            <li>
              <a href="#" className="text-black">
                Returns
              </a>
            </li>
            <li>
              <a href="#" className="text-black">
                Privacy Policies
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-gray-500 mb-4">Newsletter</h3>
          <form className="flex space-x-2">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="border-b border-black focus:outline-none"
            />
            <button type="submit" className="text-black font-bold">
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
    </div>
    <div className="mt-12 border-t border-gray-200 pt-4">
      <p className="text-gray-500 text-sm">2023 funiro. All rights reverved</p>
    </div>
  </footer>
</div>

    )
}

export default Footer