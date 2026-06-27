import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | Industrial Bearing & Chain Centre",
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-slate-50 section-padding">
      <div className="max-w-2xl w-full text-center px-4">
        {/* Large 404 text */}
        <h1 className="text-8xl sm:text-9xl font-black text-[#0B3D91] opacity-20 mb-4 select-none">
          404
        </h1>
        
        {/* Message */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#072a6b] mb-4">
          Oops! That page is missing.
        </h2>
        <p className="text-slate-600 text-lg mb-8 max-w-lg mx-auto">
          The industrial spare part or page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        {/* Quick Links */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/" 
            className="btn-navy py-3.5 px-8 flex items-center justify-center gap-2 rounded-xl"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            Back to Home
          </Link>
          
          <Link 
            href="/products" 
            className="bg-white border-2 border-[#0B3D91] text-[#0B3D91] hover:bg-[#0B3D91] hover:text-white font-bold py-3.5 px-8 flex items-center justify-center gap-2 rounded-xl transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="7" height="7"></rect>
              <rect x="14" y="3" width="7" height="7"></rect>
              <rect x="14" y="14" width="7" height="7"></rect>
              <rect x="3" y="14" width="7" height="7"></rect>
            </svg>
            View Products
          </Link>
        </div>

        {/* Contact info block */}
        <div className="mt-12 p-6 bg-white rounded-2xl shadow-sm border border-slate-200 inline-block text-left max-w-md w-full">
          <p className="text-[#0B3D91] font-bold text-sm mb-2">Need immediate assistance?</p>
          <a href="tel:+917349049883" className="flex items-center gap-3 text-slate-700 hover:text-[#0B3D91] transition-colors mb-2">
            <div className="bg-[#e8f0fe] p-2 rounded-full text-[#0B3D91]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.16 6.16l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
            </div>
            <span className="font-semibold">+91 73490 49883</span>
          </a>
          <a href="https://wa.me/917349049883" className="flex items-center gap-3 text-slate-700 hover:text-[#25D366] transition-colors">
            <div className="bg-[#dcf8c6] p-2 rounded-full text-[#25D366]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
              </svg>
            </div>
            <span className="font-semibold text-sm whitespace-nowrap">WhatsApp Us</span>
          </a>
        </div>
      </div>
    </div>
  );
}
