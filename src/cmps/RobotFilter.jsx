import { Component } from 'react'

export class RobotFilter extends Component {

    state = {
        model: '',
        type: '',
        minBatteryStatus: '',
        maxBatteryStatus: '',
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.value
        this.setState({ [field]: value },  () => {
            this.props.onChangeFilter(this.state)
        })
    }

    render() {
        const { model, type, minBatteryStatus, maxBatteryStatus } = this.state
        return (
            <section className="robot-filter">

                <section>
                    <label htmlFor="model">Model</label>
                    <input onChange={this.handleChange} type="text" id="model" name="model" value={model} />
                </section>
                <section>
                    <label htmlFor="type">Type</label>
                    <input onChange={this.handleChange} type="text" id="type" name="type" value={type} />
                </section>
                <section>
                    <label htmlFor="minBatteryStatus">minBatteryStatus</label>
                    <input onChange={this.handleChange} type="number" id="minBatteryStatus" name="minBatteryStatus" value={minBatteryStatus} />
                </section>
                <section>
                    <label htmlFor="maxBatteryStatus">maxBatteryStatus</label>
                    <input onChange={this.handleChange} type="number" id="maxBatteryStatus" name="maxBatteryStatus" value={maxBatteryStatus} />
                </section>
            </section>
        )
    }
}
