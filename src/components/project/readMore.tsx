export default function ReadMore(data: { readMore: string }) {
  function openPopup() {
    let url = `${data.readMore}`;

    const width = 600;
    const height = 600;

    const left = window.screen.width / 2 - width / 2;
    const top = window.screen.height / 2 - height / 2;

    const scrollbars = "no";
    const status = "no";
    const titlebar = "no";
    const directories = "no";
    const location = "no";
    const menubar = "no";
    const toolbar = "no";

    window.open(
      url,
      "popup",
      `width=${width}, height=${height}, left=${left}, top=${top}, scrollbars=${scrollbars}, status=${status}, titlebar=${titlebar}, directories=${directories}, location=${location}, menubar=${menubar}, toolbar=${toolbar}`
    );
  }

  return (
    <button
      onClick={openPopup}
      className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
    >
      자세히보기
    </button>
  );
}
