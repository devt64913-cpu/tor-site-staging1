"use client";

import { ReactNode } from "react";

interface MailLinkProps {
  email: string;
  subject?: string;
  body?: string;
  children?: ReactNode;
  className?: string;
}

export default function MailLink({ email, subject, body, children, className }: MailLinkProps) {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const query = params.toString();
  const href = query ? `mailto:${email}?${query}` : `mailto:${email}`;

  return (
    <a href={href} className={className}>
      {children ?? email}
    </a>
  );
}
