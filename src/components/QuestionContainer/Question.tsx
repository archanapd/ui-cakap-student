import React from "react";
import { useParams } from "react-router-dom";

const QuestionContainer = () => {
  const { questionId } = useParams<{ questionId: string }>();
  return (
    <div style={{ padding: "1rem" }}>
      <p>
        Welcome to the questions section for Question ID : <b>{questionId}</b>
      </p>
    </div>
  );
};

export default QuestionContainer;
