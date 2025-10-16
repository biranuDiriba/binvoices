import { inter } from "./ui/fonts";
import "@/app/ui/global.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s |  Production Ready Dashboard",
    default: "Acme Dashboard",
  },
  description: "Demonstrating production ready dashboard.",
  metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
