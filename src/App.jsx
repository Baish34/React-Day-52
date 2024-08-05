import { useState } from "react";
import "./App.css";

const Feedback = () => {
  const [feedback, setFeedback] = useState();
  const [displayFeedback, setDisplayFeedback] = useState();
  const feedbackInputHandler = (event) => {
    setFeedback(event.target.value);
  };

  const feedbackBtn = () => {
    setDisplayFeedback(feedback);
  };

  return (
    <div>
      <label for="feedback">Give your feedback:</label>
      <textarea
        id="feedback"
        rows={4}
        cols={35}
        onChange={feedbackInputHandler}
      ></textarea>
      <button onClick={feedbackBtn}>Submit</button>
      {displayFeedback && <p>Your feedback: {displayFeedback}</p>}
    </div>
  );
};

const MovieReview = () => {
  const [movie, setMovie] = useState();
  const [displayMovie, setDisplayMovie] = useState();

  const handleMovieInput = (event) => {
    setMovie(event.target.value);
  };

  const movieBtnHandler = () => {
    setDisplayMovie(movie);
  };

  return (
    <div>
      <label for="movie">Write your movie review:</label>
      <textarea
        id="movie"
        rows={4}
        cols={35}
        onChange={handleMovieInput}
      ></textarea>
      <button onClick={movieBtnHandler}>Submit Review</button>
      {displayMovie && <p>Your review: {displayMovie}</p>}
    </div>
  );
};

const DisplayMessage = () => {
  const [message, setMessage] = useState();

  const messageInputHandler = (event) => {
    setMessage(event.target.value);
  };

  const messageBtnHandler = () => {
    const messageBtn = message.toUpperCase();

    if (messageBtn) {
      alert(`Message: ${messageBtn}!`);
    }
  };
  return (
    <div>
      <label for="messageInput">Enter your message:</label>
      <textarea
        id="messageInput"
        rows={4}
        cols={35}
        onChange={messageInputHandler}
      ></textarea>
      <button onClick={messageBtnHandler}>Display Message</button>
    </div>
  );
};

const Notes = () => {
  const [note, setNote] = useState();
  const [displayNote, setDisplayNote] = useState();

  const noteInputHandler = (event) => {
    setNote(event.target.value);
  };

  const noteBtnHandler = () => {
    setDisplayNote(note);
  };

  return (
    <div>
      <label for="noteInput">Take your notes:</label>
      <textarea
        id="noteInput"
        rows={4}
        cols={35}
        onChange={noteInputHandler}
      ></textarea>
      <button onClick={noteBtnHandler}>Save Notes</button>
      {displayNote && <p>Notes saved: {displayNote}</p>}
    </div>
  );
};

const Question = () => {
  const [question, setQuestion] = useState("");
  const [modifiedQuestion, setModifiedQuestion] = useState("");

  const handleQuestionInput = (event) => {
    setQuestion(event.target.value);
  };

  const clickHandler = () => {
    const atIndex = question.includes("?");
    let modifiedQuestionText;
    if (atIndex) {
      modifiedQuestionText = `Your question: ${question}`;
    } else {
      modifiedQuestionText = `Your question: ${question}?`;
    }
    setModifiedQuestion(modifiedQuestionText);
  };

  return (
    <div>
      <label htmlFor="question">Ask your question:</label>
      <textarea
        id="question"
        rows={4}
        cols={35}
        onChange={handleQuestionInput}
      ></textarea>
      <button onClick={clickHandler}>Submit Question</button>
      {modifiedQuestion && <p>{modifiedQuestion}</p>}
    </div>
  );
};

const Comment = () => {
  const [comment, setComment] = useState();
  const [displayComment, setDisplayComment] = useState();

  const commentInputHandler = (event) => {
    setComment(event.target.value);
  };

  const commentBtnHandler = () => {
    setDisplayComment(comment);
  };

  return (
    <div>
      <label for="commentnput">Leave your comment:</label>
      <textarea
        id="commentInput"
        rows={4}
        cols={35}
        onChange={commentInputHandler}
      ></textarea>
      <button onClick={commentBtnHandler}>Submit Comment</button>
      {displayComment && <p>// {displayComment}</p>}
    </div>
  );
};

export default function App() {
  return (
    <main>
      <Feedback />
      <br />
      <MovieReview />
      <br />
      <DisplayMessage />
      <br />
      <Notes />
      <br />
      <Question />
      <br />
      <Comment />
    </main>
  );
}
