"use client";

import { ReactNode } from "react";

interface MailLinkProps {
  email: string;
  subject?: string;
  body?: string;
  /** Use Gmail web compose so it opens in browser on PC. If false, uses mailto: (depends on OS default mail app). */
  useGmailWeb?: boolean;
  children?: ReactNode;
  className?: string;
}

export default function MailLink({
  email,
  subject,
  body,
  useGmailWeb = true,
  children,
  className,
}: MailLinkProps) {
  const href =
    useGmailWeb
      ? (() => {
          const params = new URLSearchParams();
          params.set("view", "cm");
          params.set("fs", "1");
          params.set("to", email);
          if (subject) params.set("su", subject);
          if (body) params.set("body", body);
          return `https://mail.google.com/mail/?${params.toString()}`;
        })()
      : (() => {
          const params = new URLSearchParams();
          if (subject) params.set("subject", subject);
          if (body) params.set("body", body);
          const query = params.toString();
          return query ? `mailto:${email}?${query}` : `mailto:${email}`;
        })();

  return (
    <a href={href} className={className} target={useGmailWeb ? "_blank" : undefined} rel={useGmailWeb ? "noopener noreferrer" : undefined}>
      {children ?? email}
    </a>
  );
}
