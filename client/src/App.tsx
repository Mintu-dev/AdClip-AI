import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SoftBackdrop from "./components/SoftBackdrop";
import Footer from "./components/Footer";
import LenisScroll from "./components/lenis";
import { Route, Routes,  } from "react-router-dom";
import Genetator from "./pages/Genetator";
import Result from "./pages/Result";
import MyGenerations from "./pages/MyGenerations";
import Community from "./pages/Community";
import Plans from "./pages/Plans";
import Loading from "./pages/Loading";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="min-h-screen grid-bg bg-gradient-to-br from-[#050816] via-[#140b2d] to-[#2a0f3f]">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
      <Toaster
        toastOptions={{ style: { background: "#333", color: "#fff" } }}
      />
      <SoftBackdrop />
      <LenisScroll />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/generate" element={<Genetator />} />
        <Route path="/result/:projectId" element={<Result />} />
        <Route path="/my-generations" element={<MyGenerations />} />
        <Route path="/community" element={<Community />} />
        {<Route path="/plans" element={<Plans />} />}
        <Route path="/loading" element={<Loading />} />
      </Routes>

      <Footer />
    </div>
  );
}
export default App;
