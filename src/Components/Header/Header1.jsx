import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
export default function Header1({ variant }) {
  const [mobileToggle, setMobileToggle] = useState(false);
  const [isSticky, setIsSticky] = useState();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const heroHeight = window.innerHeight; // Height of hero section
      
      // Show header when scrolling past hero area
      if (currentScrollPos > heroHeight * 0.8) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }

      // Sticky behavior when header is visible
      if (showHeader) {
        if (currentScrollPos > prevScrollPos) {
          setIsSticky('cs-gescout_sticky'); // Scrolling down
        } else if (currentScrollPos !== 0) {
          setIsSticky('cs-gescout_show cs-gescout_sticky'); // Scrolling up
        } else {
          setIsSticky();
        }
      }
      
      setPrevScrollPos(currentScrollPos); // Update previous scroll position
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup the event listener
    };
  }, [prevScrollPos, showHeader]);

  return (
    <div className={`header-area2 header_nav_03 ${showHeader ? 'show-on-scroll' : ''}`}>
      <header className={`cs_site_header cs_style_1 ${variant ? variant : ''} cs_sticky_header cs_site_header_full_width`}>
        <div className="cs_main_header cs_accent_bg">
          <div className="container">
            <div className="cs_main_header_in">
              <div className="cs_main_header_left">
                <Link className="cs_site_branding" to="/">
                  <img src="/assets/img/logo/header-logo1.png" alt="Logo" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
    
  );
}
