// The <html> and <body> tags are rendered by src/app/[locale]/layout.tsx.
// This pass-through layout only exists because Next.js requires a root
// layout for routes outside [locale] (the `/` redirect page).
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
