"use client";
import { useState } from "react";

type ApiDelete = {
  url: string;
  data?: any;
  refetch?: () => Promise<void>;
};

export default function useApiDelete() {
  const [deleteSuccess, setDeleteSuccess] = useState(false);

  const onDelete = async ({ url, data, refetch }: ApiDelete) => {
    try {
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Error al realizar la eliminacion");
      }

      setDeleteSuccess(true);
      if(refetch) return refetch();
    } catch (err) {
      throw new Error(
        err instanceof Error ? err.message : "An unknown error occurred"
      );
    }
  };

  return {
    onDelete,
    deleteSuccess,
    setDeleteSuccess,
  };
}
