import React from 'react';
import { Helmet } from 'react-helmet';

import { useQuery } from '@apollo/react-hooks';

// Import Apollo Server and Query
import withApollo from '../server/apollo';
import { GET_HOME_DATA } from '../server/queries';

// import Home Components
import NewsletterModal from '~/components/features/modals/newsletter-modal';
import IntroSection from '~/components/partials/home/intro-section';
import FeaturedCollection from '~/components/partials/home/featured-collection';
import PromoSection from '~/components/partials/home/promo-section';
import CtaSection from '~/components/partials/home/cta-section';
import BestCollection from '~/components/partials/home/best-collection';
import InstagramSection from '~/components/partials/home/instagram-section';
import ProductCollection from '~/components/partials/home/product-collection';

function HomePage() {
  const { data, loading, error } = useQuery(GET_HOME_DATA, {
    variables: { productsCount: 5 },
  });
  const featured = data && data.specialProducts.featured;
  const onSale = data && data.specialProducts.onSale;
  const topRated = data && data.specialProducts.topRated;

  return (
    <div className="main home">
      <Helmet>
        <title>JonesMonkey - Inicio</title>
      </Helmet>

      <h1 className="d-none">Riode React eCommerce Template - Home</h1>

      <div className="page-content">
        {/* <IntroSection />

        <FeaturedCollection />

        <PromoSection /> */}

        <ProductCollection products={onSale} loading={loading} />

        <CtaSection />

        <BestCollection products={topRated} loading={loading} />

        <InstagramSection />
      </div>

      <NewsletterModal />
    </div>
  );
}

export default withApollo({ ssr: typeof window === 'undefined' })(HomePage);
