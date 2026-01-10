import { Link, useLocation } from '@tanstack/react-router';

import RefundLogo from '@/assets/images/logo.svg?react';
import { Button } from './ui/button';
import { NavLink } from './ui/nav-link';

export function MainHeader() {
  const location = useLocation();

  return (
    <div className="inline-flex w-full items-center justify-between">
      <Link to="/" aria-label="Refund Home">
        <RefundLogo className="h-8 w-auto" />
      </Link>
      <div className="inline-flex items-center gap-4">
        <NavLink
          title="Solicitações de reembolso"
          onClick={() => alert('Solicitações de reembolso')}
          selected={location.pathname === '/'}
        />
        <Button
          title="Nova solicitação"
          onClick={() => alert('Button clicked')}
        />
      </div>
    </div>
  );
}
