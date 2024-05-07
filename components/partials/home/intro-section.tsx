import React, { useEffect, useState } from 'react';
import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// import Custom Components
import ALink from '~/components/features/custom-link';
import OwlCarousel from '~/components/features/owl-carousel';

import { fadeInUpShorter, fadeInUp, fadeIn } from '~/utils/data/keyframes';
import { introSlider } from '~/utils/data/carousel';
import { useStore } from '~/hooks';

function IntroSection() {
  const [hero, setHero] = useState<
    {
      image: string;
      subtitle: string;
      title: string;
      header: string;
      link: string;
      button: string;
    }[]
  >([]);
  const { store } = useStore();
  const {
    hero1,
    hero1Button,
    hero1Header,
    hero1Link,
    hero1Subtitle,
    hero1Title,
    hero2,
    hero2Button,
    hero2Header,
    hero2Link,
    hero2Subtitle,
    hero2Title,
    hero3,
    hero3Button,
    hero3Header,
    hero3Link,
    hero3Subtitle,
    hero3Title,
  } = store;

  useEffect(() => {
    // Append the hero images to the state conditionally if hero images are available
    if (hero1) {
      setHero((prev) => [
        ...prev,
        {
          image: hero1,
          subtitle: hero1Subtitle,
          title: hero1Title,
          header: hero1Header,
          link: hero1Link,
          button: hero1Button,
        },
      ]);
    }

    if (hero2) {
      setHero((prev) => [
        ...prev,
        {
          image: hero2,
          subtitle: hero2Subtitle,
          title: hero2Title,
          header: hero2Header,
          link: hero2Link,
          button: hero2Button,
        },
      ]);
    }

    if (hero3) {
      setHero((prev) => [
        ...prev,
        {
          image: hero3,
          subtitle: hero3Subtitle,
          title: hero3Title,
          header: hero3Header,
          link: hero3Link,
          button: hero3Button,
        },
      ]);
    }
  }, []);

  return (
    <section className="intro-section">
      <OwlCarousel
        adClass="owl-theme owl-dot-inner owl-nav-fade owl-dot-white intro-slider animation-slider"
        options={introSlider}
      >
        {hero.map((item, index) => (
          <div
            key={index}
            className="intro-slide1 banner banner-fixed"
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundColor: '#666',
            }}
          >
            <div className="banner-content x-50 y-50 text-center">
              {/* @ts-ignore */}
              <Reveal keyframes={fadeIn} duration={1200} delay={500}>
                <h4 className="banner-subtitle font-weight-semi-bold text-primary">
                  {item.title}
                </h4>
              </Reveal>

              {/* @ts-ignore */}
              <Reveal keyframes={fadeInUp} duration={1200} delay={800}>
                <h3 className="banner-title font-secondary text-uppercase text-white">
                  {item.header}
                </h3>
              </Reveal>

              {/* @ts-ignore */}
              <Reveal keyframes={fadeInUp} duration={1200} delay={1100}>
                <p className="ls-normal">{item.subtitle}</p>
              </Reveal>

              {/* @ts-ignore */}
              <Reveal keyframes={fadeInUp} duration={1200} delay={1300}>
                <ALink href={item.link} className="btn btn-outline btn-white">
                  {item.button}
                </ALink>
              </Reveal>

              <h4 className="bg-text w-100">{new Date().getFullYear()}</h4>
            </div>
          </div>
        ))}
        <div
          className="intro-slide2 banner banner-fixed"
          style={{
            backgroundImage: `url(./images/home/slides/2.jpg)`,
            backgroundColor: '#666',
          }}
        >
          <div className="banner-content x-50 y-50 text-center">
            {/* @ts-ignore */}
            <Reveal keyframes={fadeIn} duration={2000} delay={300}>
              <h3 className="banner-title font-secondary text-white text-uppercase font-weight-bold">
                Brand Lookbook 2021
              </h3>
            </Reveal>

            {/* @ts-ignore */}
            <Reveal keyframes={fadeIn} duration={1500} delay={900}>
              <p className="text-white">
                International Delivery From Just $99.00
              </p>
            </Reveal>

            {/* @ts-ignore */}
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
              {/* @ts-ignore */}
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

            {/* @ts-ignore */}
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

            {/* @ts-ignore */}
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
              {/* @ts-ignore */}
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
