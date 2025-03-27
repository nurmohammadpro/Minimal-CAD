const ChartsSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <div className="bg-white rounded-xl p-4 shadow-sm">
        <div className="mb-4">
          <h3 className="text-base font-semibold">Current download</h3>
          <p className="text-xs text-gray-500">Breakdown by operating system</p>
        </div>
        <div className="flex justify-center items-center h-64">
          <div className="relative w-48 h-48">
            {/* Donut chart placeholder */}
            <div
              className="absolute inset-0 rounded-full border-8 border-teal-600"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
            ></div>
            <div
              className="absolute inset-0 rounded-full border-8 border-teal-400"
              style={{ clipPath: "polygon(100% 0, 100% 50%, 50% 50%, 50% 0)" }}
            ></div>
            <div
              className="absolute inset-0 rounded-full border-8 border-teal-200"
              style={{ clipPath: "polygon(100% 50%, 100% 100%, 75% 75%)" }}
            ></div>
            <div className="absolute inset-0 flex items-center justify-center flex-col">
              <span className="text-sm text-gray-500">Total</span>
              <span className="text-xl font-bold">188,245</span>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-4 mt-4">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-teal-600 mr-2"></div>
            <span className="text-sm">Mac</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-teal-400 mr-2"></div>
            <span className="text-sm">Windows</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-teal-200 mr-2"></div>
            <span className="text-sm">iOS</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-teal-100 mr-2"></div>
            <span className="text-sm">Android</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-4 shadow-sm">
        <div className="mb-4">
          <h3 className="text-base font-semibold">Area installed</h3>
          <p className="text-xs text-gray-500">(+43%) than last year</p>
        </div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-green-600 mr-2"></div>
            <span className="text-sm">Asia</span>
            <span className="ml-2 text-sm font-semibold">1.23k</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
            <span className="text-sm">Europe</span>
            <span className="ml-2 text-sm font-semibold">6.79k</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-orange-400 mr-2"></div>
            <span className="text-sm">Americas</span>
            <span className="ml-2 text-sm font-semibold">1.01k</span>
          </div>
        </div>
        <div className="h-48">
          {/* Bar chart placeholder */}
          <div className="flex h-full items-end justify-between">
            {[
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ].map((month, index) => (
              <div key={index} className="flex flex-col items-center w-6">
                <div className="w-full flex flex-col-reverse">
                  <div
                    className="bg-green-600 w-full"
                    style={{ height: `${Math.random() * 20 + 5}px` }}
                  ></div>
                  <div
                    className="bg-blue-500 w-full"
                    style={{ height: `${Math.random() * 30 + 10}px` }}
                  ></div>
                  <div
                    className="bg-orange-400 w-full"
                    style={{ height: `${Math.random() * 25 + 8}px` }}
                  ></div>
                </div>
                <span className="text-xs mt-1 text-gray-500">
                  {month.substring(0, 3)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartsSection;
