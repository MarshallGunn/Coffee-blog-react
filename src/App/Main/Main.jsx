import { Route } from 'react-router'
import SectionSeparator from '../SectionSeparator/SectionSeparator'
import About from './About/About'
import Events from './Events/Events'
import AboutPage from './About/AboutPage/AboutPage'
import EventPage from './Events/EventPage/EventPage'
import EventFilterPage from './Events/EventFilterPage/EventFilterPage'
import './main.css'
import Contacts from './Contacts/Contacts'
import ScrollFunc from '../../Components/ScrollFunc'
import Home from './Home/Home'
import LatestEvents from './Home/LatestEvents/LatestEvents'
import CoffeeProducts from './CoffeeProducts/CoffeeProducts'

const Main = () => { 
    
    return (
        <main className="main">
            <ScrollFunc/>
            <Route path="/" exact component={About}/>
            <Route path="/" exact component={SectionSeparator}/>
            <Route path="/" exact component={LatestEvents}/>
            <Route path="/" exact component={SectionSeparator}/> 
            <Route path="/"exact component={Home}/>                     
            <Route path="/about" exact component={AboutPage}/>
            <Route path="/menu" exact component={CoffeeProducts}/>
            <Route path="/cart" exact component={CoffeeProducts}/>
            <Route path="/checkout" exact component={CoffeeProducts}/>
            <Route path="/events" exact component={Events}/>                
            <Route path="/event_:id" exact component={EventPage}/>                
            <Route path="/event/cathegory_:cathegory" exact component={EventFilterPage}/>                
            <Route path="/contacts" exact component={Contacts}/>            
        </main>
    )    
}

export default Main