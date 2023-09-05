const Footer = () => {
  return (
    <footer className="bg-[#AED6EF] mt-[100px] text-black py-8 max-xsm:text-center">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between mb-8">
          <div className="w-full w- max-w-xs mb-6 md:mb-0">
            <img src="/logo.png" alt="FastKar Logo" className="h-[100px] mb-2 max-xsm:mx-auto" />
            <p className="text-black">FastKar: Your Safe and Affordable Taxi Booking Solution.</p>
          </div>
          <div className="w-full max-w-xs mb-6 md:mb-0">
            <h2 className="text-lg font-semibold mb-4">Sitemap</h2>
            <ul className="text-black">
              <li><a href="#home">Home</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#contact-us">Contact Us</a></li>
            </ul>
          </div>
          <div className="w-full max-w-xs mb-6 md:mb-0">
            <h2 className="text-lg font-semibold mb-4">Support</h2>
            <ul className="text-black">
              <li><a href="#">Live Support</a></li>
              <li><a href="#">Help</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="w-full max-w-xs">
            <h2 className="text-lg font-semibold mb-4">Contact</h2>
            <p className="text-black">123 Street, City</p>
            <p className="text-black">Phone: +123 456 789</p>
            <p className="text-black">Email: info@fastkar.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
