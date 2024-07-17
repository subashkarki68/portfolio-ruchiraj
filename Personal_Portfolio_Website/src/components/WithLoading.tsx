import { useEffect, useState } from "react";
import Loading from "./Loading";

const WithLoading = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 700);
    return () => clearTimeout(timer);
  }, []);
  return <>{isLoading ? <Loading /> : children}</>;
};

export default WithLoading;
