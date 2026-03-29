import { BookAServiceModal } from "@/components";

export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      {children}
      <div>
        <BookAServiceModal />
      </div>
    </section>
  );
}
