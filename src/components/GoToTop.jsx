import { useEffect, useState } from 'react';
import upArrow from '../assets/icons/goToTopArrow.svg';

/**
* A go to top button appears after scrolling down a distance
 * @function GoToTop
 * @returns {JSX} back to top button
 */
const GoToTop = () => {

  const [showButton, setShowButton] = useState(false);   // The back-to-top button is hidden at the beginning

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    })
    return () => setShowButton(false);
  }, [])
    
  const scrollToTop = () => {   // This function will scroll the window to the top 
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    })
  }
  
  return (
    <>       
      {showButton && (
        <button className='toTop' onClick={scrollToTop} ><img src={upArrow} alt="Back to top arrow" title="Back To Top"/></button>
      )}
  </>
  )
}

export default GoToTop;