import React from "react";
import { useParams } from "react-router-dom";

const SubmitWrapper = () => {
  const { questionId } = useParams<{ questionId: string }>();
  return (
    <div style={{ padding: "1rem" }}>
      <p>
        <b>Submit your answers</b>
      </p>
    </div>
  );
};

export default SubmitWrapper;
