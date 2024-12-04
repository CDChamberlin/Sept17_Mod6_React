import { useState } from "react";

function LoginForm() {
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [submitResult, setSubmitResult] = useState("");

    const handleSubmit = (e) => {};

    return (
        <div className="componentBox">
            <form onSubmit={handleSubmit}>
                <div className="formRow">
                    <label for="userEmail">Email Address</label>
                    <input
                        type="email"
                        id="userEmail"
                        name="userEmail"
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                    />
                </div>
                <div className="formRow">
                    <label for="userPassword">Password</label>
                    <input
                        type="password"
                        id="userPassword"
                        name="userPassword"
                        value={userPassword}
                        onChange={(e) => setUserPassword(e.target.value)}
                    />
                </div>
                <button>Log In</button>
                <p>{submitResult}</p>
            </form>
        </div>
    );
}
