import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              <a href="/">PortiBuilder</a>
            </h3>
            <p>
              PortiBuilder makes it easy to create and manage your professional
              portfolio. Showcase your skills and experience with ease.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <Link to="/features" className="hover:text-gray-400">
                  Features
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/pricing" className="hover:text-gray-400">
                  Pricing
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="hover:text-gray-400">
                  Contact Us
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/faq" className="hover:text-gray-400">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p>
              Email:{" "}
              <a
                href="mailto:support@portibuilder.com"
                className="hover:text-gray-400"
              >
                support@portibuilder.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href="tel:+233243999631" className="hover:text-gray-400">
                +233 24 399 9631
              </a>
            </p>
            <p>Address: 18 Mboumou St, Accra, Ghana</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p>
            &copy; {new Date().getFullYear()} <a href="/">PortiBuilder</a>. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
