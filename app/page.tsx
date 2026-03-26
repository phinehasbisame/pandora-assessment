import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="py-3 md:py-10 px-3 md:px-[10%]">
      <section className="flex flex-col md:flex-row items-center gap-5 md:gap-10 md:h-[70vh]">
        <Image
          src="/home-banner-2.webp"
          alt="banner"
          width={100}
          height={100}
          className="w-full h-[40vh] md:h-3/4 md:w-full rounded-xl md:rounded-full"
        />
        <aside className="space-y-5">
          <h2 className="text-base md:text-4xl text-[#D9B899]">
            MJ Pandora Payment System
          </h2>
          <p className="text-sm md:text-xl text-gray-500">
            View and track all transactions in one place with a clear and
            organized payment history. Monitor statuses, review details, and
            stay informed with accurate, up-to-date records designed for easy
            navigation and quick insights.
          </p>
          <nav className="flex gap-3">
            <Link
              href={`/payment-history`}
              className="bg-[#D9B899] p-2 text-white rounded-md font-light text-xs md:text-sm"
            >
              Proceed to Payment History
            </Link>
            <Link
              href={`/about`}
              className="bg-[#9a826b] p-2 text-white rounded-md font-light text-xs md:text-sm"
            >
              About developer
            </Link>
          </nav>
        </aside>
      </section>
    </div>
  );
};

export default HomePage;
