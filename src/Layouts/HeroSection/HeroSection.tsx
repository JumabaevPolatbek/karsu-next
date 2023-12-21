import './HeroSection.scss';
import HeroBanner from '../../src/Components/HeroBanner';
import HeroForm from '../../src/Components/HeroForm';


function HeroSection() {
    return (
        <div className="container">
            <div className="hero-section">
                <HeroBanner />
                <HeroForm />
            </div>
        </div>
    )
}

export default HeroSection;