"use client";

import { useEffect, useState } from "react";
import { RadioGroup } from "@radix-ui/react-radio-group";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import CustomRadioButton from "./custom-radiobutton";
import { IQuestion } from "@/interfaces/interfaces";

export default function QuestionsList({ questions, showReview }: { questions: IQuestion[], showReview: boolean }) {
  const [answers, setAnswers] = useState<string[]>([]);

  const handleOptionChange = (index: number, selectedOption: string | undefined) => {
    const updatedAnswers = [...answers];
    if (selectedOption) updatedAnswers[index] = selectedOption;
    setAnswers(updatedAnswers);
  };

  if (showReview) {
    return (
      <div className="flex flex-col gap-5">
        {questions.map((question, index) => (
          <Card
            key={index}
            className={`py-3 h-full w-full max-w-8xl ${question.answer === answers[index] ? "bg-success" : "bg-error"}`}
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-bold">Pregunta {index + 1}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3">{question.question}</p>
              <p>
                <strong>Tu respuesta:</strong> {answers[index] || "No seleccionada"}
              </p>
              <p>
                <strong>Respuesta correcta:</strong> {question.answer}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5">
      {questions.map((question, index) => (
        <Card key={index} className="py-3 h-full w-full max-w-8xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-bold">Pregunta {index + 1}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-3">{question.question}</p>
            <RadioGroup
              onValueChange={(value) => {
                handleOptionChange(
                  index,
                  question.options.find((option) => option === value)
                );
              }}
            >
              {question.options.map((option, optionIndex) => (
                <CustomRadioButton key={optionIndex} option={option} index={optionIndex} />
              ))}
            </RadioGroup>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
