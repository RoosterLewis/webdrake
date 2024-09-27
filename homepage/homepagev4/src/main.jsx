import { useCallback, useState } from "react";
// import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Art, Landing, Tech } from "./pages";
import "./index.css";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Landing />,
//   },
//   {
//     path: "/tech",
//     element: <Tech />,
//   },
//   {
//     path: "/art",
//     element: <Art />,
//   },
// ]);

export function Main() {
  const [loginState, setToggleState] = useState("neutral");
  const handleToggle = useCallback((newValue) => {
    setToggleState((prev) => (prev === newValue ? "neutral" : newValue));
  }, []);

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          width: loginState === "tech" ? "100%" : "0px",
          overflow: "hidden",
          transition: "width .5s",
        }}
      >
        <Tech handleToggle={handleToggle} />
      </div>
      <div>
        <Landing loginState={loginState} handleToggle={handleToggle} />
      </div>
      <div
        style={{
          width: loginState === "art" ? "100%" : "0px",
          overflow: "hidden",
          transition: "width .5s",
        }}
      >
        <Art handleToggle={handleToggle} />
      </div>
    </div>
  );
}
