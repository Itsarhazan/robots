import { Component } from "react";
import { Link } from 'react-router-dom'
import { NiceButton } from '../cmps/NiceButton'
import { robotService } from "../services/robotService";
import { RobotList } from "../cmps/RobotList";
import { RobotDetails } from "./RobotDetails";
import { RobotFilter } from "../cmps/RobotFilter";

export class RobotApp extends Component {
  state = {
    robots: null,
    filterBy: null,
  };

  componentDidMount() {
  this.loadRobots()
  }

  async loadRobots() {
    const robots = await robotService.query(this.state.filterBy);
    this.setState({ robots });
  }

  onChangeFilter = (filterBy) => {
     this.setState({filterBy}, this.loadRobots)
     } 

     onRemoveRobot = async (robotId) => {
      await robotService.remove(robotId)
      this.loadRobots()
  }
  

  render() {
    const { robots } = this.state;
    if (!robots) return <div>Loading...</div>;
    const Icon = () => '🍎'
    return (
      <section className="robot-app">
         <RobotFilter onChangeFilter={this.onChangeFilter}/>
         <Link to='/robot/edit'>Add Robot</Link>
          <RobotList history={this.props.history} onRemoveRobot={this.onRemoveRobot} robots={robots} />
          <NiceButton onClick={() => console.log('Nice btn clicked')} className="nice-button" Icon={Icon}>
                    Nice button
                </NiceButton>
      </section>
    );
  }
}
