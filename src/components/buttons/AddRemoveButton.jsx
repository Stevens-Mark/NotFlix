import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../../context/globalProvider';
// import images/icons
import plusIcon from '../../assets/icons/plusSolid.svg';
import tickIcon from '../../assets/icons/tickSolid.svg';

/**
 * Renders watchList add/remove button
 * @function AddRemoveButton
 * @param {Object} media: movie or TV show data
 * @param {string} classType: set depending if used in modal or slidder card
 * @returns {JSX}
 */
const AddRemoveButton = ({ media, classType }) => {

	const { watchListItems, addToWatchList, removeFromWatchList } =
		useContext(Context);

	const alreadyInWatchList = watchListItems.some(
		(item) => item.id === media.id
	);

	return (
		<>
			{alreadyInWatchList ? (
				<button
					className={`${classType} ${classType}--tick`}
					onClick={() => removeFromWatchList(media.id)}
				>
					<img src={tickIcon} alt="Remove from watch list" />
				</button>
			) : (
				<button
					className={`${classType} ${classType}--normal`}
					onClick={() => addToWatchList(media)}
				>
					<img src={plusIcon} alt="Add to watch list" />
				</button>
			)}
		</>
	);
};

export default AddRemoveButton;

// Prototypes
AddRemoveButton.propTypes = {
	media: PropTypes.object.isRequired,
	classType: PropTypes.string.isRequired,
};
