import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from '~/components/features/custom-link';
import OwlCarousel from '~/components/features/owl-carousel';

import { fadeIn } from '~/utils/data/keyframes';
import { instaSlider } from '~/utils/data/carousel';

export default function InstagramSection() {
    return (
        <Reveal keyframes={ fadeIn } triggerOnce>
            <section className="pt-10 instagram-section">
                <h2 className="title title-simple d-none">Instagram</h2>
                <OwlCarousel adClass="owl-theme" options={ instaSlider }>
                    <figure className="instagram">
                        <ALink href="#">
                            <LazyLoadImage src="./images/home/instagram/1.jpg" effect="opacity" threshold={ 300 } alt="Instagram" width="320"
                                height="320" />
                        </ALink>
                    </figure>
                    <figure className="instagram">
                        <ALink href="#">
                            <LazyLoadImage src="./images/home/instagram/2.jpg" effect="opacity" threshold={ 300 } alt="Instagram" width="320"
                                height="320" />
                        </ALink>
                    </figure>
                    <figure className="instagram">
                        <ALink href="#">
                            <LazyLoadImage src="./images/home/instagram/3.jpg" effect="opacity" threshold={ 300 } alt="Instagram" width="320"
                                height="320" />
                        </ALink>
                    </figure>
                    <figure className="instagram">
                        <ALink href="#">
                            <LazyLoadImage src="./images/home/instagram/4.jpg" effect="opacity" threshold={ 300 } alt="Instagram" width="320"
                                height="320" />
                        </ALink>
                    </figure>
                    <figure className="instagram">
                        <ALink href="#">
                            <LazyLoadImage src="./images/home/instagram/5.jpg" effect="opacity" threshold={ 300 } alt="Instagram" width="320"
                                height="320" />
                        </ALink>
                    </figure>
                    <figure className="instagram">
                        <ALink href="#">
                            <LazyLoadImage src="./images/home/instagram/6.jpg" effect="opacity" threshold={ 300 } alt="Instagram" width="320"
                                height="320" />
                        </ALink>
                    </figure>
                </OwlCarousel>
            </section>
        </Reveal>
    )
}