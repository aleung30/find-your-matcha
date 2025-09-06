import Map from "./Map";

export const Temporary = () => {
  return (
    <div className="flex h-screen justify-center items-center">
      {/* Left: Cards section */}
      <div className="w-1/3 bg-[#ECF0E7] p-4 overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Matcha Spots</h2>

        <div className="bg-white shadow rounded-lg p-4 mb-4">
          <h3 className="text-lg font-semibold">Matcha Corner</h3>
          <p className="text-gray-600">Great matcha and vibes!</p>
        </div>

        <div className="bg-white shadow rounded-lg p-4 mb-4">
          <h3 className="text-lg font-semibold">Trees</h3>
          <p className="text-gray-600">Cozy atmosphere, highly recommend.</p>
        </div>

        <div className="bg-white shadow rounded-lg p-4">
          <h3 className="text-lg font-semibold">Cafe Matcha</h3>
          <p className="text-gray-600">Refreshing drinks and friendly staff.</p>
        </div>
      </div>

      {/* Right: Map */}
      <div className="flex-1 bg-[#ECF0E7]">
        <Map />
      </div>
    </div>
  );
};
