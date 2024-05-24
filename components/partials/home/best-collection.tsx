import React from 'react';
import Reveal from 'react-awesome-reveal';

import OwlCarousel from '~/components/features/owl-carousel';
import ProductThree from '~/components/features/product/product-three';
import { featuredSlider } from '~/utils/data/carousel';
import { fadeIn } from '~/utils/data/keyframes';

import { useProducts } from '~/hooks';

function BestCollection(props) {
  // const { products, loading } = props;
  const { products, loading } = useProducts({
    query: {
      random: true,
      take: 4,
    },
  });

  return (
    <>
      {/* @ts-ignore */}
      <Reveal keyframes={fadeIn} delay={300} duration={1200} triggerOnce>
        <section className="container pt-10">
          <h2 className="title title-simple">Más Vendidos</h2>

          {loading ? (
            <OwlCarousel adClass="owl-theme" options={featuredSlider}>
              {[1, 2, 3, 4, 5].map((item) => (
                <div
                  className="product-loading-overlay"
                  key={'best-skel-' + item}
                ></div>
              ))}
            </OwlCarousel>
          ) : (
            <OwlCarousel adClass="owl-theme" options={featuredSlider}>
              {products &&
                products
                  .slice(0, 4)
                  .map((item, index) => (
                    <ProductThree
                      isCategory={false}
                      product={item}
                      key={`best-product ${index}`}
                      showStars
                    />
                  ))}
            </OwlCarousel>
          )}
        </section>
      </Reveal>
    </>
  );
}

export default React.memo(BestCollection);
