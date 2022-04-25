import React, { Component } from "react";
import OrderService from "../services/orderService";

export default class AllOrders extends Component {
    constructor(props) {
        super(props);

        this.state = {
            displayData: []
        }
    }

    componentDidMount() {
        let newData = []
        OrderService.getAll().then(response => {
            for (let i = 0; i < response.data.length; i++) {
                let order = response.data[i];
                let row = {
                    name: order[3],
                    weight: order[4],
                    colour: order[1],
                    cost: this.shippingCost(order[4], order[2])
                }
                newData.push(row);
                this.setState({
                    displayData: newData
                })
            }
        })
    }

    shippingCost(weight, country) {
        switch (country) {
            case "sweden":
                return Math.round((weight * 1.3) * 100) / 100;
            case "china":
                return Math.round((weight * 4) * 100) / 100;
            case "brazil":
                return Math.round((weight * 8.6) * 100) / 100;
            case "australia":
                return Math.round((weight * 7.2) * 100) / 100;
            default:
                return 0;
        }
    }

    render() {
        return (
            <div className="submit-form" id="root">
                <table className="table">
                    <thead>
                    <tr>
                        <th>Receiver</th>
                        <th>Weight</th>
                        <th>Box Colour</th>
                        <th>Shipping Cost</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.displayData.map((value, key) => {
                            return (
                                <tr key={key}>
                                    <td>{value.name}</td>
                                    <td>{value.weight}</td>
                                    <td bgcolor={value.colour}> </td>
                                    <td>{value.cost}</td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}
