import { BiMailSend } from "react-icons/bi";
import {
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";

const Contact = () => {
  return (
    <div className="flex items-center justify-center min-h-screen text-white px-6">
      <div className="text-center p-8 max-w-4xl w-full">
        {/* Header Section */}
        <h2 className="text-3xl font-bold mb-2">MY CONTACT</h2>
        {/* <p className="text-blue-400 text-lg mb-8">Let&apos;s keep in touch</p> */}
          {/* Email */}
          <div className="flex flex-col items-center">
            <BiMailSend className="h-12 w-12 text-gray-200 mb-2" />
            <h3 className="font-semibold text-xl">Email</h3>
            <p className="text-gray-400">sentotalibasah27@gmail.com</p>
          </div>

          {/* Address */}
          <div className="flex flex-col items-center">
            <HiLocationMarker className="h-12 w-12 text-red-500 mb-2" />
            <h3 className="font-semibold text-xl">ADDRESS</h3>
            <p className="text-gray-400">KELAPA GADING</p>
            <p className="text-gray-400">JAKARTA UTARA</p>
          </div>

          {/* Github */}
          <div className="flex flex-col items-center">
            <FaGithub className="h-12 w-12 text-black mb-2" />
            <h3 className="font-semibold text-xl">Github</h3>
            <a
              href="https://github.com/sentotAB"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 text-gray-400"
            >
              @sentotAB
            </a>
          </div>
        {/* WhatsApp */}
          <div className="flex flex-col items-center">
            <FaWhatsapp className="h-12 w-12 text-green-400 mb-2" />
            <h3 className="font-semibold text-xl">WhatsApp</h3>
            <p className="text-gray-400">0859-2058-7936</p>
          </div>
        </div>
      </div>
  );
};

export default Contact;
