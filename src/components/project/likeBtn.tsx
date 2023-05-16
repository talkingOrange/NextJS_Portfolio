import { LikeButton } from "@lyket/react";

export default function LikeBtn(data: { id: string }) {
  return (
    <LikeButton id="like" namespace={data.id} hideCounterIfLessThan={1}>
      {({
        handlePress,
        totalLikes,
        userLiked,
        isLoading,
      }) => (
        <>
          <button
            onClick={handlePress}
            disabled={isLoading}
            className=" rounded-full w-10 h-10 bg-gray-100 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4"
          >
            <svg
              fill={userLiked ? "red" : "currentColor"}
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
            </svg>
          </button>
          <div className="inline-flex justify-center ml-3 mt-1">
            {totalLikes}
          </div>
        </>
      )}
    </LikeButton>
  );
}
