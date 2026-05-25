//import Pricing from "../components/Pricing"

/*const Plans = () => {
  return (
    <div className="max-sm:py-10 sm:pt-20">
      {false && <Pricing />}

      <p className="text-center text-gray-400 max-w-md text-sm my-14 mx-auto px-12">
        Create stunning images for just{" "}
        <span className="text-indigo-400 font-medium">5 credits</span> and
        generate immersive videos for{" "}
        <span className="text-indigo-400 font-medium">10 credits</span>.
      </p>
    </div>
  );
};*/
const Plans = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-sky-400 text-sm font-medium mb-2">PRICING</p>
        <h1 className="text-4xl font-bold text-white mb-4">
          Simple, Transparent Pricing
        </h1>
        <p className="text-gray-400 mb-12">
          Start for free. Upgrade when you need more.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Free Plan */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-left">
            <h2 className="text-white font-bold text-xl mb-1">Free</h2>
            <p className="text-gray-400 text-sm mb-4">Perfect to get started</p>
            <p className="text-4xl font-bold text-white mb-6">
              $0<span className="text-sm text-gray-400">/month</span>
            </p>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>✅ 30 Credits</li>
              <li>✅ Image Generation</li>
              <li>✅ Video Generation</li>
              <li>✅ Standard Quality</li>
            </ul>
          </div>

          {/* Pro Plan */}
          <div className="bg-sky-500/20 border border-sky-500/50 rounded-2xl p-6 text-left relative">
            <span className="absolute top-4 right-4 bg-sky-500 text-white text-xs px-2 py-1 rounded-full">
              Popular
            </span>
            <h2 className="text-white font-bold text-xl mb-1">Pro</h2>
            <p className="text-gray-400 text-sm mb-4">For creators & brands</p>
            <p className="text-4xl font-bold text-white mb-6">
              $29<span className="text-sm text-gray-400">/month</span>
            </p>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>✅ 100 Credits</li>
              <li>✅ HD Quality</li>
              <li>✅ No Watermark</li>
              <li>✅ Priority Support</li>
            </ul>
            <p className="text-sky-400 text-xs mt-4">Coming Soon</p>
          </div>

          {/* Ultra Plan */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-left">
            <h2 className="text-white font-bold text-xl mb-1">Ultra</h2>
            <p className="text-gray-400 text-sm mb-4">For agencies & teams</p>
            <p className="text-4xl font-bold text-white mb-6">
              $79<span className="text-sm text-gray-400">/month</span>
            </p>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>✅ 500 Credits</li>
              <li>✅ 4K Quality</li>
              <li>✅ API Access</li>
              <li>✅ Dedicated Support</li>
            </ul>
            <p className="text-sky-400 text-xs mt-4">Coming Soon</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
