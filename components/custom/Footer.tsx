function Footer() {
  return (
    <footer className="bg-gray-300 text-gray-800 py-12 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="text-center lg:text-left mb-8 lg:mb-0">
          <p className="text-lg font-semibold mb-4">Stay Connected</p>
          <div className="flex justify-center lg:justify-start mb-4">
            <a
              href="#"
              className="mr-4 hover:text-gray-700 transition duration-300"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="mr-4 hover:text-gray-700 transition duration-300"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="hover:text-gray-700 transition duration-300">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <p className="text-sm">
            Follow us on social media for updates and promotions!
          </p>
        </div>
        <div className="text-center lg:text-right">
          <p className="text-lg font-semibold mb-4">Contact Us</p>
          <p className="mb-2">Email: info@example.com</p>
          <p className="mb-2">Phone: +1 (123) 456-7890</p>
          <p>Address: 123 Grey Street, City, Country</p>
        </div>
      </div>
      <div className="border-t border-gray-400 mt-8 pt-4 text-center">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
        <p className="mt-2 text-sm">
          Designed with <i className="fas fa-heart text-red-500"></i> by Your
          Company
        </p>
      </div>
    </footer>
  );
}

export default Footer;
