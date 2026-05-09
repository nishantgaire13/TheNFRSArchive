import type { ComponentPropsWithoutRef } from "react";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "link";

export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
	variant?: ButtonVariant;
	href?: string;
	className?: string;
}

const base =
	"inline-flex items-center justify-center font-sans text-sm font-medium min-h-[44px] min-w-[44px] px-5 py-2.5 rounded-md transition-[transform,box-shadow,background-color,color] duration-150 ease-out focus-visible:outline-none focus-visible:[box-shadow:var(--focus-ring)]";

const variantStyles: Record<ButtonVariant, string> = {
	primary:
		"bg-accent text-accent-fg shadow-clay-sm hover:bg-accent-hover hover:-translate-y-px hover:shadow-clay-md active:translate-y-0",
	secondary:
		"bg-bg-elevated text-text border border-border shadow-clay-sm hover:border-border-strong hover:-translate-y-px hover:shadow-clay-md active:translate-y-0",
	ghost:
		"bg-transparent text-text-muted hover:bg-bg-subtle hover:text-text",
	link:
		"bg-transparent text-accent underline underline-offset-2 hover:text-accent-hover px-0 min-w-0 min-h-0",
};

export function Button({
	variant = "primary",
	href,
	className = "",
	children,
	...props
}: ButtonProps) {
	const classes = `${base} ${variantStyles[variant]} ${className}`;

	if (href) {
		return (
			<a href={href} className={classes}>
				{children}
			</a>
		);
	}

	return (
		<button type="button" className={classes} {...props}>
			{children}
		</button>
	);
}
