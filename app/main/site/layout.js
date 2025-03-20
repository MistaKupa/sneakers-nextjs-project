import Header from "@/app/_components/_header/Header";

export default function SiteLayout({ children }) {
  return (
    <section className="my-10 mx-auto flex items-center justify-center max-w-[1440px]">
      <div className="grid grid-cols-4 gap-x-10 gap-y-14">{children}</div>
    </section>
  );
}
