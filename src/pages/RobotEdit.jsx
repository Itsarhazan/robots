import { Component,  createRef } from 'react'
import { robotService } from '../services/robotService'

export class RobotEdit extends Component {

    state = {
        robot: null
    }

    // inputRef = createRef()

    async componentDidMount() {
        console.log('this.props:', this.props)
        const id = this.props.match.params.id
        const robot = id ? await robotService.getById(id) : robotService.getEmptyRobot()
        this.setState({ robot }, ()=>{
            // this.inputRef.current.focus()
        })
        
    }

    handleChange = async ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? (+target.value || '') : target.value
        this.setState(prevState => ({ robot: { ...prevState.robot, [field]: value } }))
    }

    onSaveRobot = async (ev) => {
        ev.preventDefault()
        await robotService.save({ ...this.state.robot })
        this.props.history.push('/')
    }

    inputRef = (elInput) => {
        if (elInput) elInput.focus()
    }

    render() {
        const { robot } = this.state
        if (!robot) return <div>Loading...</div>
        return (
            <section className='robot-edit'>
                <h2>{robot._id ? 'Edit' : 'Add'} Robot</h2>
                <form onSubmit={this.onSaveRobot} >
                    <label htmlFor="model">Model</label>
                    <input ref={this.inputRef} onChange={this.handleChange} value={robot.model} type="text" name="model" id="model" />

                    <label htmlFor="type">Type</label>
                    <select onChange={this.handleChange} value={robot.type} name="type" id="type">
                        <option value="" disabled>Choose a Type</option>
                        <option value="Cooking">Cooking</option>
                        <option value="Cleaning">Cleaning</option>
                        <option value="Pleasure">Pleasure</option>
                        <option value="Office">Office</option>
                    </select>

                    <button>Save</button>
                </form>

            </section>
        )
    }
}
