import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep((step) => step - 1);
  }

  function handleNext() {
    if (step < 3) setStep((step) => step + 1);
  }

  return (
    <>
      <button
        className="close"
        onClick={() => setIsOpen((isOpen) => !isOpen)}
        style={{
          transition: "transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
          transform: isOpen ? "rotate(0deg)" : "rotate(90deg)",
        }}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Steps {step} : {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              className="button"
              style={{ backgroundColor: "#7905f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              className="button"
              style={{ backgroundColor: "#7905f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
