import { useState } from "react";

export default function LoginForm() {
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [submittedResult, setSubmittedResult] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); // prevent page reloading on form submit

        // add some password validation
        if (userPassword.length < 5) {
            setSubmittedResult("Password must be at least 5 characters long");
        } else if (userPassword === userEmail) {
            setSubmittedResult("Password must not match email address");
        } else {
            setSubmittedResult("Successful login.");
        }
    };

    return (
        <div className="componentBox">
            <form onSubmit={handleSubmit}>
                <div className="formRow">
                    <label htmlFor="userEmail">Email Address:</label>
                    <input
                        type="email"
                        value={userEmail}
                        name="userEmail"
                        onChange={(e) => setUserEmail(e.target.value)}
                    />
                    <label htmlFor="userPassword">Password:</label>
                    <input
                        type="password"
                        value={userPassword}
                        name="userPassword"
                        onChange={(e) => setUserPassword(e.target.value)}
                    />
                    <button>Log In</button>
                    {submittedResult && <p>{submittedResult}</p>}
                </div>
            </form>
        </div>
    );
}
