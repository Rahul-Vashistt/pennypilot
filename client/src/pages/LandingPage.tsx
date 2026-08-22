import CTA from "../features/landing/CTA";
import FeatureGrid from "../features/landing/features/FeatureGrid";
import Footer from "../features/landing/Footer";
import Header from "../features/landing/Header";
import HeroSection from "../features/landing/HeroSection";
import HowItWorks from "../features/landing/HowItWorks";
import ProductShowcase from "../features/landing/ProductShowcase";

export default function LandingPage() {
    return (
        <>
            <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
                <div className="fixed inset-0 z-0 pointer-events-none">
                    {/* Light mode */}
                    <div
                    className="absolute inset-0 dark:hidden"
                    style={{
                        background:
                        "radial-gradient(circle at left center, rgba(34,197,94,.20) 0%, rgba(34,197,94,.18) 15%, transparent 70%), radial-gradient(circle at right center, rgba(59,130,246,.20) 0%, rgba(59,130,246,.18) 15%, transparent 70%)",
                    }}
                    />

                    {/* Dark mode */}
                    <div
                    className="absolute inset-0 hidden dark:block"
                    style={{
                        background:
                        "radial-gradient(circle at left center, rgba(34,197,94,.20) 0%, rgba(34,197,94,.18) 15%, transparent 70%), radial-gradient(circle at right center, rgba(59,130,246,.20) 0%, rgba(59,130,246,.18) 15%, transparent 70%)",
                    }}
                    />
                </div>
                <Header />
                <HeroSection />
                <ProductShowcase />
                <FeatureGrid />
                <HowItWorks />
                <CTA />
                <Footer />
            </main>
        </>
    )
}