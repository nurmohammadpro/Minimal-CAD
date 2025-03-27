import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";

const StatsCards = () => {
  const stats = [
    {
      title: "Total active users",
      value: "18,785",
      change: "+2.6%",
      period: "last 7 days",
      trend: "up",
      chartColor: "green",
    },
    {
      title: "Total installed",
      value: "4,876",
      change: "+0.2%",
      period: "last 7 days",
      trend: "up",
      chartColor: "blue",
    },
    {
      title: "Total downloads",
      value: "678",
      change: "-0.1%",
      period: "last 7 days",
      trend: "down",
      chartColor: "orange",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-xl p-4 shadow-sm">
          <div className="mb-2">
            <h3 className="text-sm text-gray-500">{stat.title}</h3>
          </div>
          <div className="flex items-end justify-between">
            <div>
              <p className="text-2xl font-bold">{stat.value}</p>
              <div className="flex items-center mt-1">
                <span
                  className={`flex items-center text-xs ${
                    stat.trend === "up" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {stat.trend === "up" ? (
                    <TrendingUpIcon fontSize="small" className="mr-1" />
                  ) : (
                    <TrendingDownIcon fontSize="small" className="mr-1" />
                  )}
                  {stat.change}
                </span>
                <span className="text-xs text-gray-500 ml-1">
                  {stat.period}
                </span>
              </div>
            </div>
            <div className="h-12 w-24">
              {/* Placeholder for mini chart */}
              <div
                className={`h-full w-full rounded-md bg-${stat.chartColor}-50 flex items-end`}
              >
                <div className="flex w-full justify-between items-end px-1">
                  {[...Array(7)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-2 bg-${stat.chartColor}-400 rounded-sm`}
                      style={{
                        height: `${Math.random() * 70 + 30}%`,
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
