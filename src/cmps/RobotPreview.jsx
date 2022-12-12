import { Link } from "react-router-dom"

export function RobotPreview({ robot, onRemoveRobot }) {
    const robotStyle = { backgroundImage: `url(https://robohash.org/${robot._id})` }
    
    const prevProps = { className: 'robot-preview', style: robotStyle }
    return (
        <section {...prevProps}>
            <Link to={`/robot/${robot._id}`} className="info">
                <h2>{robot.model}</h2>
                <h4>{robot.type}</h4>
            </Link>
            <section className="actions">
                <button onClick={() => onRemoveRobot(robot._id)}>Delete</button>
                <Link to={`/robot/edit/${robot._id}`}>Edit Robot</Link>
            </section>
        </section>
    )
}
