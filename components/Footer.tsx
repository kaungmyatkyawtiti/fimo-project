import MyLogo from "./MyLogo";

export default function Footer() {
  return (
    <footer
      className="border-t border-border"
    >
      <div className="py-8 text-center text-foreground/85">
        © {new Date().getFullYear()}{" "}
        <MyLogo className="text-[17px]" />. All rights reserved.
      </div>
    </footer>
  )
}

