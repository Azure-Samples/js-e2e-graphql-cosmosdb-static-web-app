import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateGame from "./pages/CreateGame";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import JoinGame from "./pages/JoinGame";
import PlayGame from "./pages/PlayGame";
import CompleteGame from "./pages/CompleteGame";

const client = new ApolloClient({
  uri: "/api/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes >
          <Route path="/" element={ <CreateGame />} />
          <Route path="/game/join/:id" element={<JoinGame />} />
          <Route path="/game/play/:id/:playerId" element={<PlayGame />} />
          <Route path="/game/finish/:id/:playerId" element={<CompleteGame />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
