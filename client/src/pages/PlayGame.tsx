import { useMutation, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GetGameDocument, Question, SubmitAnswerDocument } from "../generated";
import useInterval from "../useInterval";

const PlayGame: React.FC = () => {
  const [apiError, setApiError] = useState("");
  const { id, playerId } = useParams() as { id: string; playerId: string };
  const navigate = useNavigate();
  const [timeRemaining, setTimeRemaining] = useState(30);
  const [answer, setAnswer] = useState("");
  const { loading, data } = useQuery(GetGameDocument, { variables: { id } });
  const [question, setQuestion] = useState<{
    question: string;
    answers: string[];
    id: string;
  }>();
  const [submitAnswer, { loading: mutationLoading }] = useMutation(
    SubmitAnswerDocument
  );
  const [questions, setQuestions] = useState<
    Pick<Question, "id" | "question" | "answers">[]
  >([]);

  useEffect(() => {
    if (!loading && data && data.game && data.game.questions && data.game.questions.length>0) {
      setApiError("");
      setQuestions([...data.game.questions])
    } else {
      // @ts-ignore
      setApiError("No game trivia questions found");
    }
  }, [loading, data]);

  useInterval(() => {
    if (question) {
      if (timeRemaining === 0) {
        const q = questions.pop();

        if (!q) {
          navigate(`/game/finish/${id}/${playerId}`);
          return;
        } else {
          setTimeRemaining(30);
          setQuestion(q);
          setAnswer("");
        }
      } else {
        setTimeRemaining(timeRemaining - 1);
      }
    }
  }, 1000);

  useEffect(() => {
    if (questions.length) {
      const q = questions.pop();
      setTimeRemaining(30);
      setQuestion(q);
    }
  }, [questions]);

  useEffect(() => {
    if (timeRemaining === 0 && question) {
      submitAnswer({
        variables: {
          gameId: id,
          playerId,
          questionId: question.id,
          answer,
        },
      });
    }
  }, [submitAnswer, id, playerId, question, answer, timeRemaining]);

  if ((loading || !question) && !apiError  ) {
    return <h1>Just getting the game ready, please wait</h1>;
  }

  return (
    <div>
      <h1>Play game {id}!</h1>

      { apiError && 
        <div>
          <h2>Error: {apiError}</h2>
        </div>
      }

      { (!apiError && question) && 
        <div>
        <h2>Time remaining: {timeRemaining}</h2>
        <h2 dangerouslySetInnerHTML={{ __html: question.question }}></h2>
        <ul>
          {question.answers.map((a) => {
            return (
              <li key={a}>
                <label>
                  <input
                    type="radio"
                    value={a}
                    onChange={() => setAnswer(a)}
                    name="answer"
                  />
                  <span dangerouslySetInnerHTML={{ __html: a }}></span>
                </label>
              </li>
            );
          })}
        </ul>
        <button onClick={() => setTimeRemaining(0)} disabled={mutationLoading}>
          Submit Answer
        </button>
        </div>
        }
    </div>
  );
};

export default PlayGame;
