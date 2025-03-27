const FeaturedApp = () => {
  return (
    <div className="bg-gradient-to-r from-purple-900 to-indigo-800 rounded-xl overflow-hidden mb-6 relative">
      <div className="absolute top-0 right-0 w-full h-full opacity-20">
        <div
          className="absolute top-0 right-0 w-2/3 h-full bg-contain bg-no-repeat bg-right-top"
          style={{
            backgroundImage:
              "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Snapshot_2025-03-28_00-25-50-Cdw6Cpd1AmU7ej8LQaeYlytwrON8iq.png')",
          }}
        ></div>
      </div>
      <div className="p-6 relative z-10">
        <span className="inline-block px-2 py-1 bg-white/20 text-white text-xs rounded-md mb-2">
          FEATURED APP
        </span>
        <h3 className="text-xl font-bold text-white mb-1">
          Understanding Blockchain Technology: Beyond the Basics
        </h3>
        <p className="text-white/80 text-sm">
          The children giggled with joy as they ran through the sprinklers on
          the hot summer day.
        </p>
      </div>
    </div>
  );
};

export default FeaturedApp;
