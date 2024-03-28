import React from 'react';
import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// import Custom Components
import ALink from '~/components/features/custom-link';
import OwlCarousel from '~/components/features/owl-carousel';

import { fadeInUpShorter, fadeInUp, fadeIn } from '~/utils/data/keyframes';
import { introSlider } from '~/utils/data/carousel';

function IntroSection() {
  return (
    <section className="intro-section">
      <OwlCarousel
        adClass="owl-theme owl-dot-inner owl-nav-fade owl-dot-white intro-slider animation-slider"
        options={introSlider}
      >
        <div
          className="intro-slide1 banner banner-fixed"
          style={{
            backgroundImage: `url(./images/home/slides/hero-2.jpg)`,
            backgroundColor: '#666',
          }}
        >
          <div className="banner-content x-50 y-50 text-center">
            <Reveal keyframes={fadeIn} duration={1200} delay={500}>
              <h4 className="banner-subtitle font-weight-semi-bold text-primary">
                Nueva Colección
              </h4>
            </Reveal>

            <Reveal keyframes={fadeInUp} duration={1200} delay={800}>
              <h3 className="banner-title font-secondary text-uppercase text-white">
                {/* Brilla en el gimnasio */}
                {/* ¡Hazlo con estilo! */}
                Ropa que inspira
              </h3>
            </Reveal>

            <Reveal keyframes={fadeInUp} duration={1200} delay={1100}>
              <p className="ls-normal">
                Potencia tu estilo a partir de <strong>$5.00</strong>
              </p>
            </Reveal>

            <Reveal keyframes={fadeInUp} duration={1200} delay={1300}>
              <ALink href="/shop" className="btn btn-outline btn-white">
                Compra Ahora
              </ALink>
            </Reveal>

            <h4 className="bg-text w-100">{new Date().getFullYear()}</h4>
          </div>
        </div>
        <div
          className="intro-slide2 banner banner-fixed"
          style={{
            backgroundImage: `url(./images/home/slides/2.jpg)`,
            backgroundColor: '#666',
          }}
        >
          <div className="banner-content x-50 y-50 text-center">
            <Reveal keyframes={fadeIn} duration={2000} delay={300}>
              <h3 className="banner-title font-secondary text-white text-uppercase font-weight-bold">
                Brand Lookbook 2021
              </h3>
            </Reveal>

            <Reveal keyframes={fadeIn} duration={1500} delay={900}>
              <p className="text-white">
                International Delivery From Just $99.00
              </p>
            </Reveal>

            <Reveal keyframes={fadeInUpShorter} duration={1000} delay={1000}>
              <ALink href="/shop" className="btn btn-white btn-outline">
                Discover Shop<i className="d-icon-arrow-right"></i>
              </ALink>
            </Reveal>
          </div>
        </div>
      </OwlCarousel>

      <div className="row gutter-no">
        <div className="col-lg-3 col-sm-6">
          <div className="intro-banner1 banner banner-fixed">
            <figure>
              <LazyLoadImage
                threshold={300}
                src="./images/home/categories/1.jpg"
                effect="opacity"
                alt="category"
                width="480"
                height="400"
                style={{ backgroundColor: '#444' }}
              />
            </figure>

            <div className="banner-content y-50">
              <Reveal keyframes={fadeIn} triggerOnce>
                <h3 className="banner-title font-secondary font-weight-normal text-uppercase text-white">
                  Buy 2, <strong className="text-primary">Get 1 Free*</strong>
                  <br />
                  on everything
                </h3>
                <p className="text-white mb-6">
                  Add 3 products to cart, Terms apply
                </p>
                <ALink
                  href="/shop"
                  className="btn btn-outline btn-white btn-md"
                >
                  Shop Collection
                </ALink>
              </Reveal>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div
            className="category category-absolute category-overlay overlay-dark text-white"
            style={{ backgroundColor: '#333' }}
          >
            <ALink href={{ pathname: '/shop', query: { category: 'women-s' } }}>
              <figure className="category-media">
                <LazyLoadImage
                  threshold={300}
                  src="./images/home/categories/2.jpg"
                  effect="opacity"
                  alt="category"
                  width="480"
                  height="400"
                />
              </figure>
            </ALink>

            <Reveal keyframes={fadeIn} triggerOnce>
              <div className="category-content x-50 y-50">
                <h4 className="category-name text-uppercase">women's</h4>
              </div>
            </Reveal>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 order-lg-last order-sm-auto order-last">
          <div
            className="category category-absolute category-overlay overlay-dark text-white"
            style={{ backgroundColor: '#333' }}
          >
            <ALink href={{ pathname: '/shop', query: { category: 'men-s' } }}>
              <figure className="category-media">
                <LazyLoadImage
                  threshold={300}
                  src="./images/home/categories/4.jpg"
                  effect="opacity"
                  alt="category"
                  width="480"
                  height="400"
                />
              </figure>
            </ALink>

            <Reveal keyframes={fadeIn} triggerOnce>
              <div className="category-content x-50 y-50">
                <h4 className="category-name text-uppercase">Men's</h4>
              </div>
            </Reveal>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div
            className="intro-banner2 banner banner-fixed"
            style={{ backgroundColor: '#D3D4D6' }}
          >
            <figure>
              <LazyLoadImage
                threshold={300}
                src="./images/home/categories/3.jpg"
                effect="opacity"
                alt="category"
                width="480"
                height="400"
              />
            </figure>
            <div className="banner-content y-50">
              <Reveal keyframes={fadeIn} triggerOnce>
                <h4 className="banner-subtitle text-uppercase font-weight-bold ls-normal text-primary">
                  Best Sellers
                </h4>
                <h3 className="banner-title font-secondary font-weight-normal text-uppercase text-white">
                  <span className="d-block">20% off everything,</span>
                  <strong>Even Sale!</strong>
                </h3>
                <ALink href="/shop" className="btn btn-outline btn-white">
                  Shop Collection
                </ALink>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(IntroSection);
