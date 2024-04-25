import type { Action } from 'svelte/action';

export const horizontalSwipe: Action<
	HTMLElement,
	undefined,
	{
		'on:swipeLeft'?: () => void;
		'on:swipeRight'?: () => void;
	}
> = (node) => {
	let touchstartX = 0;
	let touchendX = 0;

	node.ontouchstart = (e) => {
		touchstartX = e.changedTouches[0].screenX;
	};

	node.ontouchend = (e) => {
		touchendX = e.changedTouches[0].screenX;
        
		const isSwappingLeft = touchendX < touchstartX;
		const isSwappingRight = touchendX > touchstartX;

		if (isSwappingLeft) {
			node.dispatchEvent(new CustomEvent('swipeLeft'));
		}

		if (isSwappingRight) {
			node.dispatchEvent(new CustomEvent('swipeRight'));
		}
	};
};
