import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#EFC41A] text-gray-900">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="text-3xl font-black tracking-tight">
                HomeRun
              </span>
            </div>
            <p className="text-gray-900/80 mb-8 max-w-sm font-medium leading-relaxed">
              Serving Bangalore with love ❤️ <br />
              Construction & Interior Materials delivered in minutes.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-black/5 rounded-full flex items-center justify-center hover:bg-black/10 transition-colors">
                <Instagram className="w-5 h-5 text-gray-900" />
              </a>
              <a href="#" className="w-10 h-10 bg-black/5 rounded-full flex items-center justify-center hover:bg-black/10 transition-colors">
                <Facebook className="w-5 h-5 text-gray-900" />
              </a>
              <a href="#" className="w-10 h-10 bg-black/5 rounded-full flex items-center justify-center hover:bg-black/10 transition-colors">
                <Twitter className="w-5 h-5 text-gray-900" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 uppercase tracking-wider text-gray-900/90">Company</h4>
            <ul className="space-y-4 font-medium">
              <li><a href="#" className="hover:text-black hover:translate-x-1 transition-all inline-block">About Us</a></li>
              <li><a href="#" className="hover:text-black hover:translate-x-1 transition-all inline-block">Careers</a></li>
              <li><a href="#" className="hover:text-black hover:translate-x-1 transition-all inline-block">Press</a></li>
              <li><a href="#" className="hover:text-black hover:translate-x-1 transition-all inline-block">Partner with us</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-lg mb-6 uppercase tracking-wider text-gray-900/90">Resources</h4>
            <ul className="space-y-4 font-medium">
              <li><a href="#" className="hover:text-black hover:translate-x-1 transition-all inline-block">Blog</a></li>
              <li><a href="#" className="hover:text-black hover:translate-x-1 transition-all inline-block">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-black hover:translate-x-1 transition-all inline-block">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-black hover:translate-x-1 transition-all inline-block">Shipping Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6 uppercase tracking-wider text-gray-900/90">Contact</h4>
            <ul className="space-y-4 font-medium">
              <li className="flex items-start gap-3">
                <MapPin className="w-6 h-6 flex-shrink-0 mt-1" />
                <span>Indiranagar, Bangalore, Karnataka, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-6 h-6 flex-shrink-0" />
                <span>+91 99999 99999</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-6 h-6 flex-shrink-0" />
                <span>support@homerun.co</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-black/10 mt-16 pt-8 text-center text-sm font-semibold opacity-75">
          <p>© {new Date().getFullYear()} HomeRun. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
