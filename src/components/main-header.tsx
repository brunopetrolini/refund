import { Link, useLocation, useNavigate } from '@tanstack/react-router';

import RefundLogo from '@/assets/images/logo.svg?react';
import { Route as refundsPage } from '@/routes/index';
import { Route as newRefundPage } from '@/routes/new-refund';
import { Button } from './ui/button';
import { NavLink } from './ui/nav-link';

export function MainHeader() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="inline-flex w-full items-center justify-between">
      <Link to="/" aria-label="Refund Home">
        <RefundLogo className="h-8 w-auto" />
      </Link>
      <div className="inline-flex items-center gap-4">
        <NavLink
          title="Solicitações de reembolso"
          onClick={() => navigate({ to: refundsPage.to })}
          selected={location.pathname === '/'}
        />
        <Button
          title="Nova solicitação"
          onClick={() => navigate({ to: newRefundPage.to })}
        />
      </div>
    </div>
  );
}
