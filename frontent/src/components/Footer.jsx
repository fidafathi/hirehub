function Footer() {
  return (

    <footer className="bg-black text-white py-10 mt-10">

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

        <div>

          <h1 className="text-3xl font-bold mb-2">
            HireHub
          </h1>

          <p className="text-gray-400">
            Find jobs. Build your future.
          </p>

        </div>

        <div className="flex gap-6 mt-6 md:mt-0">

          <a href="#">Home</a>

          <a href="#">Jobs</a>

          <a href="#">Login</a>

          <a href="#">Signup</a>

        </div>

      </div>

      <div className="text-center text-gray-500 mt-8">

        © 2026 HireHub. All rights reserved.

      </div>

    </footer>

  );
}

export default Footer;