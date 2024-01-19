import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();

  function moveBack() {
    navigate(-1);
  }

  return (
    <button onClick={moveBack} aria-label="move back">
      <img src="/back-icon.svg" alt="back icon" />
    </button>
  );
}

export default BackButton;
