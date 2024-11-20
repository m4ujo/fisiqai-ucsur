"use client";

import Loader from "@/components/loader";
import QuestionsList from "@/components/questions-list";
import { TOPICS } from "@/data/topics";
import { IQuestion } from "@/interfaces/interfaces";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: Promise<{ slug: string }> }) {
  const [file, setFile] = useState<string>("");
  const [showReview, setShowReview] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [questions, setQuestions] = useState<IQuestion[] | null>(null);

  params.then((file) => setFile(file.slug));
  const topicTitle = TOPICS.find((topic) => topic.name === file)?.title;

  const apiUrl = topicTitle ? `https://fisiqai-backend.onrender.com/generate_questions/topic=${encodeURIComponent(topicTitle)}` : "";

  const handleChangeQuestions = async () => {
    if (!apiUrl) return;

    setLoading(true);
    try {
      const response = await fetch(apiUrl);
      const resJSON = await response.json();
      setQuestions(resJSON.questions || []);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    handleChangeQuestions();
  }, [file]);

  return !loading ? (
    <div className="flex justify-center">
      <div className="max-w-sm lg:max-w-3xl py-10">
        <h1 className="text-3xl font-black mb-5 text-center">{topicTitle}</h1>
        {questions && <QuestionsList questions={questions} showReview={showReview} />}
        <div className="flex flex-col mt-5 gap-1 md:flex-row">
          {!showReview && (
            <button className="w-full px-4 py-2 bg-green-600 text-white rounded-md" onClick={() => setShowReview(true)}>
              Revisar Respuestas
            </button>
          )}
          <button
            className="w-full px-4 py-2 bg-accent text-white rounded-md"
            onClick={() => {
              setShowReview(false)
              handleChangeQuestions();
            }}
          >
            Generar nuevas preguntas
          </button>
        </div>
      </div>
    </div>
  ) : (
    <Loader />
  );
}
