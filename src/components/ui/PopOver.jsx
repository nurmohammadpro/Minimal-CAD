const PopOver = ({
  popOverHeader,
  popOverDescription,
  position = "rightMiddle",
}) => {
  const positions = {
    rightBottom: "-left-1.5 bottom-3",
    rightMiddle: "-right-1.5 bottom-1/2 top-1/2",
    rightTop: "-left-1.5 top-3",

    leftBottom: "-right-1.5 bottom-3",
    leftMiddle: "-left-1.5 bottom-1/2 top-1/2",
    leftTop: "-right-1.5 top-3",

    topRight: "-left-1.5 top-3",
    topMiddle: "-left-1.5 top-1/2 bottom-1/2",
    topLeft: "-right-1.5 top-3",

    bottomRight: "-left-1.5 bottom-3",
    bottomMiddle: "-left-1.5 bottom-1/2 top-1/2",
    bottomLeft: "-right-1.5 bottom-3",
  };
  return (
    <div className="relative flex items-center">
      <div className="relative bg-light-50 text-gray-800 text-center rounded-xl px-4 py-3">
        <p className="font-semibold text-gray-900 text-sm">{popOverHeader}</p>
        <p className="text-gray-500 text-xs">{popOverDescription}</p>
        {/* Tooltip arrow */}
        <div
          className={`absolute ${positions[position]} w-4 h-4 bg-light-50 border-l-0 border-b-0 rotate-45`}
        ></div>
      </div>
    </div>
  );
};

export default PopOver;
