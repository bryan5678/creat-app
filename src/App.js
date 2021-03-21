import React, { Component } from 'react';
import './App.scss';
import Cover from './sass/Components/Cover';
import Header from './sass/Layout/Header';
import Intro from './sass/Layout/Intro';
import Courses from './sass/Layout/Courses';
import Viewing from './sass/Layout/Viewing';
import Banner from './sass/Layout/Banner';
import Categories from './sass/Layout/Categories';
import Students from './sass/Layout/Students';
import Partners from './sass/Layout/Partners';
import Jobs from './sass/Layout/Jobs';
import Footer from './sass/Layout/Footer';
import SidebarMini from './sass/Layout/SidebarMini';


class App extends Component {
    state={
        isDark: false
    }
 
//     componentWillMount() {
//         document.body.classList.add("darkMode")  
//         this.handleDarkTheme()

//   }

//     componentWillUnmount() {
//         document.body.classList.remove("darkMode") 
//         this.handleDarkTheme()
//   }  
  
  handleDarkTheme = () => {    
    this.setState(prevState =>
        ({ isDark: !prevState.isDark }))  
}
    // className={this.handleDarkTheme(stt) ? "darkMode" : ""}
    render() {
        return (
        <div className={`theme ${this.state.isDark ? "darkMode" : ""}`}>
            <SidebarMini 
                passDarkTheme={this.handleDarkTheme}
                isDark={this.state.isDark}
            />
            <Header 
                isDark={this.state.isDark}
            />
            <Cover />
            <Intro/>
            <Courses/>
            <Viewing/>
            <Banner/>
            <Categories/>
            <Students/>
            <Partners/>
            <Jobs/>
            <Footer
                isDark={this.state.isDark}
            />     
        </div>
        )
    }
}

export default App



// import React from 'react'

// const App = () => {
//     const [isDark, setIsDark] = useState(false);

//     return (
//         <>   
//         {/* // <div className={`theme ${this.state.isDark ? "darkMode" : ""}`}> */}
//             <SidebarMini 
//                 passDarkTheme={this.handleDarkTheme}
//                 isDark={this.state.isDark}
//             />
//             <Header />
//             <Cover />
//             <Intro/>
//             <Courses/>
//             <Viewing/>
//             <Banner/>
//             <Categories/>
//             <Students/>
//             <Partners/>
//             <Jobs/>
//             <Footer/>     
//         {/* </div> */}
//         </>
//     )
// }

// export default App

