import DesignCard from "../components/DesignCard";

function HomePage() {
  return (
    <div className="home-page">
      <div className="home-content">
        <h1>AI Content Credibility Prototype</h1>
        <p className="home-subtitle">
          Explore four interface concepts for disclosing and reporting
          AI-generated or copied content in a reels-style social media setting.
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
            title="Notification"
            description="A warning shown before or during viewing."
            route="/notification"
          />
          <DesignCard
            title="Reporting Flow"
            description="A user flow for flagging suspicious or AI-generated content."
            route="/reporting"
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;