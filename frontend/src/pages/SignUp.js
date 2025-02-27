import React, { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Account created for ${email}`);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Signup</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit" className="bg-green-500 text-white p-2">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
