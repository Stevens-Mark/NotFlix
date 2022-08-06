import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../context/globalProvider';
import { NavLink, useLocation } from 'react-router-dom';
// import slidder package
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import items needed for data fetch
import axios from '../config/requests';
// import function
import { cleanString } from '../utils/functions';
// import components
import Loader from './Loader';
import LoadError from './LoadError';
import MediaCard from './MediaCard';
import Animate from '../utils/Animate';

/**
 * Renders each carousel slidder for each category
 * @function SimpleSlidder
 * @param {string} title of category
 * @param {string} fetchUrl: URL endpoint to make a data request for assocaited category
 * @returns {JSX}
 */
const SimpleSlidder = ({ title, fetchUrl }) => {
	const { setShowData, setTotalPages } = useContext(Context);
	const { pathname } = useLocation();

	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	const [showLink, setShowLink] = useState(false);

	useEffect(() => {
		// cancel status used to control state update when componet unmounts
		let cancel = false;

		async function fetchData() {
			setIsLoading(true);
			try {
				const request = await axios.get(fetchUrl);
				// const request = await axios.get(''); // used for mocking data
				if (cancel) return;
				setData(request.data.results);
				setTotalPages(request.data.total_pages);
			} catch (err) {
				console.log(err);
				if (cancel) return;
				setIsError(true);
			} finally {
				if (cancel) return;
				setIsLoading(false);
			}
		}
		fetchData();
		return () => {
			cancel = true;
		};
	}, [fetchUrl, setTotalPages]);

	var settings = {
		dots: false,
		infinite: false,
		lazyLoad: true,
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
			<span className="row__moreLink">
				<button
					className="row__button"
					aria-label="Open or close show more media items link"
					onClick={() => setShowLink((prevShowLink) => !prevShowLink)}
				>
					{title}
				</button>
				<div className="row__linkContainer">
					<Animate
						show={showLink}
						animateIn={'linkSlideIn'}
						animateOut={'linkSlideOut'}
					>
						<NavLink
							className="row__link"
							to={{
								pathname: `${pathname}/${cleanString(title)}`,
								dataProps: { title: title, url: fetchUrl },
							}}
							onClick={() => setShowData(data)}
						>
							See More ...
						</NavLink>
					</Animate>
				</div>
			</span>

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

