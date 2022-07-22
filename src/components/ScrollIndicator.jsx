import { useState, useEffect } from 'react';

/**
 * @function ScrollIndicator
 * @returns {JSX} page scroll Indicator at top of screen
 */
const ScrollIndicator = () => {
	const [scrollTop, setScrollTop] = useState(0);

	const onScroll = () => {
		// gets or sets the number of pixels that an element's content is scrolled vertically
		const winScroll = document.documentElement.scrollTop; 
		// scrollHeight: height of an element's content - clientHeight: inner height of an element in pixels
		const height =
			document.documentElement.scrollHeight -
			document.documentElement.clientHeight;
		const scrolled = (winScroll / height) * 100;
		setScrollTop(scrolled);
	};

	useEffect(() => {
		window.addEventListener('scroll', onScroll);
		return () => {
			window.removeEventListener('scroll', onScroll);
		};
	}, []);

	return (
		<div className="scrollIndicator " style={{ width: `${scrollTop}%` }}></div>
	);
};

export default ScrollIndicator;
