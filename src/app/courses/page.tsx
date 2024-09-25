import Image from "next/image";
import Link from "next/link";
import React from "react";
import Footer from "../footer/page";

function Courses() {
  return (
    <div>
      <div className="font-[500] text-yellow-400 text-center mt-[50px]">
        <h1 className="text-xl">Find a Course</h1>
        <h1 className="md:text-4xl text-3xl text-white pt-[12px]">
          Featured Courses
        </h1>
      </div>
      <div className="h-[20px] w-[200px] mt-[20px] border-t-4 border-t-yellow-400 rounded-t-sm mx-auto"></div>

      <div className="flex justify-center items-center mt-[60px]">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 place-content-center gap-6">
          <div className="h-[430px] w-[320px]  bg-indigo-200 bg-opacity-20 p-[25px]">
            <Image
              src={"/pythone.jpeg"}
              alt="python"
              width={300}
              height={300}
              className="h-[180px] w-full"
            />
            <h2 className=" text-2xl font-bold text-yellow-400 py-[20px]">
              Python Programming
            </h2>
            <p className="text-sm text-white">
              Explore Python and how it powers the web with frameworks like
              Django and Flask. Build secure and scalable web applications.
            </p>
            <Link href={"/apply"}>
              <button className="px-6 py-2 mt-[30px] bg-yellow-400  rounded-xl font-bold hover:bg-yellow-300 transition duration-500 ease-in">
                Enroll Now
              </button>
            </Link>
          </div>
          <div className="h-[430px] w-[320px] bg-indigo-200 bg-opacity-20 p-[25px]">
            <Image
              src={"/frontend.jpeg"}
              alt="frontend"
              width={300}
              height={300}
              className="h-[180px] w-full"
            />
            <h2 className=" text-2xl font-bold text-yellow-400 py-[20px]">
              Frontend Development
            </h2>
            <p className="text-sm text-white">
              Master the art of creating interactive interfaces with HTML, CSS,
              and JavaScript with modern frontend framework.
            </p>
            <Link href={"/apply"}>
              <button className="px-6 py-2 mt-[30px] bg-yellow-400  rounded-xl font-bold hover:bg-yellow-300 transition duration-500 ease-in">
                Enroll Now
              </button>
            </Link>
          </div>
          <div className="h-[430px] w-[320px] bg-indigo-200 bg-opacity-20 p-[25px]">
            <Image
              src={"/book.webp"}
              alt="javascript"
              width={300}
              height={300}
              className="h-[180px] w-full"
            />
            <h2 className=" text-2xl font-bold text-yellow-400 py-[20px]">
              {" "}
              JavaScript (JS)
            </h2>
            <p className="text-sm text-white">
              Dive into JavaScript to build interactive web pages. Learn core
              concepts, DOM manipulation, and modern ES6+ features.
            </p>
            <Link href={"/apply"}>
              <button className="px-6 py-2 mt-[30px] bg-yellow-400  rounded-xl font-bold hover:bg-yellow-300 transition duration-500 ease-in">
                Enroll Now
              </button>
            </Link>
          </div>
          <div className="h-[430px] w-[320px] bg-indigo-200 bg-opacity-20 p-[25px]">
            <Image
              src={"/graphql.webp"}
              alt="graphql"
              width={300}
              height={300}
              className="h-[180px] w-full"
            />
            <h2 className=" text-2xl font-bold text-yellow-400 py-[20px]">
              GraphQL
            </h2>
            <p className="text-sm text-white">
              Learn GraphQL, an alternative to REST APIs,to query your data
              exactly the way you need it for web applications.
            </p>
            <Link href={"/apply"}>
              <button className="px-6 py-2 mt-[30px] bg-yellow-400  rounded-xl font-bold hover:bg-yellow-300 transition duration-500 ease-in">
                Enroll Now
              </button>
            </Link>
          </div>
          <div className="h-[430px] w-[320px] bg-indigo-200 bg-opacity-20 p-[25px]">
            <Image
              src={"/book.webp"}
              alt="django"
              width={300}
              height={300}
              className="h-[180px] w-full"
            />
            <h2 className=" text-2xl font-bold text-yellow-400 py-[20px]">
              Django
            </h2>
            <p className="text-sm text-white">
              Leverage Python’s Django framework to build secure, scalable
              websites and REST APIs with authentication.
            </p>
            <Link href={"/apply"}>
              <button className="px-6 py-2 mt-[30px] bg-yellow-400  rounded-xl font-bold hover:bg-yellow-300 transition duration-500 ease-in">
                Enroll Now
              </button>
            </Link>
          </div>
          <div className="h-[430px] w-[320px] bg-indigo-200 bg-opacity-20 p-[25px]">
            <Image
              src={"/bckend.jpeg"}
              alt="backend"
              width={300}
              height={300}
              className="h-[180px] w-full"
            />
            <h2 className=" text-2xl font-bold text-yellow-400 py-[20px]">
              Backend Development
            </h2>
            <p className="text-sm text-white">
              Learn to build scalable applications.Master backend technologies
              Node.js,Express and databases for seamless web experiences.
            </p>
            <Link href={"/apply"}>
              <button className="px-6 py-2 mt-[30px] bg-yellow-400  rounded-xl font-bold hover:bg-yellow-300 transition duration-500 ease-in">
                Enroll Now
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Courses;
