import api from "@/config/axios";
import { ProdutcProps } from "@/types/product";
import { useState, useEffect } from "react";

const useFetch = (url: string) => {
  const [data, setData] = useState<ProdutcProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setData([]);
    setError("");

    api
      .get(url)
      .then((response) => {
        setLoading(false);
        response.data && setData(response.data);
      })
      .catch((err: String) => {
        setLoading(false);
        setError("An error occurred. Awkward..");
      });
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
