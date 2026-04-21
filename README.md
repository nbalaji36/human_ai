# Human AI Frontend Prototype

## Overview
This project is a React-based prototype that simulates how social media platforms might display and handle AI-generated content in a reels-style interface.

It includes four design concepts:
- Watermark (visible mark on AI-generated content)
- Label (small “Made with AI” tag)
- Notification (warning shown when interacting with AI content)
- Reporting Flow (user reporting system for suspicious or AI-generated content)

The app uses a phone-style UI with vertically scrollable reels (static images). Some reels are marked as AI-generated, and each design behaves differently depending on that.

---

## Setup & Run Instructions

Run the following commands:

npm install

npm start


Then open your browser and go to:

http://localhost:3000


---

## Requirements

- Node.js (version 18 or higher recommended)
- npm (comes with Node)

Check your version with:

node -v


---

## Important Notes

- Make sure all required images exist in `src/assets/`
- Filenames must match exactly (case-sensitive):
  - image_1.png
  - image_2.png
  - image_3.png
  - image_4.png
  - image_5.png
  - watermark.png

- If the app doesn’t start due to port issues:

npm start -- --port 3001


---

## That’s It

If you run the commands above, the app should work locally.
