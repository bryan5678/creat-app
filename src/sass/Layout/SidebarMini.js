
import React, { Component } from 'react';
import { FaCog } from 'react-icons/fa';

class SidebarMini extends Component {
    state={
        isOpen: false,
    }

    handleToggleSidebar = () => {
        this.setState(prevState =>
             ({ isOpen: !prevState.isOpen })
    )}

    render() {
        return (
            <div className={`sidebarMini ${this.state.isOpen ? "is-opened" : ""}`}>
            <button className="sidebarMini__button rounded-left" onClick={this.handleToggleSidebar}>
                <FaCog/>
            </button>
            <div className="sidebarMini__content text-center">
                <h2>Dark Mode</h2>
                <div className="d-flex align-items-center justify-content-between">
                    <span>Off</span>
                    <label className="switch" htmlFor="toogle">
                        <button type="submit" id="toogle"
                               onClick={this.props.passDarkTheme}
                               name="isDark"
                        >

                        </button>
                        <div className={`slider ${this.props.isDark ? "dark" : ""}`}></div>
                    </label>
                    <span>On</span>
                </div>
            </div>
        </div>
        )
    }
}

export default SidebarMini
