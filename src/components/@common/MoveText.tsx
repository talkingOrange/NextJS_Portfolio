import { useEffect, useRef } from "react";

export default function MoveText({
  text,
  move,
}: {
  text: string;
  move: number;
}) {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const textElement = textRef.current;
    let containerTop = 0;

    const handleScroll = () => {
      if (!textElement) return;
      const scrollPos = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const textOffset = textElement.offsetTop - containerTop;

      // 위아래 움직임
      const distance = scrollPos - textOffset + windowHeight / 2;

      // 크기 조정
      const scale = 0.9 + Math.abs(distance) / (windowHeight * 0.5);

      if (textElement) {
        if (move === 0) {
          textElement.style.transform = `translateY(${distance}px)`;
        } else {
          textElement.style.transform = ` translateY(${distance}px) scale(${scale})`;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [move]);

  return (
    <div
      ref={textRef}
      className="absolute  transition-transform duration-[150ms] mt-20 text-9xl text-black/10 md:text-9xl xl:text-9xl font-black tracking-tight "
    >
      {text}
    </div>
  );
}
