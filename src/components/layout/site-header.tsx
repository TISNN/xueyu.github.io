import { ClipboardList, House, Info, Mail, Menu, Users, X } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { navItems } from '@/data/site';

const navIcons = [House, Info, ClipboardList, Users, Mail];

function desktopNavClass(isActive: boolean): string {
  return [
    'site-sidebar__link',
    isActive ? 'is-active' : '',
  ].join(' ');
}

function mobileNavClass(isActive: boolean): string {
  return [
    'text-sm transition-colors',
    isActive ? 'text-[#0f766e] font-semibold' : 'text-slate-700 hover:text-[#0f766e]',
  ].join(' ');
}

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <aside className="site-sidebar hidden md:flex">
        <NavLink to="/" className="site-sidebar__brand" onClick={() => setIsOpen(false)}>
          <div className="site-sidebar__brand-lockup">
            <span className="site-sidebar__brand-wordmark">StudyLands</span>
          </div>
          <span className="site-sidebar__brand-subtitle">学屿教育</span>
        </NavLink>

        <nav className="site-sidebar__nav">
          {navItems.map((item, index) => {
            const Icon = navIcons[index] ?? House;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) => desktopNavClass(isActive)}
              >
                <Icon size={20} strokeWidth={1.8} />
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </nav>

        <a
          href="https://app.studylandsedu.com"
          target="_blank"
          rel="noreferrer"
          className="site-sidebar__login"
        >
          登录
        </a>
      </aside>

      <header className="site-mobile-header md:hidden">
        <div className="brand-container flex h-16 items-center justify-between gap-4">
          <NavLink to="/" className="shrink-0" onClick={() => setIsOpen(false)}>
            <img
              src="/assets/images/banner/logo double.png"
              alt="学屿教育"
              className="h-9 w-auto"
            />
          </NavLink>

          <button
            type="button"
            className="inline-flex items-center rounded-md p-2 text-slate-700"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="切换导航"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {isOpen ? (
        <div className="border-b border-slate-200 bg-white md:hidden">
          <nav className="brand-container flex flex-col gap-3 py-4">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => mobileNavClass(isActive)}
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href="https://app.studylandsedu.com"
              target="_blank"
              rel="noreferrer"
              className="mt-1 inline-flex w-fit rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold text-[#0f766e]"
            >
              登录
            </a>
          </nav>
        </div>
      ) : null}
    </>
  );
}
