import React, { useState } from "react";
import axios from "axios";

export const VerificationRequest = ({ email, name }) => {
    const [coachifyId, setCoachifyId] = useState("");

    const handleSubmit = async () => {
        try {
            const response = await axios.post("/user/request-verification", {
                name,
                email,
                coachifyId,
            });

            alert("Verification request sent successfully!");
        } catch (error) {
            console.error("Error sending verification request:", error);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center p-5 gap-5">
            <h2 className="text-4xl">Verification Required</h2>
            <p>Please enter your Coachify ID to request verification.</p>
            <input
                type="text"
                placeholder="Enter Coachify ID"
                value={coachifyId}
                onChange={(e) => setCoachifyId(e.target.value)}
                className="p-2 border rounded"
            />
            <button onClick={handleSubmit} className="p-2 bg-green-500 text-white rounded">
                Submit Request
            </button>
        </div>
    );
};
