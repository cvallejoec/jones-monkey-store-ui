import { LazyLoadImage } from 'react-lazy-load-image-component';
import Reveal from 'react-awesome-reveal';

import OwlCarousel from '~/components/features/owl-carousel';
import ProductTwo from '~/components/features/product/product-two';
import ALink from '~/components/features/custom-link';

import { fadeIn } from '~/utils/data/keyframes';
import { productSlider } from '~/utils/data/carousel';
import { useCatalogues, useProducts } from '~/hooks';
import { useEffect, useState } from 'react';

export default function ProductCollection() {
  const { catalogues, loading: loadingCatalogues } = useCatalogues({
    // Randomize the order of the catalogues
    formatResponse: (response) => response.sort(() => Math.random() - 0.5),
  });
  const [proceedToFirstRequest, setProceedToFirstRequest] =
    useState<boolean>(false);
  const [proceedToSecondRequest, setProceedToSecondRequest] =
    useState<boolean>(false);
  const {
    products: firstCatalogueProducts,
    onMultiChange: onFirstCatalogueProducstParamsChange,
  } = useProducts({
    proceedToRequest: proceedToFirstRequest,
    query: {
      random: true,
      take: 2,
    },
  });
  const {
    products: secondCatalogueProducts,
    onMultiChange: onSecondCatalogueProducstParamsChange,
  } = useProducts({
    proceedToRequest: proceedToSecondRequest,
    query: {
      random: true,
      take: 2,
    },
  });

  useEffect(() => {
    if (catalogues.length === 0) return; // TODO: Handle this case
    if (catalogues.length === 1) return; // TODO: Handle this case

    console.log('ya llegaron los catalogos');

    // Get the products for the first catalogue
    const firstCatalogue = catalogues[0];
    const firstCatalogueSlug = firstCatalogue.slug;

    onFirstCatalogueProducstParamsChange({
      catalogueSlug: firstCatalogueSlug,
    });
    setProceedToFirstRequest(true);

    // Get the products for the second catalogue
    const secondCatalogue = catalogues[1];
    const secondCatalogueSlug = secondCatalogue.slug;

    onSecondCatalogueProducstParamsChange({
      catalogueSlug: secondCatalogueSlug,
    });
    setProceedToSecondRequest(true);
  }, [catalogues]);

  return (
    <>
      {/* @ts-ignore */}
      <Reveal keyframes={fadeIn} triggerOnce>
        <section className="products-section container pt-6 mt-10 pb-6 mb-lg-10">
          <div className="row gutter-no align-items-center">
            <div className="col-lg-6">
              <div className="row gutter-no">
                <div className="col-xs-6">
                  {/* @ts-ignore */}
                  <Reveal keyframes={fadeIn} delay={300} triggerOnce>
                    <div
                      className="banner banner-fixed banner-sm"
                      style={{ backgroundColor: '#565352' }}
                    >
                      <figure>
                        <LazyLoadImage
                          threshold={300}
                          effect="opacity"
                          width="295"
                          height="263"
                          src="./images/home/categories/9.jpg"
                          alt="banner"
                        />
                      </figure>
                      <div className="banner-content text-center x-50 y-50">
                        <h3 className="banner-title font-secondary text-uppercase text-white">
                          NIKE
                        </h3>
                        <h4 className="banner-subtitle font-secondary text-uppercase text-white">
                          Shoes collection
                        </h4>
                        <ALink
                          href="/shop"
                          className="btn btn-outline btn-white"
                        >
                          Shop Calvin
                        </ALink>
                      </div>
                    </div>

                    {/* @ts-ignore */}
                    <Reveal keyframes={fadeIn} delay={100} triggerOnce>
                      <div
                        className="banner banner-fixed banner-sm"
                        style={{ backgroundColor: '#565352' }}
                      >
                        <figure>
                          <LazyLoadImage
                            threshold={300}
                            effect="opacity"
                            width="295"
                            height="263"
                            src="./images/home/categories/10.jpg"
                            alt="banner"
                          />
                        </figure>
                      </div>
                    </Reveal>
                  </Reveal>
                </div>

                <div className="col-xs-6">
                  {/* @ts-ignore */}
                  <Reveal keyframes={fadeIn} delay={500} triggerOnce>
                    <div
                      className="banner banner-fixed"
                      style={{ backgroundColor: '#565352' }}
                    >
                      <figure>
                        <LazyLoadImage
                          threshold={300}
                          effect="opacity"
                          width="295"
                          height="526"
                          src="./images/home/categories/5.jpg"
                          alt="banner"
                        />
                      </figure>
                      <div className="banner-content text-center x-50 y-50">
                        <h3 className="banner-title font-secondary text-uppercase text-white">
                          OGP
                        </h3>
                        <h4 className="banner-subtitle font-secondary text-uppercase text-white">
                          Shoes collection
                        </h4>
                        <ALink
                          href="/shop"
                          className="btn btn-outline btn-white"
                        >
                          Shop OGP
                        </ALink>
                      </div>
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>

            <div className="col-lg-6 order-lg-first mb-4 mb-lg-0">
              <div className="product-wrapper">
                {loadingCatalogues ? (
                  <OwlCarousel
                    adClass="owl-theme owl-nav-full"
                    options={productSlider}
                  >
                    {[1, 2].map((item) => (
                      <div
                        className="product-loading-overlay"
                        key={'featured-skel-' + item}
                      ></div>
                    ))}
                  </OwlCarousel>
                ) : (
                  <>
                    <h2 className="title title-simple">
                      {catalogues[0]?.name}
                    </h2>
                    <OwlCarousel
                      adClass="owl-theme owl-nav-full"
                      options={productSlider}
                    >
                      {firstCatalogueProducts.map((item) => (
                        <ProductTwo
                          product={item}
                          key={`featured-${item.slug}`}
                          showCategories={true}
                        />
                      ))}
                    </OwlCarousel>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="row gutter-no align-items-center">
            <div className="col-lg-6">
              <div className="row gutter-no">
                <div className="col-xs-6">
                  {/* @ts-ignore */}
                  <Reveal keyframes={fadeIn} delay={100} triggerOnce>
                    <div
                      className="banner banner-fixed"
                      style={{ backgroundColor: '#565352' }}
                    >
                      <figure>
                        <LazyLoadImage
                          src="./images/home/categories/6.jpg"
                          threshold={300}
                          width="295"
                          height="526"
                          effect="opacity"
                          alt="banner"
                        />
                      </figure>
                      <div className="banner-content text-center x-50 y-50">
                        <h3 className="banner-title font-secondary text-uppercase text-white">
                          Nike
                        </h3>
                        <h4 className="banner-subtitle font-secondary text-uppercase text-white">
                          Sportwear collection
                        </h4>
                        <a
                          href="demo10-shop.html"
                          className="btn btn-outline btn-white"
                        >
                          Shop Nike
                        </a>
                      </div>
                    </div>
                  </Reveal>
                </div>
                <div className="col-xs-6">
                  {/* @ts-ignore */}
                  <Reveal keyframes={fadeIn} delay={300} triggerOnce>
                    <div
                      className="banner banner-fixed banner-sm"
                      style={{ backgroundColor: '#565352' }}
                    >
                      <figure>
                        <LazyLoadImage
                          src="./images/home/categories/7.jpg"
                          width="295"
                          height="263"
                          threshold={300}
                          effect="opacity"
                          alt="banner"
                        />
                      </figure>
                      <div className="banner-content text-center x-50 y-50">
                        <h3 className="banner-title font-secondary text-uppercase text-white">
                          EBag
                        </h3>
                        <h4 className="banner-subtitle font-secondary text-uppercase text-white">
                          Bag collection
                        </h4>
                        <a
                          href="demo10-shop.html"
                          className="btn btn-outline btn-white"
                        >
                          Shop EBag
                        </a>
                      </div>
                    </div>
                  </Reveal>

                  {/* @ts-ignore */}
                  <Reveal keyframes={fadeIn} delay={400} triggerOnce>
                    <div
                      className="banner banner-fixed banner-sm"
                      style={{ backgroundColor: '#565352' }}
                    >
                      <figure>
                        <LazyLoadImage
                          src="./images/home/categories/8.jpg"
                          width="295"
                          height="263"
                          threshold={300}
                          effect="opacity"
                          alt="banner"
                        />
                      </figure>
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="product-wrapper">
                {loadingCatalogues ? (
                  <OwlCarousel
                    adClass="owl-theme owl-nav-full"
                    options={productSlider}
                  >
                    {[3, 4].map((item) => (
                      <div
                        className="product-loading-overlay"
                        key={'featured-skel-' + item}
                      ></div>
                    ))}
                  </OwlCarousel>
                ) : (
                  <>
                    <h2 className="title title-simple">
                      {catalogues[1]?.name}{' '}
                    </h2>
                    <OwlCarousel
                      adClass="owl-theme owl-nav-full"
                      options={productSlider}
                    >
                      {secondCatalogueProducts.map((item) => (
                        <ProductTwo
                          product={item}
                          key={`featured-${item.slug}`}
                          showCategories={false}
                        />
                      ))}
                    </OwlCarousel>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      </Reveal>
    </>
  );
}
