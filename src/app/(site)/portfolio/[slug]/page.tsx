import React from "react";
import PortfolioDetail from "@/components/portfolio/PortfolioDetail";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Project Details | Venus",
};

import { portfolioinfo } from "@/app/api/data";

export async function generateStaticParams() {
    return portfolioinfo.map((project) => ({
        slug: project.slug,
    }));
}

const PortfolioDetailPage = () => {
    return (
        <>
            <PortfolioDetail />
        </>
    );
};

export default PortfolioDetailPage;
