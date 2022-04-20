import Home from "components/Home/Home";
import QuestionWrapper from "components/shared/QuestionWrapper";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const AppRouter = (props: any) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ui-cakap-student" element={<Home />} />
        <Route path="/questions/:questionId" element={<QuestionWrapper />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here yet!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
