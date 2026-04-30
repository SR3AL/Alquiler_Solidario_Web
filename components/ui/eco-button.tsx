import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

type EcoButtonProps = {
  children: ReactNode;
  icon?: LucideIcon;
  variant?: 'primary' | 'secondary';
};

export function EcoButton({ children, icon: Icon, variant = 'primary' }: EcoButtonProps) {
  const baseStyles = 'inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition';

  const variantStyles =
    variant === 'secondary'
      ? 'border border-emerald-300 bg-white text-emerald-800 hover:bg-emerald-50'
      : 'bg-emerald-700 text-white hover:bg-emerald-800';

  return (
    <button className={`${baseStyles} ${variantStyles}`}>
      {Icon ? <Icon className="h-4 w-4" /> : null}
      {children}
    </button>
  );
}
