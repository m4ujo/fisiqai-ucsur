"use client";

import CustomTextarea from "@/components/custom-textarea";
import RightArrow from "@/components/icons/right-arrow";
import Loader from "@/components/loader";
import MarkdownContent from "@/components/markdown-content";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function GuiaResolucionPage() {
  const [text, setText] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  console.log(process.env.NEXT_PUBLIC_API_URL);

  const apiURL = `https://fisiqai-backend.onrender.com/generate_resolution`;

  const handleGenerateResolution = async () => {
    if (!text.trim()) {
      alert("Por favor, escribe una pregunta antes de enviar.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(apiURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: text }),
      });

      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.statusText}`);
      }

      const data = await response.text();

      setResult(data);
    } catch (error: any) {
      console.error("Error al generar la resolución:", error);
      alert("Hubo un problema al procesar tu solicitud.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col w-full items-center gap-7 py-10">
      <p className="font-black text-5xl">Guía de resolución de problemas</p>

      <div className="flex items-end gap-4 w-full max-w-4xl border rounded-md border-accent px-2 pt-2 pb-4">
        <CustomTextarea value={text} onChange={setText} disabled={loading} />
        <Button onClick={handleGenerateResolution} disabled={loading}>
          <RightArrow />
        </Button>
      </div>

      {!loading ? (
        result && (
          <div className="bg-card max-w-4xl py-10 px-10">
            <MarkdownContent content={result} />
          </div>
        )
      ) : (
        <Loader />
      )}
    </div>
  );
}
