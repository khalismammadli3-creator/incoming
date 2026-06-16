import Link from 'next/link'
import { destinations } from '@/lib/destinations'
import FooterNewsletterForm from './FooterNewsletterForm'

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="2" x2="12" y2="22" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2 C6 6 6 18 12 22 C18 18 18 6 12 2" />
                <path d="M12 7 L14 12 L12 17 L10 12 Z" fill="currentColor" />
              </svg>
              <span className="font-bold text-lg">Azerbaijan Explorer</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Your gateway to the Land of Fire. We craft authentic travel experiences across Azerbaijan's most breathtaking destinations.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              <a href="#" aria-label="Facebook" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a href="#" aria-label="YouTube" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.54 6.42a2.78 2.78 0 00-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.4 19.54C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 001.94-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
                  <polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
                </svg>
              </a>
            </div>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="font-semibold text-white mb-4 uppercase tracking-wider text-sm">Destinations</h3>
            <ul className="space-y-2">
              {destinations.slice(0, 5).map((dest) => (
                <li key={dest.slug}>
                  <Link href={`/${dest.slug}`} className="text-gray-400 text-sm hover:text-primary transition-colors">
                    {dest.name}
                  </Link>
                </li>
              ))}
              {destinations.slice(5).map((dest) => (
                <li key={dest.slug}>
                  <Link href={`/${dest.slug}`} className="text-gray-400 text-sm hover:text-primary transition-colors">
                    {dest.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-4 uppercase tracking-wider text-sm">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 text-sm hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-400 text-sm hover:text-primary transition-colors">Contact</Link></li>
              <li><a href="#" className="text-gray-400 text-sm hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 text-sm hover:text-primary transition-colors">Press</a></li>
              <li><a href="#" className="text-gray-400 text-sm hover:text-primary transition-colors">Careers</a></li>
            </ul>
            <h3 className="font-semibold text-white mt-6 mb-4 uppercase tracking-wider text-sm">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 text-sm hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-400 text-sm hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 text-sm hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 text-sm hover:text-primary transition-colors">Refund Policy</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-white mb-4 uppercase tracking-wider text-sm">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">Get travel tips and exclusive deals delivered to your inbox.</p>
            <FooterNewsletterForm />
            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@azerbaijanexplorer.com
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +994 50 123 45 67
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Azerbaijan Explorer. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Made with ❤️ for the Land of Fire 🔥
          </p>
        </div>
      </div>
    </footer>
  )
}
