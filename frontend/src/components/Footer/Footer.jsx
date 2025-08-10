import { assets } from '../../assets/assets'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className='footer-content-left'>
                
                <p>
                Discover a diverse menu at Tasty Treat - Food Delivery! Enjoy fresh salads, savory rolls, creamy pastas, delicious sandwiches, and sweet desserts. We offer pure vegetarian options and hearty meals, delivered right to your door. Perfect for every craving and occasion.
                </p>
                <div className='footer-social-icons'>
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <img src={assets.facebook_icon} alt="Facebook" />
    </a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <img src={assets.twitter_icon} alt="Twitter" />
    </a>
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <img src={assets.linkedin_icon} alt="LinkedIn" />
    </a>
</div>

            </div>
            <div className='footer-content-center'>
                <h2>COMPANY</h2>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </div>
            <div className='footer-content-right'>
                <ul>
                    <li>+91-8303755419</li>
                    <li>contact@tastytreat.com</li>
                </ul>
            </div>
        </div>
        <hr/>
        {/* Removed the entire app download section as per user request */}
    {/* Removed footer branding text as per request */}
    <p className='footer-copyright'>
    Copyright © 2025 TastyTreat.com - All Rights Reserved.
</p>

    </div>
  )
}

export default Footer
