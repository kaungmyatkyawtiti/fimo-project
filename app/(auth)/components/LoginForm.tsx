"use client";

import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import AuthWelcome from "@/app/(auth)/components/AuthWelcome";
import { useState } from "react";
import FieldBox from "@/components/FieldBox";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form
      className="w-96 flex flex-col items-center justify-center space-y-7"
    >
      {/* email */}
      <FieldBox>
        <Mail size={24} className="text-movie-orange" />

        <input
          type="email"
          placeholder="Enter email"
          className="bg-transparent text-foreground placeholder-foreground/60 outline-none text-sm w-full h-full"
        />
      </FieldBox>

      {/* password */}
      {/* className="flex items-center w-full h-12 rounded-lg border border-border bg-background/50 hover:bg-background/70 focus-within:ring-2 focus-within:ring-primary/60 transition-all duration-200 overflow-hidden" */}
      <FieldBox>
        <Lock size={24} className="text-movie-orange" />

        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter password"
          className="bg-transparent text-foreground placeholder-foreground/60 outline-none text-sm w-full h-full"
        />

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="text-foreground/60 hover:text-foreground"
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </FieldBox>

      {/* remember me + forgot password */}
      <div className="w-full flex items-center gap-3">
        <input
          id="terms"
          type="checkbox"
          className="w-4 h-4 border border-border rounded bg-transparent focus:ring-1 focus:ring-secondary"
        />
        <p className="font-light text-foreground/80 text-sm">
          Remember me{" "}
          <a
            className="font-medium text-movie-blue hover:underline"
            href="#"
          >
            Forgot password?
          </a>
        </p>
      </div>

      {/* submit button */}
      <button
        type="submit"
        className="w-full h-11 rounded-full text-white bg-movie-orange hover:opacity-90 transition-opacity font-medium"
      >
        Login
      </button>

      <p className="w-full text-foreground/70 font-light text-sm">
        Don’t have an account?{" "}
        <a
          className="font-medium text-movie-blue hover:underline"
          href="#"
        >
          Sign up here!
        </a>
      </p>
    </form>
  );
};

export default LoginForm;
