import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    <section className="py-3 px-3 md:px-[10%] space-y-3 flex flex-col md:flex-row items-center md:items-start gap-10">
      <Image
        src={`/about.jpg`}
        alt="picture"
        width={100}
        height={100}
        className="h-[50vh] md:h-[40vh] w-60 object-cover rounded-xl"
      />
      <article className="space-y-5">
        <div>
          <h2 className="font-medium text-lg text-[#D9B899]">About</h2>
          <p className="text-sm md:text-base text-gray-600">
            I am Phinehas Osei-Tutu. I am a graduate of Kwame Nkrumah University
            of Science and Technology, Kumasi, where I studied Computer
            Engineering for my undergrad and currently on a contract with
            SeveighTech. My studies made me to have passion for software
            engineering and that encouraged me to get into frontend development.
            This helped me to gain valuable coding experience in programming
            language such as JavaScript utilizing its framework, React and
            TailwindCSS to build intuitive user interface. My resilient,
            dependable and problem solving skills set me apart from the rest.
            With my coding experience and collaborative nature, I can work with
            UI/UX Designers and Backend Developers to build amazing and high
            performance software. If you are looking for frontend developer as a
            Freelancer, a Contractor, a full-time pr part-time role, do not
            hesitate to contact me. I can&apos;t wait to put my coding skills to
            use to deliver great software.
          </p>
        </div>
        <div>
          <h2 className="font-medium text-lg text-[#D9B899]">
            Skills and Technology Stack
          </h2>
          <p className="text-sm md:text-base text-gray-600">
            I utilize several tools and technologies in my work that enhance my
            productivity and streamline my processes. I often rely on a variety
            of programming languages to build efficient and scalable
            applications. My workflow is supported by frameworks that help me
            develop applications faster and more effectively.
          </p>
          <p className="text-sm md:text-base text-gray-600">
            Skills: HTML, CSS, JavaScript, React.js, TailwindCSS, Git, GitHub,
            Redux, Next.js, TypeScript, Node.js, Express.js, MongoDB, Web
            Responsiveness, Frontend Development
          </p>
        </div>
        <div className="space-y-2 text-sm md:text-base">
          <div>
            <h2 className="font-medium text-lg text-[#D9B899]">Education</h2>
            <p className="text-sm md:text-base text-gray-600 font-medium">
              Pro-Dev Frontend Development
            </p>
            <p className="text-gray-500">ALX Africa.</p>
            <p className="text-gray-500">
              Course Relevant course: Professional Foundation, and Software
              Engineering
            </p>
          </div>

          <div>
            <p className="text-sm md:text-base text-gray-600 font-medium">
              BSc. Computer Engineering (FIRST CLASS HONOR)
            </p>
            <p className="text-gray-500">Kwame Nkrumah University of Science and Technology, Kumasi</p>
            <p className="text-gray-500">Relevant course: Software Engineering</p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default AboutPage;
