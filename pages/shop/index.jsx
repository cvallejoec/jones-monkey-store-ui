import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

import ALink from '~/components/features/custom-link';

import SidebarFilterTwo from '~/components/partials/shop/sidebar/sidebar-filter-two'
import ProductListOne from '~/components/partials/shop/product-list/product-list-one';
import ToolBoxTwo from '~/components/partials/shop/toolbox-two';

import SlideToggle from 'react-slide-toggle';

function Shop() {
    let expanded = false;
    const [ totalCount, setTotalCount ] = useState( 12 );

    const changeTotal = ( count ) => {
        setTotalCount( count );
    }

    return (
        <main className="main navigation-filter shop">
            <Helmet>
                <title>Riode React eCommerce Template - Shop</title>
            </Helmet>

            <h1 className="d-none">Riode React eCommerce Template - Shop</h1>

            <div className="page-header"
                style={ { backgroundImage: `url(images/home/page-header.jpg)`, backgroundColor: "#584B3B" } }>
                <h1 className="page-title mt-2 font-secondary">Riode Shop</h1>
                <ul className="breadcrumb">
                    <li><ALink href="/">Home</ALink></li>
                    <li className="delimiter"><i className="fas fa-angle-right"></i></li>
                    <li>Riode Shop</li>
                </ul>
            </div>

            <div className="page-content mb-10 pb-2">
                <div className="container-fluid">
                    <div className="toolbox-wrap">
                        <SlideToggle collapsed={ expanded ? false : true } >
                            { ( { onToggle, setCollapsibleElement, toggleState } ) => (
                                <div className={ `card navigation-card ${ toggleState.toLowerCase() }` }>
                                    <div className="card-header" onClick={ onToggle } >
                                        <span className="toggle">
                                            <span className="navigation-toggle-btn d-none">toggle button</span>
                                        </span>
                                    </div>

                                    <div ref={ setCollapsibleElement }>
                                        <div className={ `card-body p-0 ${ toggleState.toLowerCase() }` }>
                                            <SidebarFilterTwo />
                                        </div>
                                    </div>
                                </div>
                            ) }
                        </SlideToggle >

                        <ToolBoxTwo type="navigation" totalCount={ totalCount } />
                    </div>

                    <ProductListOne isToolbox={ false } itemsPerRow={ 6 } changeTotal={ changeTotal } />
                </div>
            </div>
        </main >
    )
}

export default React.memo( Shop );