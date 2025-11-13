import { cn } from "@/lib/utils";

interface TextProps {
  children: React.ReactNode;
  className?: string;
}

function Title({
  children,
  className,
}: TextProps) {
  return (
    <h2
      className={cn(
        "text-2xl font-semibold capitalize text-foreground/90",
        className,
      )}
    >
      {children}
    </h2>
  )
}

function SubTitle({
  children,
  className,
}: TextProps) {
  return (
    <h3
      className={cn(
        "font-semibold text-lg",
        className,
      )}
    >
      {children}
    </h3>
  )
}

function SubText({
  children,
  className,
}: TextProps) {
  return (
    <p
      className={cn(
        "text-[14px] font-semibold text-muted-foreground",
        className,
      )}
    >
      {children}
    </p>
  )
}

export {
  Title,
  SubTitle,
  SubText,
};
