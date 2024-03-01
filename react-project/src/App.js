import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import DesktopLogin from "./pages/DesktopLogin";
import TabletLogin from "./pages/TabletLogin";
import PhoneLogin from "./pages/PhoneLogin";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/tabletlogin":
        title = "";
        metaDescription = "";
        break;
      case "/phonelogin":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<DesktopLogin />} />
      <Route path="/tabletlogin" element={<TabletLogin />} />
      <Route path="/phonelogin" element={<PhoneLogin />} />
    </Routes>
  );
}
export default App;
