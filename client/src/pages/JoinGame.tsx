import { useMutation } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AddPlayerScreenDocument } from "../generated";

const JoinGame: React.FC = () => {
  const { id } = useParams() as { id: string };
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [addPlayerToGame, { loading, data }] = useMutation(
    AddPlayerScreenDocument
  );

  useEffect(() => {
    if (data) {
      navigate(`/game/play/${id}/${data.addPlayerToGame.id}`);
    }
  }, [data, id, navigate]);

  return (
    <div>
      <h1>Join the game: {id}</h1>
      <div>
        <label htmlFor="name">Enter your name </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <button
          disabled={!name || loading}
          onClick={() =>
            addPlayerToGame({
              variables: { id, name },
            })
          }
        >
          Join the game
        </button>
      </div>
    </div>
  );
};

export default JoinGame;
