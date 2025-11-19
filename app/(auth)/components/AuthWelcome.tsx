import { ChevronDown } from "lucide-react";
import Image from "next/image";

interface AuthWelcomeProps {
  title: string;
  subtitle: string;
}

const AuthWelcome = ({
  title = "Welcome Back!",
  subtitle = "Your journey starts here — sign in to continue.",
}: AuthWelcomeProps) => {
  return (
    <div
      className="relative w-full flex flex-col lg:flex-col-reverse items-center justify-center lg:border-l border-dashed border-border py-10 lg:py-0 min-h-dvh"
    >
      <div className="py-5 text-center space-y-3">
        <h2 className="text-4xl font-semibold text-foreground">{title}</h2>
        <p className="text-md text-foreground/90">{subtitle}</p>
      </div>

      <Image
        src="/login.png"
        alt="Illustration"
        width={700}
        height={700}
        className="object-cover w-full max-w-[600px] max-h-[500px]"
        loading="eager"
        priority
      />

      {/* scroll hint */}
      <div className="absolute bottom-6 flex flex-col items-center animate-bounce lg:hidden text-foreground/90">
        <span className="text-sm mb-1">Scroll down</span>
        <ChevronDown size={20} />
      </div>
    </div>
  );
};

export default AuthWelcome;
