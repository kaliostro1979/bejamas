import React from "react";
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import {NavLink, useLocation} from "react-router-dom";

const Breadcrumbs = () => {
    const breadcrumbs = useBreadcrumbs();
    const location = useLocation();

    return (
        <>
            {
                breadcrumbs.map(({match, breadcrumb}) => {
                    if (location.pathname !== match.pathname){
                        return (
                            <span key={match.pathname} className={'breadcrumbs-item'}>
                                <NavLink to={match.pathname}>{breadcrumb}</NavLink>
                                <span> /</span>
                            </span>
                        )
                    }else {
                        return (
                            <span className={'breadcrumbs-item current-item'} key={match.pathname}>{breadcrumb}</span>
                        )
                    }
                })}
        </>
    );
}

export default Breadcrumbs
