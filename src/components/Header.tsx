import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed absolute top-0 left-0 right-0 z-50 bg-transparent m-4">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between rounded-full bg-neutral-800/30 backdrop-blur-sm">
        <Link
          href="/"
          className="font-bold text-xl flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <span className="text-blue-600 dark:text-blue-400">&lt;\&gt;</span>
          <span className="text-white">Aizuddin</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-white">
          <Link
            href="/"
            className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/experience"
            className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Experience
          </Link>
        </nav>
      </div>
    </header>
  );
}
