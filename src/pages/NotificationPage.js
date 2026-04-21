import { useState } from "react";
import MockupLayout from "../components/MockupLayout";
import ReelFeed from "../components/ReelFeed";
import reels from "../data/reels";

function NotificationPage() {
  const [activeNotificationId, setActiveNotificationId] = useState(null);

  const handleReelClick = (reel) => {
    if (reel.isAI) {
      setActiveNotificationId(reel.id);
    }
  };

  const handleContinue = (e) => {
    e.stopPropagation();
    setActiveNotificationId(null);
  };

  return (
    <MockupLayout
      title="Notification Design"
      description="This concept uses an interruptive notification to inform viewers when selected content may be AI-generated. The notice only appears for reels identified as AI-generated."
      prevRoute="/label"
      nextRoute="/reporting"
    >
      <ReelFeed
        reels={reels}
        onReelClick={handleReelClick}
        renderOverlay={(reel) =>
          activeNotificationId === reel.id ? (
            <div className="notification-overlay">
              <div
                className="notification-card"
                onClick={(e) => e.stopPropagation()}
              >
                <p className="notification-text">
                  This content may be AI-generated
                </p>

                <button
                  className="notification-button"
                  onClick={handleContinue}
                >
                  Continue
                </button>
              </div>
            </div>
          ) : null
        }
      />
    </MockupLayout>
  );
}

export default NotificationPage;