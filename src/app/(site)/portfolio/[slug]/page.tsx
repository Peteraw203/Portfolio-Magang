import React from "react";
import PortfolioDetail from "@/components/portfolio/PortfolioDetail";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Project Details | My Portfolio",
};

import { portfolioinfo } from "@/app/api/data";

export async function generateStaticParams() {
    return portfolioinfo.map((project) => ({
        slug: project.slug,
    }));
}

const PortfolioDetailPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params;
    return (
        <>
            <PortfolioDetail slug={slug} />
        </>
    );
};

export default PortfolioDetailPage;
