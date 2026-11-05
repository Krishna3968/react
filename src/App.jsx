import { useState } from "react";
import { getOtp } from "./utils/loginApis";
import react from "react";
function Login() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtp, setShowOtp] = useState(false);

  const handleGetOTP = async () => {
    if (phoneNumber.length !== 10) {
      alert("Enter valid mobile number");
      return;
    }

    const response = await getOtp(phoneNumber);
    console.log(response);

    setShowOtp(true);
    alert("OTP sent successfully");
  };

  const handleVerifyOTP = () => {
    if (otp.length !== 6) {
      alert("Enter valid OTP");
      return;
    }

    alert("OTP verified successfully");
  };

  return (
    <div>
      <h2>Login</h2>

      {!showOtp ? (
        <>
          <input
            type="tel"
            placeholder="Enter mobile number"
            value={phoneNumber}
            maxLength={10}
            onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ""))}
          />

          <button onClick={handleGetOTP}>Get OTP</button>
        </>
      ) : (
        <>
          <p>Enter OTP sent to {phoneNumber}</p>

          <input
            type="text"
            placeholder="Enter 6 digit OTP"
            value={otp}
            maxLength={6}
            onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
          />

          <button onClick={handleVerifyOTP}>Verify OTP</button>

          <button onClick={() => setShowOtp(false)}>Change Number</button>
        </>
      )}
    </div>
  );
}

export default Login;
