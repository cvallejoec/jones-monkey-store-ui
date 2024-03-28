import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/react-hooks';
import Helmet from 'react-helmet';
import imagesLoaded from 'imagesloaded';

import withApollo from '~/server/apollo';
import { GET_PRODUCT } from '~/server/queries';

import OwlCarousel from '~/components/features/owl-carousel';
import ALink from '~/components/features/custom-link';

import MediaFive from '~/components/partials/product/media/media-five';
import ProductNav from '~/components/partials/product/product-nav';
import DetailThree from '~/components/partials/product/detail/detail-three';
import RelatedProducts from '~/components/partials/product/related-products';
import ProductSidebarTwo from '~/components/partials/product/product-sidebar-two';

import { mainSlider17 } from '~/utils/data/carousel';

function ProductDefault() {
    const slug = useRouter().query.slug;

    if ( !slug ) return '';

    const { data, loading, error } = useQuery( GET_PRODUCT, { variables: { slug } } );
    const [ loaded, setLoadingState ] = useState( false );
    const product = data && data.product.data;
    const related = data && data.product.related;

    useEffect( () => {
        if ( !loading && product )
            imagesLoaded( 'main' ).on( 'done', function () {
                setLoadingState( true );
            } ).on( 'progress', function () {
                setLoadingState( false );
            } );
        if ( loading )
            setLoadingState( false )
    }, [ loading, product ] )

    const showSidebar = () => {
        document.querySelector( 'body' ).classList.add( 'right-sidebar-active' );
    }

    const hideSidebar = () => {
        document.querySelector( 'body' ).classList.remove( 'right-sidebar-active' );
    }

    return (
        <main className="main single-product product-default">
            <Helmet>
                <title>Riode React eCommerce Template | Product default</title>
            </Helmet>

            <h1 className="d-none">Riode React eCommerce Template - Product default</h1>

            {
                product !== undefined ?
                    <div className={ `page-content mb-10 pb-6 ${ loaded ? '' : 'd-none' }` }>
                        <div className="container-fluid skeleton-body">
                            <div className="product-navigation">
                                <ul className="breadcrumb breadcrumb-lg">
                                    <li><ALink href="/"><i className="d-icon-home"></i></ALink></li>
                                    <li><ALink href="#" className="active">Products</ALink></li>
                                    <li>Detail</li>
                                </ul>

                                <ProductNav product={ data.product } />
                            </div>

                            <div className="row gutter-lg">
                                <aside className="col-lg-3 col-xxl-2 right-sidebar sidebar-fixed sticky-sidebar-wrapper">
                                    <div className="sidebar-overlay" onClick={ hideSidebar }>
                                        <ALink className="sidebar-close" href="#"><i className="d-icon-times"></i></ALink>
                                    </div>

                                    <ALink href="#" className="sidebar-toggle" onClick={ showSidebar }><i className="fas fa-chevron-left"></i></ALink>

                                    <ProductSidebarTwo />
                                </aside>

                                <div className="col-lg-9 col-xxl-10">
                                    <div className="product product-single row mb-4">
                                        <div className="col-md-6">
                                            <MediaFive product={ product } />
                                        </div>

                                        <div className="col-md-6">
                                            <DetailThree isNav={ false } isDesc={ true } data={ data } isSticky={ true } adClass="pb-0 mb-10" isNav={ false } />
                                        </div>
                                    </div>

                                    <RelatedProducts products={ related } />
                                </div>
                            </div>
                        </div>
                    </div> : ''
            }
            {
                loaded && !loading ? ''
                    : <div className="skeleton-body container-fluid mb-10 mt-5">
                        <div className="row gutter-lg">
                            <div className="col-lg-9 col-xxl-10">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="skel-pro-gallery"></div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="skel-pro-summary mt-4 mt-md-0"></div>

                                        <div className="skel-pro-tabs"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-xxl-2 d-none d-lg-block">
                                <div className="widget-2"></div>
                            </div>
                        </div>
                        <section className="pt-3 mt-4">
                            <h2 className="title justify-content-center">Related Products</h2>

                            <OwlCarousel adClass="owl-carousel owl-theme owl-nav-full" options={ mainSlider17 }>
                                {
                                    [ 1, 2, 3, 4, 5, 6 ].map( ( item ) =>
                                        <div className="product-loading-overlay" key={ 'popup-skel-' + item }></div>
                                    )
                                }
                            </OwlCarousel>
                        </section>
                    </div>
            }
        </main >
    )
}

export default withApollo( { ssr: typeof window === 'undefined' } )( ProductDefault );