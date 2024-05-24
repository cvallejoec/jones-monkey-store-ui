import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from '~/components/features/custom-link';
import OwlCarousel from '~/components/features/owl-carousel';
import { fadeIn } from '~/utils/data/keyframes';
import { instaSlider } from '~/utils/data/carousel';

import { useProducts } from '~/hooks';

export default function InstagramSection() {
  const { products } = useProducts({
    query: {
      random: true,
      take: 6,
    },
  });

  return (
    <>
      {/*@ts-ignore */}
      <Reveal keyframes={fadeIn} triggerOnce>
        <section className="pt-10 instagram-section">
          <h2 className="title title-simple d-none">Instagram</h2>
          <OwlCarousel adClass="owl-theme" options={instaSlider}>
            {products.map((item, index) => (
              <figure className="instagram">
                <ALink
                  href="https://www.instagram.com/jonesmonkeyecuador/"
                  target="_blank"
                >
                  <LazyLoadImage
                    src={item.mainImage}
                    effect="opacity"
                    threshold={300}
                    alt={item.name}
                    width="320"
                    height="320"
                  />
                </ALink>
              </figure>
            ))}
          </OwlCarousel>
        </section>
      </Reveal>
    </>
  );
}
