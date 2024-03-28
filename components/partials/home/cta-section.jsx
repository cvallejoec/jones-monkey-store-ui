import React, { useEffect } from 'react';
import Reveal from 'react-awesome-reveal';

import { parallaxHandler } from '~/utils';
import { blurIn } from '~/utils/data/keyframes';

function CtaSection() {
    useEffect( () => {
        window.addEventListener( 'scroll', parallaxHandler, true );

        return () => {
            window.removeEventListener( 'scroll', parallaxHandler, true );
        }
    }, [] )

    return (
        <section className="banner banner-newsletter parallax border-no" data-option="{'speed': 4}" style={ { backgroundImage: `url(./images/home/newsletter.jpg)`, backgroundColor: "#565352" } }>
            <Reveal keyframes={ blurIn } delay={ 200 } duration={ 1000 } triggerOnce>
                <div className="banner-content text-center p-0">
                    <h3 className="banner-title font-weight-semi-bold font-secondary ls-normal text-white text-uppercase mb-2">
                        Subscribe to our newsletter</h3>
                    <p>It only takes a second to find out about our latest<br />
                            news and promitions...
                        </p>
                    <form action="#" method="get" className="input-wrapper input-wrapper-inline">
                        <input type="email" className="form-control mb-4" name="email" id="email"
                            placeholder="Email address here..." required />
                        <button className="btn btn-primary btn-sm" type="submit">Subscribe<i
                            className="d-icon-arrow-right"></i></button>
                    </form>
                </div>
            </Reveal>
        </section>
    )
}

export default React.memo( CtaSection );