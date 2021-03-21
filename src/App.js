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
 
  
  handleDarkTheme = () => {    
    this.setState(prevState =>
        ({ isDark: !prevState.isDark }))  
}
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


