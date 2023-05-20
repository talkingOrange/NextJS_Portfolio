import MoveText from "../@common/MoveText";
import { useEffect, useState } from "react";

const images = ["/computer.png", "/brain3.png", "/book.png"];

const colors = ["#0EE896", "#DE4578", "#f49c0d", "#9AEB3D"];

export default function Education() {
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [circleColor, setCircleColor] = useState(colors[0]);

  console.log(currentImage);
  console.log(circleColor);
  useEffect(() => {
    const interval = setInterval(() => {
      // 현재 이미지 인덱스 계산
      const currentIndex = images.indexOf(currentImage);
      const nextIndex = (currentIndex + 1) % images.length;

      // 다음 이미지로 변경
      setCurrentImage(images[nextIndex]);
      setCircleColor(colors[nextIndex]);
    }, 3000);
    return () => clearInterval(interval); // 컴포넌트 언마운트 시 인터벌 제거
  }, [currentImage]);

  return (
    <>
      <div className="flex justify-center items-center text-white">
        <MoveText text="Excellent" move={1} />
      </div>
      <div className="bg-white py-6 sm:py-0 bg-[url('/universityImg.jpg')] bg-no-repeat bg-cover bg-opacity-100 -mt-20 ">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 pt-20 pb-20">
            <div className="flex flex-col items-center justify-center sm:items-start md:py-6 lg:py-12 xl:py-24">
              <div
                className={`relative  xl:ml-40 md:ml-15 sm:ml-4 w-80 h-80 rounded-full bg-[${circleColor}]`}
              >
                <img
                  src={currentImage}
                  alt="education"
                  className="w-[20rem] absolute -bottom-5 left-0 "
                />
              </div>
            </div>

            <div className="flex flex-col items-center justify-center sm:items-start md:py-6 lg:py-12 xl:py-24">
              <p className="mb-3 text-sm uppercase text-indigo-500 md:text-base font-black">
                👩‍🎓 Education
              </p>
              <h1 className="mb-2 text-center text-2xl font-black text-gray-800 sm:text-left md:text-3xl">
                성신여자대학교
              </h1>

              <p className="mb-4 text-center text-gray-500 sm:text-left md:text-lg">
                2019.03 ~ 2023.08.(졸업예정)
                <ul>
                  <li>- 심리학 전공</li>
                  <li>- 컴퓨터공학 복수전공</li>
                </ul>
              </p>
              <p className="mt-4 mb-1 text-sm font-semibold uppercase text-pink-400 md:text-base">
                Scholarship
              </p>

              <p className="mb-4 text-center text-gray-500 sm:text-left md:text-lg">
                <ul>
                  <li>2019~2023 입학성적우수자 전액장학금</li>
                  <li>2021-2 성신장학금(학업성적우수)</li>
                </ul>
              </p>
              <p className="mt-4 mb-1 text-sm font-semibold uppercase text-pink-400 md:text-base">
                CREDIT
              </p>

              <p className="mb-4 text-center text-gray-500 sm:text-left md:text-lg">
                4.16 / 4.5
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
