function PhoneMockup({ children }) {
  return (
    <div className="phone-wrapper">
      <div className="phone-frame">
        <div className="phone-notch"></div>
        <div className="phone-screen">{children}</div>
      </div>
    </div>
  );
}

export default PhoneMockup;