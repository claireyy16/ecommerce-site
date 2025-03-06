import '../styles/styles.css';
import '../styles/slider.css';
import PortfolioSlider from '../components/PortfolioSlider';

function Home() {
    return (
        <>
        <div className="additional-info">
            <h3>welcome to my site!</h3>
            <p>
            This is a website built on a React framework to test my integration of the Stripe API. 
            <br/>When I was in the hospital in 2022, I began crocheting and at the same time, looking into website development. Now that my health is not a concern and I have returned to school, I decided to combine these two things by creating an ecommerce site.
            <br/>I started this site in 2024, the <a href="https://github.com/claireyy16/ecommerce-site">github repo</a> can be found here :)
            </p>
        </div>
        
        {/* Portfolio Slider */}
        <PortfolioSlider />
        

        </>
    )
}

export default Home;