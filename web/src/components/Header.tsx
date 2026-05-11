import { Link } from '#/components/ui/link'
import { Show, UserButton } from '@clerk/tanstack-react-start'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--header-bg)] px-4 backdrop-blur-lg">
      <nav className="gap-x-3 gap-y-2 py-3 sm:py-4">
        <div className="flex items-center gap-x-4 gap-y-1 pb-1 text-sm font-semibold sm:order-2 sm:w-auto sm:flex-nowrap sm:pb-0">
          <h2>
            <Link to="/">TI Pool</Link>
          </h2>
          <ThemeToggle />
          <Link to="/cards">Cards</Link> {/*This will get changed to Collection*/}
          <Link to="/pools">Pools</Link> {/*Ideally this will be hidden when users are not logged in*/}
          <Link to="/decks">Decks</Link> {/*Ideally this will be hidden when users are not logged in*/}
          
          <Show when="signed-out">
            <Link className="ml-auto" to="/login">Login / Sign Up</Link> {/*This needs to have a login by default, button at the bottom for signup if not signed up, no idea why this isn't doing that rn*/}
          </Show>

          <Show when="signed-in">
            <div className="ml-auto">
              <UserButton />
            </div>
          </Show> 
          {/*Need to add a card gallery button to view the whole card gallery*/}
        </div>

          {/* <details className="relative w-full sm:w-auto">
            <summary className="nav-link list-none cursor-pointer">
              Demos
            </summary>
            <div className="mt-2 min-w-56 rounded-xl border border-[var(--line)] bg-[var(--header-bg)] p-2 shadow-lg sm:absolute sm:right-0">
              <Link
                href="/demo/table"
                className="block rounded-lg px-3 py-2 text-sm text-[var(--sea-ink-soft)] no-underline transition hover:bg-[var(--link-bg-hover)] hover:text-[var(--sea-ink)]"
              >
                TanStack Table
              </Link>
              <a
                href="/demo/tanstack-query"
                className="block rounded-lg px-3 py-2 text-sm text-[var(--sea-ink-soft)] no-underline transition hover:bg-[var(--link-bg-hover)] hover:text-[var(--sea-ink)]"
              >
                TanStack Query
              </a>
              <a
                href="/demo/form/simple"
                className="block rounded-lg px-3 py-2 text-sm text-[var(--sea-ink-soft)] no-underline transition hover:bg-[var(--link-bg-hover)] hover:text-[var(--sea-ink)]"
              >
                Simple Form
              </a>
              <a
                href="/demo/form/address"
                className="block rounded-lg px-3 py-2 text-sm text-[var(--sea-ink-soft)] no-underline transition hover:bg-[var(--link-bg-hover)] hover:text-[var(--sea-ink)]"
              >
                Address Form
              </a>
              <a
                href="/schedule"
                className="block rounded-lg px-3 py-2 text-sm text-[var(--sea-ink-soft)] no-underline transition hover:bg-[var(--link-bg-hover)] hover:text-[var(--sea-ink)]"
              >
                Schedule
              </a>
              <a
                href="/speakers"
                className="block rounded-lg px-3 py-2 text-sm text-[var(--sea-ink-soft)] no-underline transition hover:bg-[var(--link-bg-hover)] hover:text-[var(--sea-ink)]"
              >
                Speakers
              </a>
              <a
                href="/talks"
                className="block rounded-lg px-3 py-2 text-sm text-[var(--sea-ink-soft)] no-underline transition hover:bg-[var(--link-bg-hover)] hover:text-[var(--sea-ink)]"
              >
                Sessions
              </a>
            </div>
          </details> */}
      </nav>
    </header>
  )
}
