import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="hg-header">Header</header>
      <div className="hg-columns">
        <nav className="hg-nav">Navigation</nav>
        <main className="hg-main">Main</main>
        <aside className="hg-aside">Sidebar</aside>
      </div>
      <footer className="hg-footer">Footer</footer>
    </>
  );
}
