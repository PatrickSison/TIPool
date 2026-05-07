export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="page-wrap px-4 py-12">
      <section className="island-shell rounded-2xl p-6 sm:p-8 flex justify-center">
        <div className="max-w-480">{children}</div>
      </section>
    </main>
  );
};
