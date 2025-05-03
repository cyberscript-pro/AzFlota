import { useState, useCallback } from "react";
import { Inputs } from "../flota/choferes/data/FormDataPost";
import { FieldValues, UseFormReset } from "react-hook-form";

interface UseApiUpdateResult<T> {
  loading: boolean;
  error: string | null;
  submitSuccess: boolean;
  updateData: (data: T) => Promise<void>;
}

export default function useApiUpdate<T>({ 
  url, 
  onSuccess 
}: { 
  url: string;
  onSuccess?: () => Promise<void>;
}): UseApiUpdateResult<T> {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const updateData = useCallback(async (data: T) => {
    try {
      setLoading(true);
      setError(null);
      setSubmitSuccess(false);

      const response = await fetch(url, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Error al actualizar: ${response.status}`);
      }

      const result = await response.json();
      setSubmitSuccess(true);
      
      // Llamar a la función de actualización si existe y esperar a que termine
      if (onSuccess) {
        await onSuccess();
      }
      
      return result;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Error al actualizar los datos";
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  }, [url, onSuccess]);

  return {
    loading,
    error,
    submitSuccess,
    updateData
  };
}
