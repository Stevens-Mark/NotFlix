import PropTypes from 'prop-types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import items needed for data fetch
import { useFetch } from '../config/FetchData';
// import components
import Loader from './Loader';
import LoadError from './LoadError';
import Modal from './Modal';
import useModal from '../utils/useModal';
import MediaCard from './MediaCard';

/**
 * Renders each carousel slidder for each category
 * @function SimpleSlidder
 * @param {string} title of category
 * @param {string} fetchUrl: URL endpoint to make a data request for assocaited category
 * @returns {JSX}
 */
const SimpleSlidder = ({ title, fetchUrl }) => {
	const { modalIsOpen, mediaDetails, closeModal, handleDetails } = useModal();
	const { data, isLoading, isError } = useFetch(fetchUrl);
	const medias = data;

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
		<>
			<section className="row">
				<h2 className="row__title">{title}</h2>
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
									{medias.map((media) => (
										<MediaCard  key={media.id} media={media} handleDetails={handleDetails} />
									))}
								</Slider>
							</>
						)}
					</>
				)}
			</section>
			{modalIsOpen && <Modal closeModal={closeModal} media={mediaDetails} />}
		</>
	);
};

export default SimpleSlidder;

// Prototypes
SimpleSlidder.propTypes = {
	title: PropTypes.string.isRequired,
	fetchUrl: PropTypes.string.isRequired,
};

