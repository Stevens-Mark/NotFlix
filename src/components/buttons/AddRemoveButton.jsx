import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../../context/globalProvider';
// import images/icons
import addIcon from '../../assets/icons/plusSolid.svg';
import removeIcon from '../../assets/icons/minusSolid.svg';

/**
 * Renders watchList add/remove button
 * @function AddRemoveButton
 * @param {Object} media: movie or TV show data
 * @param {string} classType: set depending if used in modal or slidder card
 * @returns {JSX}
 */
const AddRemoveButton = ({ media, classType }) => {

	const { watchListItems, addToWatchList, removeFromWatchList } =	useContext(Context);

	const alreadyInWatchList = watchListItems.some((item) => item.id === media.id);

	return (
		<>
			{alreadyInWatchList ? (
				<button
					className={`${classType} ${classType}--tick`}
					onClick={() => removeFromWatchList(media.id)}
				>
					<img src={removeIcon} alt="Remove from watch list" />
				</button>
			) : (
				<button
					className={`${classType} ${classType}--normal`}
					onClick={() => addToWatchList(media)}
				>
					<img src={addIcon} alt="Add to watch list" />
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
