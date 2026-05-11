"use client";

import { useEffect, useRef, useCallback } from "react";

/**
 * Observes all [data-entrance] children within `containerRef`.
 * Adds "entrance-ready" immediately, then "entrance-visible" when
 * each element enters the viewport (subject to threshold).
 *
 * For elements with a `data-stagger` attribute, the value (ms) is
 * applied as `transition-delay` on `.entrance-visible`.
 */
export function useEntranceAnimation(
	containerRef: React.RefObject<HTMLElement | null>,
	threshold = 0.1
) {
	const observed = useRef(false);

	const run = useCallback(() => {
		const el = containerRef.current;
		if (!el || observed.current) return;

		const targets = Array.from(el.querySelectorAll("[data-entrance]"));
		if (!targets.length) return;

		observed.current = true;

		const io = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const delayAttr = entry.target.getAttribute("data-stagger");
						if (delayAttr) {
							const ms = parseInt(delayAttr, 10);
							if (!isNaN(ms)) {
								(entry.target as HTMLElement).style.setProperty(
									"--entrance-delay",
									`${ms}ms`
								);
							}
						}
						entry.target.classList.add("entrance-visible");
						io.unobserve(entry.target);
					}
				});
			},
			{ threshold }
		);

		targets.forEach((t) => {
			t.classList.add("entrance-ready");
			io.observe(t);
		});

		return () => io.disconnect();
	}, [containerRef, threshold]);

	useEffect(() => {
		// Small delay so the DOM has settled after client hydration
		const id = setTimeout(run, 10);
		return () => clearTimeout(id);
	}, [run]);
}