import { useNavigate } from "react-router-dom";

function DesignCard({ title, description, route }) {
  const navigate = useNavigate();

  return (
    <div className="design-card" onClick={() => navigate(route)}>
      <h2>{title}</h2>
      <p>{description}</p>
      <button>Open Mockup</button>
    </div>
  );
}

export default DesignCard;