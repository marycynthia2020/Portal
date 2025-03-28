
import React from "react";

const partners = [
  { name: "Binance", logo: "https://framerusercontent.com/images/plBVM7d4mVUJ8AnkmkUS7AMZw.png" },
  { name: "Sui", logo: "https://framerusercontent.com/images/xPrVFRgV83YKX1AZVhp9mr8Bmls.png" },
  { name: "Immutable", logo: "https://framerusercontent.com/images/vAPIUd3STNK9OTWNw5TlFZFK7Vs.png" },
  { name: "WME", logo: "https://framerusercontent.com/images/QYWuFveUJs7wc30c6WPbuxltUL0.png" },
  { name: "MSO", logo: "https://framerusercontent.com/images/r2a090FjAVCGDWSWezhRnyh2Y.png" },
  { name: "Magic Eden", logo: "https://framerusercontent.com/images/3kSiHWP8ZKMAZ6s9Mwy9clYgo3s.png" },
];

const FBPartnersCard = () => {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="bg-[#F6F6F6] px-5 pb-3 rounded-lg shadow-sm flex flex-col space-y-10"
            >
              <div className="flex flex-col-reverse items-start space-y-4 w-full ">
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="h-20 w-20 object-contain rounded-full"
                />
                <span className="text-sm text-gray-600 font-medium pb-10">{partner.name}</span>
              </div>
              <a
                href="#"
                className="inline-flex items-center text-sm gap-2 font-medium text-black bg-white px-3 py-2 rounded-full w-fit"
              >
                Visit
                <svg className="w-6 h-6 ml-1 bg-black text-white rounded-full" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M7 17L17 7M17 7H7M17 7V17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FBPartnersCard;