import { useState } from "react";
import MockupLayout from "../components/MockupLayout";
import ReelFeed from "../components/ReelFeed";
import reels from "../data/reels";

function ReportingPage() {
  const [activeReportId, setActiveReportId] = useState(null);
  const [reportStage, setReportStage] = useState("idle");

  const openReportMenu = (e, reelId) => {
    e.stopPropagation();
    setActiveReportId(reelId);
    setReportStage("menu");
  };

  const submitReport = (e, reason) => {
    e.stopPropagation();
    setReportStage("submitted");
  };

  const closeFlow = (e) => {
    if (e) {
      e.stopPropagation();
    }
    setActiveReportId(null);
    setReportStage("idle");
  };

  return (
    <MockupLayout
      title="Reporting Flow Design"
      description="This concept gives users a way to flag suspicious, copied, or AI-generated content through a simple reporting flow. Each reel can be reported individually."
      prevRoute="/label"
    >
      <ReelFeed
        reels={reels}
        renderOverlay={(reel) => (
          <>
            <button
              className="report-trigger-button"
              onClick={(e) => openReportMenu(e, reel.id)}
            >
              Report
            </button>

            {activeReportId === reel.id && reportStage === "menu" && (
              <div className="report-overlay">
                <div
                  className="report-card"
                  onClick={(e) => e.stopPropagation()}
                >
                  <h3 className="report-title">Report this content</h3>
                  <p className="report-subtitle">
                    Why are you reporting this reel?
                  </p>

                  <div className="report-options">
                    <button
                      className="report-option-button"
                      onClick={(e) => submitReport(e, "ai")}
                    >
                      AI-generated or misleading
                    </button>

                    <button
                      className="report-option-button"
                      onClick={(e) => submitReport(e, "copied")}
                    >
                      Copied or reposted content
                    </button>

                    <button
                      className="report-option-button"
                      onClick={(e) => submitReport(e, "other")}
                    >
                      Other concern
                    </button>
                  </div>

                  <button className="report-cancel-button" onClick={closeFlow}>
                    Cancel
                  </button>
                </div>
              </div>
            )}

            {activeReportId === reel.id && reportStage === "submitted" && (
              <div className="report-overlay">
                <div
                  className="report-card report-confirmation-card"
                  onClick={(e) => e.stopPropagation()}
                >
                  <h3 className="report-title">Report submitted</h3>
                  <p className="report-subtitle">
                    Thank you. Your report helps improve content transparency.
                  </p>

                  <button className="report-done-button" onClick={closeFlow}>
                    Done
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      />
    </MockupLayout>
  );
}

export default ReportingPage;