import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {
  Menu,
  Moon,
  Sun,
  X,
} from 'lucide-react'

import { useLanguage } from '../../hooks/LanguageContext'
import { useTheme } from '../../hooks/ThemeContext'


export default function Header() {
  const { language, toggleLanguage, t } = useLanguage()
  const { theme, toggleTheme } = useTheme()

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigationItems = [
    {
      label: t.navigation.home,
      path: '/',
    },
    {
      label: t.navigation.about,
      path: '/about',
    },
    {
      label: t.navigation.skills,
      path: '/skills',
    },
    {
      label: t.navigation.experience,
      path: '/experience',
    },
    {
      label: t.navigation.projects,
      path: '/projects',
    },
    {
      label: t.navigation.education,
      path: '/education',
    },
    {
      label: t.navigation.certifications,
      path: '/certifications'
    },
    {
      label: t.navigation.contact,
      path: '/contact',
    },
  ]

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const handleLanguageToggle = () => {
    toggleLanguage()
  }

  const handleThemeToggle = () => {
    toggleTheme()
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-background)]/95 backdrop-blur">
      <div className="mx-auto max-w-[1200px] px-5">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex shrink-0 items-center gap-3 text-lg font-bold tracking-tight text-[var(--color-text-primary)] transition-opacity hover:opacity-70"
          >
            <img src="/images/logo/cmd_logo.webp" alt="CMD Logo" className="h-9 w-9 object-contain" />
            <span>Mamadou Coulibaly</span>
          </Link>

          {/* Desktop navigation */}
          <nav
            aria-label="Navigation principale"
            className="hidden items-center gap-7 lg:flex"
          >
            {navigationItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  [
                    'relative py-2 text-sm font-medium transition-colors',
                    isActive
                      ? 'text-[var(--color-text-primary)]'
                      : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]',
                  ].join(' ')
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop actions */}
          <div className="hidden items-center gap-2 lg:flex">
            {/* Language */}
            <button
              type="button"
              onClick={handleLanguageToggle}
              aria-label={
                language === 'fr'
                  ? 'Passer en anglais'
                  : 'Passer en français'
              }
              className="flex h-9 min-w-9 items-center justify-center rounded-lg px-2 font-mono text-xs font-semibold text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-surface-secondary)] hover:text-[var(--color-text-primary)]"
            >
              {language === 'fr' ? 'EN' : 'FR'}
            </button>

            {/* Theme */}
            <button
              type="button"
              onClick={handleThemeToggle}
              aria-label={
                theme === 'light'
                  ? t.theme.dark
                  : t.theme.light
              }
              className="flex h-9 w-9 items-center justify-center rounded-lg text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-surface-secondary)] hover:text-[var(--color-text-primary)]"
            >
              {theme === 'light' ? (
                <Moon
                  size={18}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              ) : (
                <Sun
                  size={18}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((current) => !current)}
            aria-expanded={isMenuOpen}
            aria-label={
              isMenuOpen
                ? t.actions.closeMenu
                : t.actions.menu
            }
            className="flex h-10 w-10 items-center justify-center rounded-lg text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-surface-secondary)] hover:text-[var(--color-text-primary)] lg:hidden"
          >
            {isMenuOpen ? (
              <X
                size={22}
                strokeWidth={1.8}
                aria-hidden="true"
              />
            ) : (
              <Menu
                size={22}
                strokeWidth={1.8}
                aria-hidden="true"
              />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="border-t border-[var(--color-border)] py-5 lg:hidden">
            <nav
              aria-label="Navigation mobile"
              className="flex flex-col"
            >
              {navigationItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    [
                      'border-b border-[var(--color-border-subtle)] py-4 text-sm font-medium transition-colors last:border-b-0',
                      isActive
                        ? 'text-[var(--color-accent)]'
                        : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]',
                    ].join(' ')
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* Mobile actions */}
            <div className="mt-5 flex items-center gap-2 border-t border-[var(--color-border)] pt-5">
              {/* Language */}
              <button
                type="button"
                onClick={handleLanguageToggle}
                aria-label={
                  language === 'fr'
                    ? 'Passer en anglais'
                    : 'Passer en français'
                }
                className="flex h-10 min-w-10 items-center justify-center rounded-lg border border-[var(--color-border)] px-3 font-mono text-xs font-semibold text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-surface-secondary)] hover:text-[var(--color-text-primary)]"
              >
                {language === 'fr' ? 'EN' : 'FR'}
              </button>

              {/* Theme */}
              <button
                type="button"
                onClick={handleThemeToggle}
                aria-label={
                  theme === 'light'
                    ? t.theme.dark
                    : t.theme.light
                }
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--color-border)] text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-surface-secondary)] hover:text-[var(--color-text-primary)]"
              >
                {theme === 'light' ? (
                  <Moon
                    size={18}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                ) : (
                  <Sun
                    size={18}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}