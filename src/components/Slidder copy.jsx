import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import items needed for data fetch
import { useFetch } from '../config/useFetch';
// import function
import { cleanString } from '../utils/functions';
// import components
import Loader from './Loader';
import LoadError from './LoadError';
import MediaCard from './MediaCard';

/**
 * Renders each carousel slidder for each category
 * @function SimpleSlidder
 * @param {string} title of category
 * @param {string} fetchUrl: URL endpoint to make a data request for assocaited category
 * @returns {JSX}
 */
const SimpleSlidder = ({ title, fetchUrl }) => {
	const { pathname } = useLocation();
	const { data, isLoading, isError } = useFetch(fetchUrl);

	var settings = {
		dots: false,
		infinite: false,
		// lazyLoad: true,
		speed: 3000,
		slidesToShow: 6,
		slidesToScroll: 6,

		responsive: [
			{
				breakpoint: 1679,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 5,
				},
			},
			{
				breakpoint: 1439,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
				},
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					speed: 1500,
				},
			},
			{
				breakpoint: 460,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					speed: 1000,
				},
			},
		],
	};

	return (
		<section className="row">
			<h2 className="row__title">{title}</h2>
			<NavLink
				to={{
					pathname: `${pathname}/${cleanString(title)}`,
					dataProps: { data: data, title: title, url: fetchUrl },
				}}
			>
				See More..
			</NavLink>

			{isLoading ? (
				<div className="row__status">
					<Loader />
				</div>
			) : (
				<>
					{isError ? (
						<div className="row__status">
							<LoadError />
						</div>
					) : (
						<>
							<Slider {...settings}>
								{data.map((media) => (
									<MediaCard key={media.id} media={media} />
								))}
							</Slider>
						</>
					)}
				</>
			)}
		</section>
	);
};

export default SimpleSlidder;

// Prototypes
SimpleSlidder.propTypes = {
	title: PropTypes.string.isRequired,
	fetchUrl: PropTypes.string.isRequired,
};

