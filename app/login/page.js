"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Logo from "../_components/Logo";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import SpinnerMin from "../_components/SpinnerMin";

export default function Login() {
  const [email, setEmail] = useState("");
  const [isLogging, setIslogging] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIslogging(true);
    setError("");
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    setIslogging(false);
    if (res.error) {
      setError("invaild email/password");
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 ">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md">
        <div className="mb-5 flex justify-center">
          <Logo />
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="email">email:</Label>
            <Input
              className="mt-2"
              id="email"
              type="email"
              autoComplete="email"
              required
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
            />
          </div>
          <div className="mt-5 mb-10">
            <label htmlFor="password">password:</label>
            <Input
              className="mt-2"
              autoComplete="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              type="password"
              placeholder="password"
            />
          </div>
          <button
            disabled={isLogging}
            type="submit"
            className="w-full bg-buttonColor text-white py-2 rounded-lg hover:bg-black transition duration-300"
          >
            {isLogging ? <SpinnerMin /> : "log in"}
          </button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
        <div className="text-center text-gray-500 mt-5">
          <p className="font-bold">demo credentials email and password</p>
          <p>user@example.com</p>
          <p>123</p>
        </div>
      </div>
    </div>
  );
}
