// components/WhyCodoxy.js
import Image from "next/image";

export default function WhyCodoxy() {
  return (
    <section className="py-30 px-4 md:px-12 lg:px-20 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div className="max-w-lg mx-auto ">
          <h1 className="text-5xl font-bold text-gray-900 mb-9">Why Codoxy?</h1>
          <p className="text-gray-600 mb-4">
            Codoxy Solutions offers seamless staff augmentation and frontend
            development, aligning with your business goals. Our experts provide
            cutting-edge technology and unmatched expertise.
          </p>
          <a
            href="/contact"
            className="text-orange-600 font-semibold flex items-center gap-2 hover:underline"
          >
            CONTACT US <span>&#8250;</span>
          </a>
        </div>

        {/* Right Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Box 1 */}
          <div className="border-r border-gray-500 pb-6 mb-6">
            <Image
              src="/Experience.jpg"
              alt="Expertise"
              width={80}
              height={80}
              className="mb-0"
            />
            <h3 className="font-bold text-xl mb-3">Expertise and Experience</h3>
            <p className="text-gray-600 text-sm">
              Codoxy’s certified IT professionals bring extensive implementation
              experience and expertise to ensure efficient project delivery
            </p>
          </div>

          {/* Box 2 */}
          <div>
            <Image
              src="/client-centric.png"
              alt="Client-Centric"
              width={100}
              height={100}
              className="mb-0"
            />
            <h3 className="font-bold text-xl mb-2">Client-Centric Approach</h3>
            <p className="text-gray-600 text-sm">
              We keep our client’s at the center of our business and align the
              talent with vision of our client
            </p>
          </div>  

          {/* Box 3 */}              
          <div className="border-t border-gray-500 pr-6">
            <Image
              src="/Commitment.png"
              alt="Commitment"
              width={80}
              height={80}
              className="mb-0"
            />
            <h3 className="font-bold text-xl mb-2">Commitment to Excellence</h3>
            <p className="text-gray-600 text-sm">
              Codoxy is committed to deliver high-quality services with
              transparency and accountability
            </p>
          </div>

          
          
        </div>
      </div>
    </section>
  );
}
