import React from "react";
import { LoginForm } from "../components/LoginForm";
import Link from "next/link";

export default function Login() {
  return (
    <>
      <LoginForm />
      <div>
        <Link href="/createAccount">
          Create Account
        </Link>
      </div>
      <div>
        <Link href="/forgotPassword">
          Forgot Password?
        </Link>
      </div>
    </>
  );
}
