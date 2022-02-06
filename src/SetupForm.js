import React from "react";
import { useGlobalContext } from "./context";

const SetupForm = () => {
  const { handleChange,handleSubmit,quiz,error } = useGlobalContext();
  return (
    <main>
      <section className="quiz quiz-small">
        <form className="setup-form">
          <h2>Setup quiz</h2>
          <div className="form-control">
            <label htmlFor="amount">number of Questions</label>
            <input
              type="number"
              name="amount"
              id="amount"
              value={quiz.amount}
              onChange={handleChange}
              className="form-input"
              min={1}
              max={50}
            />
          </div>
          <div className="form-control">
            <label htmlFor="category">Category</label>
            <select name='category' id='category' className='form-input' value={quiz.category}onChange={handleChange}>
              <option value='sports'>Sports</option>
              <option value='history'>History</option>
              <option value='Politics'>Politics</option>
            </select>
          </div>
          <div className="form-control">
            <label htmlFor="difficulty">Difficulty</label>
            <select name='difficulty' id='difficulty' className='form-input' value={quiz.difficulty}onChange={handleChange}>
              <option value='easy'>Easy</option>
              <option value='Medium'>Medium</option>
              <option value='difficult'>Difficult</option>
            </select>
          </div>
          {error &&<p className='error'>can't generate questions ,please try again different options</p>}
        <button className='submit-btn' type='submit' onClick={handleSubmit}>Start</button>
        </form>
      </section>
    </main>
  );
};

export default SetupForm;
