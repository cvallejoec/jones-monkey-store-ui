import ALink from '~/components/features/custom-link';

export default function Breadcrumb( props ) {
    return (
        <div className="page-header"
            style={ { backgroundImage: `url( ./images/home/page-header.jpg )`, backgroundColor: "#584B3B" } }>
            {/* <h3 className="page-subtitle">{ props.subTitle }</h3> */ }
            <h1 className="page-title">{ props.title }</h1>
            <ul className="breadcrumb">
                <li><ALink href="/"><i className="d-icon-home"></i></ALink></li>
                <li className="delimiter">/</li>
                {
                    props.parentUrl ?
                        <>
                            <li><ALink href={ props.parentUrl }>{ props.subTitle }</ALink></li>
                            <li className="delimiter">/</li>
                        </>
                        : ""
                }
                <li>{ props.title }</li>
            </ul>
        </div>
    )
}