import React, { Component } from 'react'
import FormSearch from './FormSearch'

class Cover extends Component {
    state={
        formSearch: "cover__form-search",
    }

    render() {
        return (
            <section className="cover" >
                <div className="cover__content">
                    <h1>Learn on your schedule</h1>
                    <p>
                        Study any topic, anytime. Explore thousands of courses for as low as $19.99
                    </p>
                    <FormSearch 
                        name={this.state.formSearch}
                        placeHolder="What do you want to learn?"
                    />
                </div>
            </section> 
        )
    }
}

export default Cover
