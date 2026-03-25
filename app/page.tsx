import Image from "next/image";

const HomePage = () => {
  return (
    <div className="p-5">
      <section>
        <aside>
          <Image src="/banner-2.webp" alt="banner" width={100} height={100} className="w-full h-[70vh] md:w-1/3 rounded-xl" />
        </aside>
        <h2 className="text-sm md:text-base">MJ Pandora Payment System</h2>
        <p className="text-xs md:text-text-sm"> An extraordinary system to </p>
      </section>
    </div>
  );
};

export default HomePage;
