

import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/Main/Main";
import { Technologies} from "./layout/sections/Skills/Skills";
import {Works} from "./layout/sections/works/Works";
import {Testimonials} from "./layout/sections/testimonials/Testimonials";
import {Contact} from "./layout/sections/contact/Contact";
import {Footer} from "./layout/footer/Footer";
import Invitation from "./layout/sections/Invitation/Invitation";
import {ParticlesComponent} from "./components/particlesComponent/ParticlesComponent";
import React from "react";
import {Slide} from "react-awesome-reveal";



function App() {
    return (
        <div className='App'>
            {/*<ParticlesComponent />*/}
                <Header/>
            <Main/>
            <Technologies/>
            {/*<Works/>*/}
            {/*<Testimonials/>*/}
            {/*<Contact />*/}
            {/*<Invitation/>*/}
            {/*<Footer/>*/}

        </div>


    );
}

export default App;

