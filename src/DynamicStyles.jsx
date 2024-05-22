import { useEffect, useState } from "react";

export function DynamicStyles({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    console.time("load");
    const head = document.querySelector("head");
    let link = document.createElement("link");
    link.id = "test-index";
    link.rel = "stylesheet";
    link.href = "./public/indexB.css";
    head.appendChild(link);
    setLoading(false);
    return () => {
      head.removeChild(link);
    };
  }, []);



  if (loading) return <span>Loading...</span>;

  return <>{children}</>;
}
