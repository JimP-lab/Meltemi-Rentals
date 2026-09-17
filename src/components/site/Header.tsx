import { useState } from "react";

const NAV = [
  { href: "#pricing", label: "Pricing" },
  { href: "#fleet", label: "Fleet" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85">
      <div className="section-x flex h-16 items-center gap-3">
        <a
          href="#top"
          className="flex min-w-0 items-center gap-2 text-lg font-semibold tracking-tight text-foreground"
        >
          <span
            aria-hidden="true"
            className="grid size-9 shrink-0 place-items-center rounded-full bg-primary text-sm font-bold text-primary-foreground"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 36 36"
              className="size-6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="26" cy="9.5" r="3" className="fill-accent" />
              <path
                d="M7.5 25.5c5.3 0 9.1-2.8 11.4-7.4C20.9 14 23.2 11.5 27 11.5"
                stroke="currentColor"
                strokeWidth="2.8"
                strokeLinecap="round"
              />
              <path
                d="M8 28.5c4.8-1.4 9.4-1.4 14.2 0"
                stroke="currentColor"
                strokeWidth="2.1"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <span className="truncate font-display">Meltemi Rentals</span>
        </a>

        <nav aria-label="Primary" className="ml-auto hidden items-center gap-6 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#request"
          className="ml-auto inline-flex h-11 shrink-0 items-center justify-center rounded-full bg-primary px-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-aegean md:ml-4"
        >
          Request your car
        </a>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-border text-foreground md:hidden"
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-border bg-background md:hidden">
          <ul className="section-x flex flex-col py-2">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base font-medium text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
