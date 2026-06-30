import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

export interface Crumb { label: string; to?: string; params?: Record<string, string>; }

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground">
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((c, i) => {
          const isLast = i === items.length - 1;
          const content: ReactNode = c.to && !isLast ? (
            <Link to={c.to as any} params={c.params as any} className="hover:text-foreground">{c.label}</Link>
          ) : (
            <span className={isLast ? "text-foreground font-medium" : ""}>{c.label}</span>
          );
          return (
            <li key={i} className="flex items-center gap-1">
              {content}
              {!isLast && <ChevronRight className="h-3 w-3 opacity-50" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
