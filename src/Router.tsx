import Homepage from "./pages/Homepage";
import Createproposal from "./pages/Createproposal";
import Playground from "./pages/playground";
import { Routes, Route} from "react-router-dom";
import Proposals from "./pages/Proposals";
import Vote from "./pages/vote";
import Header from "./components/Header";
import Footer from "./components/Footer";
export default function Router() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/createproposal" element={<Createproposal />} />
      <Route path="/playground" element={<Playground />} />
      <Route path="/vote" element={<Vote />} />

      <Route path="/proposals" element={<Proposals />} />
    </Routes>
    <Footer/>
    </>
  )
}
