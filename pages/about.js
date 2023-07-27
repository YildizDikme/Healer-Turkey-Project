import { useEffect, useState } from "react";
import axios from "axios";
import Wrapper from "@/components/Wrapper";

const About = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("/api/hello")
      .then((response) => setData(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <div className="breadcrumb-area bg-gradient">
        <img src="/aboutPicture.png" className="fixed-bg w-[400px] h-[400px]" />
        <Wrapper className="flex justify-center items-center h-full flex-col gap-y-6">
          <h1 className="text-white font-bold text-4xl">ABOUT</h1>
          <ul className="flex gap-x-2">
            <li className="flex items-center gap-x-1">
              <svg
                class="w-3 h-3 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  class="fill-current"
                  d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40h-16c-1.1 0-2.2 0-3.3-.1-1.4.1-2.8.1-4.2.1H392c-22.1 0-40-17.9-40-40v-88c0-17.7-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32v88c0 22.1-17.9 40-40 40h-55.9c-1.5 0-3-.1-4.5-.2-1.2.1-2.4.2-3.6.2h-16c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9.1-2.8v-69.6H32c-18 0-32-14-32-32.1 0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7l255.4 224.5c8 7 12 15 11 24z"
                ></path>
              </svg>
              <a className="text-white text-base font-medium" href="/">
                Home /
              </a>
            </li>
            <li>
              <a className="text-white text-base font-medium" href="/">
                About
              </a>
            </li>
          </ul>
        </Wrapper>
      </div>
      <Wrapper>
        <p className="my-12 text-2xl text-customDarkGreen font-medium text-center">
          With our Hair Transplant and Dental Clinic Services, Adding Value to
          Your Natural Beauty and Health! Smile Confidently, Achieve Aesthetic
          Transformation in Your Hair with Impartial and Professional Approach!
        </p>
      </Wrapper>
      <Wrapper className="my-12">
        {data && (
          <>
            {/* Paragraf Grupları */}
            {data.paragraphGroups.map((group) => (
              <div key={group.id} className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6">
                <div className="flex flex-col  justify-center">
                  {/* Başlık */}
                  <h3 className="text-2xl font-bold text-customGreen flex flex-col">
                    {group.title}
                  </h3>
                  <h2 className="text-2xl font-bold text-customGreen flex flex-col">
                    {group.littleTitle}
                  </h2>
                  {/* Paragraflar */}
                  {group.paragraphs.map((paragraph, index) => (
                    <p key={index} className="my-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
                {/* Görseller */}
                <div>
                  {group.images.length > 0 && (
                    <div className="flex justify-center items-center">
                      {group.images.map((image, index) => (
                        <img
                          key={index}
                          src={image.src}
                          alt={image.alt}
                          className="my-4 w-full h-full rounded-md"
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </>
        )}
      </Wrapper>
    </div>
  );
};

export default About;
