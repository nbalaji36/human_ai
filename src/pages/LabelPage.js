import MockupLayout from "../components/MockupLayout";
import ReelFeed from "../components/ReelFeed";
import reels from "../data/reels";

function LabelPage() {
  return (
    <MockupLayout
      title="Label Design"
      description="This concept adds a small platform-style label to indicate that selected content was made with AI. Only reels identified as AI-generated display the label."
      prevRoute="/watermark"
      nextRoute="/notification"
    >
      <ReelFeed
        reels={reels}
        renderOverlay={(reel) =>
          reel.isAI ? <div className="ai-label-pill">Made with AI</div> : null
        }
      />
    </MockupLayout>
  );
}

export default LabelPage;