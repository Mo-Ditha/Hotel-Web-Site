import "./App.css"
import Navbar from "./common/Navbar/Navbar"
import Home from "./Components/Pages/Home"
import About from "./Components/About/About"

import BlogSingle from "./Components/Blog/Blog-single-page/BlogSingle"
//import Destinations from "./Components/Destinations/Destinations"
//import DHome from "./Components/Destinations/Home"
import Destinations from "./Components/Destinations/Home"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import SinglePage from "./SinglePage/SinglePage"

/*-------------blog------------ */
import Blog from "./Components/Blog/Blog"
import Testimonial from "./Components/Testimoial/Testimoial"
import Contact from "./Components/Contact/Contact"
import Footer from "./common/Footer/Footer"
import Login from "./Components/login/Login"
import Register from "./Components/login/Register"
/*-------------blog------------ */

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          
          <Route path='/destinations' exact component={Destinations} />
          <Route path='/singlepage/:id' component={SinglePage} />
          <Route path='/blog' exact component={Blog} />
          <Route path='/blogsingle/:id' component={BlogSingle} />
          <Route path='/testimonial' component={Testimonial} />
          <Route path='/contact' component={Contact} />
          <Route path='/sign-in' component={Login} />
          <Route path='/Register' component={Register} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App;
