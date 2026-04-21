function ReelFeed({ reels, renderOverlay, onReelClick }) {
  return (
    <div className="reel-feed">
      {reels.map((reel) => (
        <div key={reel.id} className="reel-slide">
          <div
            className="reel-slide-inner"
            onClick={() => onReelClick && onReelClick(reel)}
          >
            <img
              src={reel.image}
              alt={`Reel ${reel.id}`}
              className="reel-image"
            />

            {renderOverlay && renderOverlay(reel)}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ReelFeed;