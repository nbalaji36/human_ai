import DesignCard from "../components/DesignCard";

function HomePage() {
  return (
    <div className="home-page">
      <div className="home-content">
        <h1>Content Credibility Prototype</h1>
        <p className="home-subtitle">
          Explore three interface concepts for marking and verifying human-created content as being separate from AI-created content.
        </p>

        <div className="card-grid">
          <DesignCard
            title="Watermark"
            description="A visible mark placed directly on the reel content."
            route="/watermark"
          />
          <DesignCard
            title="Label"
            description="A small disclosure tag placed near post metadata."
            route="/label"
          />
          <DesignCard
            title="Reporting Flow"
            description="A user flow for flagging suspicious or AI-generated content."
            route="/reporting"
          />
        </div>

        <section className="survey-results" aria-labelledby="survey-results-heading">
          <div className="survey-results-header">
            <h2 id="survey-results-heading">Survey Results</h2>
            <p className="survey-results-lede">
              Quick summary of participants' reactions to the three prototype concepts.
            </p>
          </div>

          <div className="survey-panel survey-questions-panel">
            <h3 className="survey-subheading">Survey questions</h3>
                <p className="survey-q-text">
                  1. How would you describe your reaction to the watermark concept
                  (i.e., concept #1)?
                </p>
                    <span className="survey-scale-pill">
                      7-point scale from “Extremely negative” to “Extremely
                      positive”
                    </span>
                <p className="survey-q-text">
                  2. How would you describe your reaction to the label concept (i.e.,
                  concept #2)?
                </p>
                    <span className="survey-scale-pill">
                      7-point scale from “Extremely negative” to “Extremely
                      positive”
                    </span>
                <p className="survey-q-text">
                  3. How would you describe your reaction to the reporting flow
                  concept (i.e., concept #3)?
                </p>
                    <span className="survey-scale-pill">
                      7-point scale from “Extremely negative” to “Extremely
                      positive”
                    </span>
                    <p className="survey-q-text">
                  4. Which of the 4 concepts was your favorite?
                </p>
                    <span className="survey-scale-pill">
                    Multiple choice: 1. Watermark (Concept #1) 2. Label (Concept #2) 3. Reporting Flow (Concept #3)
                    </span>
                <p className="survey-q-text">
                  5. Why was that concept your favorite?
                </p>
                    <span className="survey-scale-pill">
                      Free response
                    </span>
                    <p className="survey-q-text">
                  6. How would you describe your reaction to the reporting flow
                  concept (i.e., concept #3)?
                </p>
                    <span className="survey-scale-pill">
                      Free response
                    </span>
          </div>

          <div className="survey-sample-strip" aria-label="Sample size">
            <h3 className="survey-subheading survey-subheading-inline">2. Sample</h3>
            <div className="survey-n-badge" title="Sample size">
              <span className="survey-n-value">n = 5</span>
              <span className="survey-n-label">participants</span>
            </div>
          </div>

          <div className="survey-panel survey-findings-panel">
            <h3 className="survey-subheading">3. Findings</h3>

            <div className="survey-preference-block">
              <h4 className="survey-mini-heading">Concept preference (ranked)</h4>
              <div className="survey-rank-ladder" role="list">
                <div className="survey-rank-row rank-1" role="listitem">
                  <span className="survey-rank-medal" aria-hidden="true">
                    1
                  </span>
                  <div className="survey-rank-body">
                    <span className="survey-rank-name">Label</span>
                    <span className="survey-rank-bar" style={{ width: "100%" }} />
                  </div>
                </div>
                <div className="survey-rank-row rank-2" role="listitem">
                  <span className="survey-rank-medal" aria-hidden="true">
                    2
                  </span>
                  <div className="survey-rank-body">
                    <span className="survey-rank-name">Reporting Flow</span>
                    <span className="survey-rank-bar" style={{ width: "72%" }} />
                  </div>
                </div>
                <div className="survey-rank-row rank-3" role="listitem">
                  <span className="survey-rank-medal" aria-hidden="true">
                    3
                  </span>
                  <div className="survey-rank-body">
                    <span className="survey-rank-name">Watermark</span>
                    <span className="survey-rank-bar" style={{ width: "48%" }} />
                  </div>
                </div>
              </div>
              <p className="survey-rank-note">
                Bars are illustrative of aggregate rank order, not exact vote
                counts.
              </p>
            </div>

            <div className="survey-insight-grid">
              <blockquote className="survey-quote-card">
                <p>
                  3 participants preferred the <strong>label (concept #2)</strong>{" "}
                  because it quickly communicated the content’s status while not
                  being too distracting.
                </p>
              </blockquote>
              <div className="survey-quote-card">
                <p>
                  Multiple participants
                  mentioned how these concepts could help <strong>personalize their feed</strong>
                  &nbsp;(e.g., filtering to only human-created content).
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default HomePage;