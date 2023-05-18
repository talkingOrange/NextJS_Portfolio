import MoveText from "../@common/MoveText";

export default function Introduce() {
  return (
    <>
      <div>
        <section>
          <div className="relative overflow-hidden bg-no-repeat bg-cover bg-gradient-to-r from-sky-500 to-indigo-500 h-[50rem] z-40">
            <div className="flex justify-center items-center h-full cursor-default ">
              <section className="mb-[17rem] text-gray-800 text-center ">
                <div className="flex justify-center">
                  <div className="max-w-[80rem]">
                    <p className="text-white text-2xl font-semibold">
                      YEWON HAN
                    </p>
                    <h1 className="text-5xl text-sky-500 md:text-6xl xl:text-7xl font-bold tracking-tight">
                      <span className="bg-white ">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-indigo-500">
                          YOUNG EYED
                        </span>
                      </span>
                    </h1>
                    <h1 className="text-5xl text-white md:text-6xl xl:text-7xl font-bold tracking-tight mb-5">
                      DEVELOPER
                    </h1>
                    <p className="text-white text-lg font-medium">
                      누구든지 무언가를 달성하기 위해서 진심으로 노력합니다.
                      <br />
                      <span>
                        저는 진심 뿐만 아니라 두근거리는 열정을 갖고 있는
                        사람입니다.
                      </span>
                    </p>
                  </div>
                </div>
              </section>
              <MoveText text="WEB DEVELOPER" move={0} />
            </div>
          </div>

          <div className="relative container mx-auto px-6 md:px-12 xl:px-32 z-50">
            <div className="text-center text-gray-800">
              {/* 밑에 div에 영상 넣을 것 */}
              <div className="block rounded-lg shadow-lg h-[35rem] px-6 py-12 md:py-16 md:px-12 -mt-[20rem] --color-primary: 0deg 0% 0%; backdrop-blur-3xl  bg-[url('/backgroundImg.jpg')]">
                <a
                  className="inline-block px-7 py-3 mb-2 md:mb-0 mr-0 md:mr-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out "
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  href="#!"
                  role="button"
                >
                  프로젝트 더보기
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
