import { Link } from "@remix-run/react";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <div>
            <Link to="/" className="text-2xl font-bold text-blue-800">
              線上靈籤
            </Link>
          </div>
          
          <div className="hidden md:flex items-center">
            <Link to="/" className="nav-link">
              首页
            </Link>
            <Link to="/about" className="nav-link">
              关于我们
            </Link>
            <Link to="/fortune" className="nav-link">
              在线抽签
            </Link>
            <Link to="/blog" className="nav-link">
              博客
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-500 hover:text-gray-600">
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>

        {/* Mobile menu (hidden by default) */}
        <div className="md:hidden hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-50">
              首页
            </Link>
            <Link to="/about" className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-50">
              关于我们
            </Link>
            <Link to="/fortune" className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-50">
              在线抽签
            </Link>
            <Link to="/blog" className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-50">
              博客
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
