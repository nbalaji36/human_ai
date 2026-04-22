import DesignCard from "../components/DesignCard";

function HomePage() {
  return (
    <div className="home-page">
      <div className="home-content">
        <h1>Content Credibility Prototype</h1>
        <p className="home-subtitle">
          Explore four interface concepts for marking and verifying human-created content as being separate from AI-created content.
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
      </div>
    </div>
  );
}

export default HomePage;