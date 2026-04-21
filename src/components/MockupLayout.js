import { Link } from "react-router-dom";
import PhoneMockup from "./PhoneMockup";

function MockupLayout({
  title,
  description,
  children,
  prevRoute,
  nextRoute,
}) {
  return (
    <div className="mockup-page">
      <div className="mockup-content">
        <div className="mockup-info">
          <Link to="/" className="back-link">
            ← Back to Home
          </Link>

          <h1>{title}</h1>
          <p>{description}</p>

          <div className="mockup-nav-buttons">
            {prevRoute ? (
              <Link to={prevRoute} className="nav-button secondary-button">
                ← Previous
              </Link>
            ) : (
              <span />
            )}

            {nextRoute ? (
              <Link to={nextRoute} className="nav-button primary-button">
                Next →
              </Link>
            ) : (
              <span />
            )}
          </div>
        </div>

        <div className="mockup-phone-area">
          <PhoneMockup>{children}</PhoneMockup>
        </div>
      </div>
    </div>
  );
}

export default MockupLayout;