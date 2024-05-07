import { useEffect } from 'react';
import React from 'react';
import Reveal from 'react-awesome-reveal';

import ALink from '~/components/features/custom-link';
import { fadeIn } from '~/utils/data/keyframes';
import { parallaxHandler } from '~/utils';

import { useStore } from '~/hooks';

export default function PromoSection(props) {
  const { store } = useStore();
  useEffect(() => {
    window.addEventListener('scroll', parallaxHandler, true);

    return () => {
      window.removeEventListener('scroll', parallaxHandler, true);
    };
  }, []);

  if (!store.secondSection1Header) return null;

  return (
    <section
      className="banner banner-cta parallax"
      style={{
        backgroundImage: `url(${store.secondSection1})`,
        backgroundColor: '#565352',
      }}
    >
      {/* @ts-ignore */}
      <Reveal keyframes={fadeIn} triggerOnce>
        <div className="banner-content text-center">
          <h4 className="banner-subtitle text-uppercase text-white font-weight-semi-bold mb-2">
            {store.secondSection1Title}
          </h4>
          <h3 className="banner-title font-secondary text-white text-uppercase">
            {store.secondSection1Header}
          </h3>
          <p className="ls-normal mb-6">{store.secondSection1Subtitle}</p>
          <ALink
            href={store.secondSection1Link}
            className="btn btn-outline btn-white"
          >
            {store.secondSection1Button}
          </ALink>
        </div>
      </Reveal>
    </section>
  );
}
