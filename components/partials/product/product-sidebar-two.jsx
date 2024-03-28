import { useQuery } from "@apollo/react-hooks";
import { LazyLoadImage } from 'react-lazy-load-image-component';

import withApollo from '~/server/apollo';
import { GET_SHOP_SIDEBAR_DATA } from '~/server/queries';

import ALink from '~/components/features/custom-link';
import OwlCarousel from '~/components/features/owl-carousel';

import SmallProduct from '~/components/features/product/product-sm';

import { mainSlider7 } from '~/utils/data/carousel';

function ProductsSidebar( props ) {
    const { adClass = '', type = "right" } = props;
    const { data, loading, error } = useQuery( GET_SHOP_SIDEBAR_DATA, { variables: { featured: true } } );
    const featured = data && data.shopSidebarData.featured;

    const toggleSidebarHandler = ( e ) => {
        if ( type === "right" )
            document.querySelector( 'body' ).classList.toggle( 'right-sidebar-active' );
        else
            document.querySelector( 'body' ).classList.toggle( 'sidebar-active' );
    }

    const hideSidebarhandler = ( e ) => {
        if ( type === "right" )
            document.querySelector( 'body' ).classList.remove( 'right-sidebar-active' );
        else
            document.querySelector( 'body' ).classList.remove( 'sidebar-active' );
    }

    return (
        <div className="sidebar-content product-default-sidebar">
            {
                loading ? <div className="widget-2"></div> :
                    <div className="sticky-sidebar">
                        <div className="service-list mb-4">
                            <div className="icon-box icon-box-side icon-box3">
                                <span className="icon-box-icon">
                                    <i className="d-icon-secure"></i>
                                </span>
                                <div className="icon-box-content">
                                    <h4 className="icon-box-title">Secured Payment</h4>
                                    <p>We ensure secure payment!</p>
                                </div>
                            </div>
                            <div className="icon-box icon-box-side icon-box1">
                                <span className="icon-box-icon">
                                    <i className="d-icon-truck"></i>
                                </span>
                                <div className="icon-box-content">
                                    <h4 className="icon-box-title">Free Shipping</h4>
                                    <p>On all US orders above $99</p>
                                </div>
                            </div>
                            <div className="icon-box icon-box-side icon-box2">
                                <span className="icon-box-icon">
                                    <i className="d-icon-money"></i>
                                </span>
                                <div className="icon-box-content">
                                    <h4 className="icon-box-title">Money Back guarantee</h4>
                                    <p>Any back within 30 days</p>
                                </div>
                            </div>
                        </div>

                        <div className="product-banner banner banner-fixed overlay-zoom overlay-dark mb-8 overflow-hidden">
                            <figure>
                                <LazyLoadImage src="./images/home/product/banner.jpg" width="280" height="312"
                                    alt="banner" />
                            </figure>
                            <div className="banner-price-info font-weight-bold text-white text-uppercase">
                                20-22<sup>th</sup> April</div>
                            <div className="banner-content text-center w-100">
                                <h4
                                    className="banner-subtitle d-inline-block text-uppercase font-weight-semi-bold mb-0 ls-normal">
                                    Ultimate Sale</h4>
                                <h3
                                    className="banner-title ls-l text-uppercase text-white font-weight-bold mb-0">
                                    Up
												to 70%</h3>
                                <p className="mb-4 font-primary text-white lh-1">Discount Selected Items</p>
                                <ALink href="/shop" className="btn btn-white btn-link btn-underline">Shop now<i
                                    className="d-icon-arrow-right"></i></ALink>
                            </div>
                        </div>

                        <div className="widget widget-products">
                            <h4 className="widget-title mb-3 lh-1 border-no text-capitalize ">Our Featured</h4>

                            <ul className="widget-body">
                                <OwlCarousel adClass="owl-nav-top" options={ mainSlider7 }>
                                    <div className="products-col">
                                        {
                                            featured.slice( 0, 3 ).map( ( product, index ) => (
                                                <SmallProduct product={ product } key={ "small-product-" + index } />
                                            ) )
                                        }
                                    </div>

                                    <div className="products-col">
                                        {
                                            featured.slice( 0, 3 ).map( ( product, index ) => (
                                                <SmallProduct product={ product } key={ "small-product-" + index } />
                                            ) )
                                        }
                                    </div>
                                </OwlCarousel>
                            </ul>
                        </div>
                    </div>
            }
        </div>
    );
}

export default withApollo( { ssr: typeof window === "undefined" } )( ProductsSidebar );