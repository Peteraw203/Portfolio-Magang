import React from "react";
import Portfolio from "@/components/portfolio/PortfolioList";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Portfolio | My Portfolio",
};

const PortfolioList = () => {
    const breadcrumbLinks = [
        { href: "/", text: "Home" },
        { href: "/portfolio", text: "Portfolio" },
    ];
    return (
        <>
            <HeroSub
                title="Portfolio"
                description="Projects and Prototypes"
                breadcrumbLinks={breadcrumbLinks}
            />
            <Portfolio />
        </>
    );
};

export default PortfolioList;