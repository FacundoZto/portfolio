import './body.css';
import About from './about/about.jsx';
import Projects from './projects/projects.jsx';
import Contact from './contact/contact.jsx';
import Intro from './intro/intro.jsx';

const Body = () => {
    return(
        <div className='body'>
            <section>
                <Intro/>
            </section>
            <section id='About'>
                <About/>
            </section>
            <section id='Projects'>
                <Projects/>
            </section>
            <section id='Contact'>
                <Contact/>
            </section>
        </div>
    )
}

export default Body;