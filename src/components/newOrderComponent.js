import React, { Component } from "react";
import OrderService from "../services/orderService";

export default class AddOrder extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeWeight = this.onChangeWeight.bind(this);
        this.onChangeColour = this.onChangeColour.bind(this);
        this.onChangeCountry = this.onChangeCountry.bind(this);

        this.sendForm = this.sendForm.bind(this);

        this.state = {
            name: "",
            weight: 0,
            colour: null,
            country: "sweden"
        };
    }

    onChangeName(event) {
        this.setState({
            name: event.target.value
        });
    }

    onChangeWeight(event) {
        this.setState({
            weight: event.target.value
        });
    }

    onChangeColour(event) {
        this.setState({
            colour: event.target.value
        });
    }

    onChangeCountry(event) {
        this.setState({
            country: event.target.value
        });
    }

    sendForm() {
        const data = {
            name: this.state.name,
            weight: this.state.weight,
            colour: this.state.colour,
            country: this.state.country
        };
        console.log(data);

        //  Validators
        if (!this.validInput(data)) {
            return;
        }
        OrderService.submitOrder(data)
            .then(response => {
                console.log(response.status);
            }).catch(error => {
                console.log(error);
        });
    }

    validInput(data) {
        switch (true) {
            case (data.name === ""):
                alert("Name Fiend Cannot Be Empty");
                return false;
            case (data.weight <= 0):
                alert("Weight Value Has To Be Greater Than 0");
                return false;
            case (data.colour === null):
                alert("Colour Has Not Been Chosen");
                return false;
            default:
                return true;
        }
    }

    render() {
        return (
            <div id="form" className="submit-form">
                <label htmlFor="name">First Name</label>
                <input type="text" id="name" name="name" onChange={this.onChangeName} placeholder="e.g. John"/>

                <label htmlFor="weight">Weight (kg)</label>
                <input type="number" id="weight" name="weight" onChange={this.onChangeWeight} placeholder="e.g. 5"/>

                <label htmlFor="name">Box Colour</label>
                <input type="color" id="name" name="colour" onChange={this.onChangeColour}/>

                <label htmlFor="country">Country</label>
                <select id="country" name="country" onChange={this.onChangeCountry}>
                    <option value="sweden">Sweden</option>
                    <option value="china">China</option>
                    <option value="brazil">Brazil</option>
                    <option value="australia">Australia</option>
                </select>
                <button onClick={this.sendForm}>Submit</button>
            </div>
        );
    }
}
