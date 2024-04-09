import { useRouter } from 'next/router';

import ALink from '~/components/features/custom-link';

import CartMenu from '~/components/common/partials/cart-menu';
import MainMenu from '~/components/common/partials/main-menu';
import SearchBox from '~/components/common/partials/search-box';
import LoginModal from '~/components/features/modals/login-modal';

import { headerTransprentList } from '~/utils/data/menu';

export default function Header(props) {
  const router = useRouter();

  const showMobileMenu = () => {
    document.querySelector('body').classList.add('mmenu-active');
  };

  return (
    <header
      className={`header header-transparent ${
        headerTransprentList.includes(router.pathname)
          ? 'p-relative bg-dark'
          : ''
      }`}
    >
      <div className="header-top">
        <div className="container-fluid">
          <div className="header-left">
            <div className="social-links inline-links">
              <ALink href="#" className="social-link">
                <i className="d-icon-instagram"></i>
              </ALink>
              <ALink href="#" className="social-link">
                <i className="fab fa-whatsapp"></i>
              </ALink>
            </div>
            <p className="welcome-msg text-uppercase">
              Estilo que te desafía a superar tus límites
            </p>
          </div>

          <div className="header-right">
            <ALink
              className="call"
              href="https://wa.me/593995155706"
              target="_blank"
            >
              <span>Llámanos: 099 515 5706</span>
            </ALink>
          </div>
        </div>
      </div>

      <div className="header-middle sticky-header fix-top sticky-content has-center">
        <div className="container-fluid">
          <div className="header-left">
            <ALink
              href="#"
              className="mobile-menu-toggle"
              onClick={showMobileMenu}
            >
              <i className="d-icon-bars2"></i>
            </ALink>

            <ALink href="/" className="logo mr-0">
              <img
                src="./images/home/logo.png"
                alt="logo"
                width="150"
                height="43"
              />
            </ALink>
          </div>

          <div className="header-center">
            <MainMenu />

            <span className="divider d-lg-show"></span>

            <SearchBox />
          </div>

          <div className="header-right">
            <span className="divider mr-4"></span>
            <CartMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
