// import { useEffect } from "react";
// import { withRouter, useLocation } from "react-router-dom";

// // const { pathname } = useLocation();

// const ScrollToTop() = ({ children, location: { pathname } }: any) => {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   return children;
// }

// export default withRouter(ScrollToTop);

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}