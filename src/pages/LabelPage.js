import MockupLayout from "../components/MockupLayout";
import ReelFeed from "../components/ReelFeed";
import reels from "../data/reels";

function LabelPage() {
  return (
    <MockupLayout
      title="Label Design"
      description="This concept adds a small platform-style label to indicate that selected content was made by a human and not AI. Only reels identified as human-created display the label."
      prevRoute="/watermark"
      nextRoute="/reporting"
    >
      <ReelFeed
        reels={reels}
        renderOverlay={(reel) =>
          reel.isAI ? <div className="ai-label-pill">Human-Created Content</div> : null
        }
      />
    </MockupLayout>
  );
}

export default LabelPage;