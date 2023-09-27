/* eslint-disable react-hooks/rules-of-hooks */
import { retrieveStorage } from "@/utils/retrieveStorage";
import { useEffect, useState } from "react";

export function getStorage(fileName) {
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await retrieveStorage(fileName);
        setData(response);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [fileName]);

  return data;
}
