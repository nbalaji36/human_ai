import MockupLayout from "../components/MockupLayout";
import ReelFeed from "../components/ReelFeed";
import reels from "../data/reels";
import watermark from "../assets/watermark.png";

function WatermarkPage() {
  return (
    <MockupLayout
      title="Watermark Design"
      description="This concept places a watermark image near the creator information area to indicate that AI-generated content is being shown. Only selected reels display the watermark."
      nextRoute="/label"
    >
      <ReelFeed
        reels={reels}
        renderOverlay={(reel) => (
          <>
            <div className="creator-info-area">
              <div className="creator-row">
                <div className="creator-avatar"></div>
                <span className="creator-name">@creator_name</span>
              </div>
            </div>

            {reel.isAI && (
              <img
                src={watermark}
                alt="AI watermark"
                className="watermark-image-overlay"
              />
            )}
          </>
        )}
      />
    </MockupLayout>
  );
}

export default WatermarkPage;