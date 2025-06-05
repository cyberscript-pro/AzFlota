"use client";
import { useState } from "react";

type ApiDelete = {
  url: string;
  data?: any;
  refetch?: () => Promise<void>;
};

type DeleteProps = {
  onClose?: () => void;
};

export default function useApiDelete({ onClose }: DeleteProps) {
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

      if (onClose) return onClose();
      if (refetch) return refetch();
      setDeleteSuccess(true);
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
