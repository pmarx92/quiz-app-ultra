import styled, { css } from "styled-components";
import { useState } from "react";

function Create({ handleSubmit }) {
  const [inputQuestion, setInputQuestion] = useState("");
  const [inputAnswer, setInputAnswer] = useState("");
  const [tagOne, setTagOne] = useState("");
  const [tagTwo, setTagTwo] = useState("");
  const [tagThree, setTagThree] = useState("");

  const handleInput = (event) => {
    event.preventDefault();
    handleSubmit({ inputQuestion, inputAnswer, tagOne, tagTwo, tagThree });
  };

  return (
    <>
      <StyledForm onSubmit={handleInput} data-js="form">
        <fieldset>
          <legend>Your Question: </legend>
          <label for="yourQuestion"></label>
          <textarea
            name="yourQuestion"
            id="yourQuestion"
            cols="43"
            rows="5"
            placeholder="The Question..."
            onChange={(event) => setInputQuestion(event.target.value)}
          ></textarea>
        </fieldset>
        <fieldset>
          <legend>Your answer: </legend>
          <label for="yourAnswer"></label>
          <textarea
            name="yourAnswer"
            id="yourAnswer"
            cols="43"
            rows="5"
            placeholder="The answer..."
            onChange={(event) => setInputAnswer(event.target.value)}
          ></textarea>
        </fieldset>
        <fieldset>
          <legend>Tags</legend>
          <label for="tags"></label>
          <input
            class="textarea"
            type="text"
            name="tags1"
            id="tags"
            placeholder="write tag one here"
            onChange={(event) => setTagOne(event.target.value)}
          />
          <input
            class="textarea"
            type="text"
            name="tags2"
            id="tags"
            placeholder="write tag two here"
            onChange={(event) => setTagTwo(event.target.value)}
          />
          <input
            class="textarea"
            type="text"
            name="tags3"
            id="tags"
            placeholder="write tag three here"
            onChange={(event) => setTagThree(event.target.value)}
          />
        </fieldset>

        <button type="submit">Submit</button>
      </StyledForm>
    </>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px auto;

  width: 50%;
`;

export default Create;
