import Link from "next/link"

interface NavigationProps {
    lang: string;
    backLabel: string;
}

export const Navigation = ({ lang, backLabel }: NavigationProps) => {

    return (
        <nav className="mb-8" aria-label="Breadcrumb">
            <Link
            href={`/${lang}#projects`}
            className="inline-flex items-center text-sm font-medium text-accent hover:text-accent/80 transition-colors uppercase tracking-widest"
            >
            ← {backLabel}
            </Link>
      </nav>
    )
}