import { useEffect } from 'react';
import React from 'react';
import Reveal from 'react-awesome-reveal';

import ALink from '~/components/features/custom-link';

import { fadeIn } from '~/utils/data/keyframes';
import { parallaxHandler } from '~/utils';

export default function PromoSection( props ) {
    useEffect( () => {
        window.addEventListener( 'scroll', parallaxHandler, true );

        return () => {
            window.removeEventListener( 'scroll', parallaxHandler, true );
        }
    }, [] )

    return (
        <section className="banner banner-cta parallax" style={ { backgroundImage: `url(./images/home/parallax.jpg)`, backgroundColor: "#565352" } }>
            <Reveal keyframes={ fadeIn } triggerOnce>
                <div className="banner-content text-center">
                    <h4 className="banner-subtitle text-uppercase text-white font-weight-semi-bold mb-2">Today’s special
                </h4>
                    <h3 className="banner-title font-secondary text-white text-uppercase">Popular accessories collection
                </h3>
                    <p className="ls-normal mb-6">Free shipping on clearance orders of $75 or more</p>
                    <ALink href="/shop" className="btn btn-outline btn-white">Discover now</ALink>
                </div>
            </Reveal>
        </section>
    )
}