import { ThemeToggle } from "@/Components/ThemeToggle"
import { BackgroundAnimations } from "@/Components/Background"
import { Navbar } from "@/Components/Navbar"
import { MainSection } from "@/Components/MainSection"
import { AboutSection } from "@/Components/About"
import { Skills } from "@/Components/Skills"
import { Project } from "@/Components/Project"
import { Contact } from "@/Components/Contact"
import { Footer } from "../Components/footer"
import { Journey } from "../Components/Journey"
import CertificateSection from "../Components/Certificate"

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-forground overflow-x-hidden">
            {/* Theme Toggle */}
            <ThemeToggle />
            {/* Background Effect */}
            <BackgroundAnimations />
            {/* Navbar */}
            <Navbar />
            {/* Main Content */}
            <main>
                <MainSection />
                <AboutSection />
                   <Journey />
                <Skills />
                <Project />
              <CertificateSection/>
                <Contact />
             
            </main>

            {/* Footer */}
            <Footer/>
        </div>
    )
}