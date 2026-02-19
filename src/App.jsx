import { useState } from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Work from "./components/Work";
import History from "./components/History";
import Leisure from "./components/Leisure";
import ScrollTop from "./components/ScrollTop";

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      {page !== "leisure" && <Navbar setPage={setPage} />}

      {page === "home" && (
        <>
          <Intro />
          <Work />
          <History />
          <ScrollTop />
        </>
      )}

      {page === "leisure" && <Leisure setPage={setPage} />}
    </>
  );
}
