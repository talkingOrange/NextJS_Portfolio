export default function Career() {
  return (
    <>
      <div className="py-6 sm:py-0 bg-black  bg-opacity-100 -mt-20 relative z-50">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="grid gap-8 sm:grid-cols-2 sm:gap-12">
            <div className="flex flex-col items-center justify-center sm:items-start md:py-6 lg:py-12 xl:py-24">
              <p className="mb-4 text-sm font-semibold uppercase text-indigo-500 md:text-base">
                🖥 Career
              </p>
              <h1 className="mb-2 text-center text-2xl font-bold text-white sm:text-left md:text-3xl">
                (주)케이브레인컴퍼니
              </h1>

              <p className="mb-4 text-center text-white sm:text-left md:text-lg">
                2022.09.01 ~ 2022.12.31
                <ul>
                  <li>1. 웹 퍼블리싱 업무</li>
                  <ul>
                    <li>- 고객사 요청 팝업 퍼블리싱</li>
                    <li>- 벤치마킹 자료 탐색 및 분류</li>
                  </ul>
                  <li>
                    2. 자사 에디터 웹 사이트 오류 수정 ( JavaScript )
                    <ul>
                      <li>- 오류 확인 및 오류 시트 정리</li>
                      <li>
                        - 이미지 에디터, 모션, 표, 라인, 폰트 등 에디터 오류
                        수정
                      </li>
                    </ul>
                  </li>
                  <li>
                    3. 자사 에디터 웹 사이트 기능 추가 ( JavaScript, PHP )
                    <ul>
                      <li>- 드래그 앤 드랍 기능 추가</li>
                      <li>- 사용자 폰트 추가</li>
                      <li>- 나의 컬러 radio 버튼 추가</li>
                      <li>- gif 업로드 기능 추가</li>
                    </ul>
                  </li>
                </ul>
              </p>
            </div>
            <div className="flex flex-col items-center justify-center sm:items-start md:py-6 lg:py-12 xl:py-24">
              <div className=" relative  xl:ml-40 md:ml-15 sm:ml-4 w-80 h-80 bg-[#9e76ca] overflow-hidden rounded-lg  ">
                <img
                  src="/study.png"
                  className="w-[13rem] absolute bottom-4 left-14"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
