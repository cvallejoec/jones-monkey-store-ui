import { useRouter } from 'next/router';

import ALink from '~/components/features/custom-link';

import CartMenu from '~/components/common/partials/cart-menu';
import MainMenu from '~/components/common/partials/main-menu';
import SearchBox from '~/components/common/partials/search-box';
import LoginModal from '~/components/features/modals/login-modal';

import { headerTransprentList } from '~/utils/data/menu'

export default function Header( props ) {
    const router = useRouter();

    const showMobileMenu = () => {
        document.querySelector( 'body' ).classList.add( 'mmenu-active' );
    }

    return (
        <header className={ `header header-transparent ${ headerTransprentList.includes( router.pathname ) ? 'p-relative bg-dark' : '' }` }>
            <div className="header-top">
                <div className="container-fluid">
                    <div className="header-left">
                        <div className="social-links inline-links">
                            <ALink href="#" className="social-link social-twitter fab fa-twitter"></ALink>
                            <ALink href="#" className="social-link social-linkedin fab fa-linkedin-in"></ALink>
                            <ALink href="#" className="social-link social-facebook fab fa-facebook-f"></ALink>
                            <ALink href="#" className="social-link social-pinterest fab fa-pinterest-p"></ALink>
                        </div>
                        <p className="welcome-msg text-uppercase">Welcome to Riode message or remove it!</p>
                    </div>

                    <div className="header-right">
                        <ALink className="call" href="#">
                            <span>Call us: 123-456-7890</span>
                        </ALink>
                        <ALink href="/pages/faqs" className="ml-4">Faq</ALink>
                        <ALink href="#" className="ml-4">Newsletter</ALink>
                        <ALink href="/pages/contact-us" className="contact mr-1 ml-4">Contact us</ALink>
                        <span className="divider"></span>
                        <div className="dropdown">
                            <ALink href="#" className="text-white">USD</ALink>
                            <ul className="dropdown-box">
                                <li><ALink href="#">USD</ALink></li>
                                <li><ALink href="#">EUR</ALink></li>
                            </ul>
                        </div>
                        <span className="divider ml-3 d-lg-show"></span>
                        <div className="dropdown language-dropdown">
                            <ALink href="#" className="text-white">ENG</ALink>
                            <ul className="dropdown-box">
                                <li>
                                    <ALink href="#">ENG</ALink>
                                </li>
                                <li>
                                    <ALink href="#">FRH</ALink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="header-middle sticky-header fix-top sticky-content has-center">
                <div className="container-fluid">
                    <div className="header-left">
                        <ALink href="#" className="mobile-menu-toggle" onClick={ showMobileMenu }>
                            <i className="d-icon-bars2"></i>
                        </ALink>

                        <ALink href="/" className="logo mr-0">
                            <img src='./images/home/logo.png' alt="logo" width="150" height="43" />
                        </ALink>
                    </div>

                    <div className="header-center">
                        <MainMenu />

                        <span className="divider d-lg-show"></span>

                        <SearchBox />
                    </div>

                    <div className="header-right">
                        <LoginModal />

                        <ALink href="/pages/wishlist" className="wishlist">
                            <i className="d-icon-heart"></i>
                        </ALink>

                        <span className="divider mr-4"></span>

                        <CartMenu />
                    </div>
                </div>
            </div>
        </header >
    );
}