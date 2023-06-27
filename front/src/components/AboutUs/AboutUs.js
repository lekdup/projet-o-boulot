import './AboutUs.scss';
import logo from '../../assets/logo.png';

function AboutUs() {

    return(
        <div className="AboutUs" id="qui-sommes-nous" >
            <h1 className="AboutUs-title">Qui Sommes nous ???</h1>

            <section className="AboutUs-section">
            A ut propter id temporis quidquid simulatione est recipiendisque ex per vicissimque benevolentiam quo quidquid sed utilitates dandis causa voluntarium minus cogitanti causa sed amicitiae considerandum voluntarium et solet amicitia alia propter minus percipiuntur antiquior benevolentiam redderet a nominata coniungendam nominata maxime coniungendam vicissimque an in amicitia.
            </section>

        
            <div className="AboutUs-span-logo">
            <img className="AboutUs-span-logo" src={logo} alt="logo of O'Boulot"></img>
            </div>


            <div className="AboutUs-spans">
                <span className="AboutUs-span">ACCESSIBLE</span>
                <span className="AboutUs-span">HUMAIN</span>
                <span className="AboutUs-span">PROXIMITE</span>
                <span className="AboutUs-span">POLYVALENT</span>
                <span className="AboutUs-span">DYNAMIQUE</span>
            </div>

        </div>
    )
}

export default AboutUs;