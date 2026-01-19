import './Signup Page Style/Signup.css';
import './Signup Page MediaQ/MediaQSignup.css';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleLogo } from 'phosphor-react';
import { useState } from 'react';
import axios from 'axios';

export default function Signup() {
     // OTP VERIFICATION AND LOGIN AND SIGN IN WORKING CORRECTLY.

    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();
    
    const handleSignup = async (e) => {
    e.preventDefault();

    if(password !== confirmPassword){
        alert("Passwords do not match");
        return;
    }

    try {
        await axios.post("http://localhost:5000/api/auth/signup", {
        // await axios.post("https://onlineshopping-1-for-testing-email-and.onrender.com/api/auth/signup", {
        fName,
        lName,
        email,
        password,
        phoneNumber
        });
        alert("Signup successful! Please login.");
        navigate("/");
    } catch (err) {
        alert("Signup failed");
    }
    };

    // EMAIL OTP VERIFICATION 
    const [otpSent, setOtpSent] = useState(false);
    const [otp, setOtp] = useState("");
    const [isVerified, setIsVerified] = useState(false);

    const requestOtp = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/api/otp/send-otp", { email });
            // await axios.post("https://onlineshopping-1-for-testing-email-and.onrender.com/api/otp/send-otp", { email });
            alert("OTP sent to your email");
            setOtpSent(true);
        } catch (err) {
            alert("Failed to send OTP");
        }
        };

        const verifyOtp = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/api/otp/verify-otp", { email, otp });
            // await axios.post("https://onlineshopping-1-for-testing-email-and.onrender.com/api/otp/verify-otp", { email, otp });
            alert("OTP verified successfully");
            setIsVerified(true);
        } catch (err) {
            alert("Invalid OTP");
        }
    };


    return (
        <div className='Signup-main'>
            <div className="Signup-container container-fluid">
                <div className="Signup-form-container d-flex align-items-center justify-content-center ">
                    <form className="Signup-form">
                        <div className="Signup-text-container1 text-center">
                            <p className="Signup-welcome-para1 text-white mb-2">Welcome to <span className='Signup-heading-1'>ONLINE</span> <span className='Signup-heading-2'>SHOPPING</span></p>
                            <p className='Signup-welcome-para2 text-white'>Create your account</p>
                        </div>
                        <div className="Signup-input-container1 d-flex flex-row gap-2">
                            <input type="text" value={fName} name='fName' onChange={(e)=>setFName(e.target.value)} className="Signup-input-fname mb-2" placeholder='First Name' required/>
                            <input type="text" value={lName} name='lName' onChange={(e)=>setLName(e.target.value)} className="Signup-input-lname mb-2" placeholder='Last Name' required/>
                        </div>
                        <div className="Signup-input-container1 mb-2">
                            <input type="number" value={phoneNumber} name='phoneNumber' onChange={(e)=>setPhoneNumber(e.target.value)} className="Signup-input-mobileNum" placeholder='Mobile Number' required/>
                        </div>
                        <div className="Signup-input-container1 mb-2"> 
                            <input type="email" value={email} name='email' onChange={(e)=>setEmail(e.target.value)} className="Signup-input-email" placeholder='Email' required/>
                        </div>
                        {/* request otp */}
                        <div className="signup-verify-otp-container text-center mb-2">
                            {!otpSent ? (
                                <button onClick={requestOtp} className="signup-verify-otp-btn text-white">
                                REQUEST OTP
                                </button>
                            ) : !isVerified ? (
                                <>
                                <input type="text" value={otp} onChange={(e)=>setOtp(e.target.value)} className='inputfield-otp' placeholder="Enter OTP" />
                                <button onClick={verifyOtp} className="signup-verify-otp-btn mt-2 text-white">
                                    VERIFY OTP
                                </button>
                                </>
                            ) : (
                                <p className="text-success">Email verified</p>
                            )}
                        </div>
                        <div className="Signup-input-container1 mb-2">
                            <input type="password" value={password} name="password" onChange={(e)=>setPassword(e.target.value)} required disabled={!isVerified} className="Signup-input-password" placeholder='Password' />
                        </div>
                        <div className="Signup-input-container1 mb-3">
                            <input type="password" value={confirmPassword} name='re-password' required disabled={!isVerified} onChange={(e)=>setConfirmPassword(e.target.value)} className="Signup-input-re-password" placeholder='Confirm Password' />
                        </div>
                        <div className="signup-btn-container text-center mb-2">
                            <button type='submit' onClick={handleSignup} disabled={!isVerified} className="signup-btn text-white" >SIGN UP</button>
                        </div>
                        <div className="signup-haveAcc-container text-center">
                            <p className="signup-haveAcc-para text-white">
                                Already have an account?
                                <Link to='/' className="signup-haveAcc-link text-decoration-none ">Sign up</Link>
                            </p>
                        </div>
                        <div className="signup-or-container text-center">
                            <p className="signup-or-para text-white">Or</p>
                        </div>
                        <div className="signup-acc-container text-center">
                            <Link className='signup-acc-link text-decoration-none text-white'>
                                <p className='signup-acc-para'>
                                    <GoogleLogo className='signup-social-icons d-inline-block bg-white rounded-circle me-2' color="#e94235" weight="fill" />
                                    CONTINUE WITH GOOGLE
                                </p>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

