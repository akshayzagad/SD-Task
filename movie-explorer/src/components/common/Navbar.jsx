export function Brand({ onClick }) {
  return <button className="brand" onClick={onClick} aria-label="Movie Explorer home"><span className="brand-mark">◈</span> frame<span className="brand-dot">.</span></button>
}

export default function Navbar({ page, setPage, dark, setDark, query, onSearch, loggedIn, onLogout }) {
  return <header className="topbar"><div className="topbar-inner"><Brand onClick={() => setPage('home')} /><nav className="nav-links" aria-label="Main navigation"><button className={page === 'home' ? 'active' : ''} onClick={() => setPage('home')}>Discover</button><button className={page === 'favorites' ? 'active' : ''} onClick={() => setPage('favorites')}>My watchlist</button></nav><div className="header-actions"><div className="header-search"><span aria-hidden="true">⌕</span><input aria-label="Search movies" placeholder="Search movies..." value={query} onChange={e => onSearch(e.target.value)} /></div><button className="theme-button" onClick={() => setDark(!dark)} aria-label="Toggle color theme">{dark ? '☀' : '☾'}</button>{loggedIn && <button className="avatar" title="Sign out" aria-label="Sign out" onClick={onLogout}>A</button>}</div></div></header>
}
