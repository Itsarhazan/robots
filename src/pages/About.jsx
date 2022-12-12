import { NavLink } from "react-router-dom"
import { Route } from "react-router-dom"

export function About() {

    const Team = () => {
        return (
            <ul>
                <li>Moshe Leon</li>
                <li>Lala Ben Regev</li>
                <li>Shimon DiCaprio</li>
            </ul>
        )
    }

    const Vision = () => {
        return (
            <ol>
                <li>Save the world with our robots</li>
                <li>Take over the world with our robots</li>
            </ol>
        )
    }

    return (
        <section className="about">
            <section className="title">
                <h2>About us and robots</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus deleniti, consectetur dolorem fugiat nobis quasi qui aspernatur voluptate blanditiis minima eveniet placeat iusto quisquam ab aut libero saepe itaque ut!</p>
            </section>
            <nav>
                <NavLink to='/about/team'>Team</NavLink>
                <NavLink to='/about/vision'>Vision</NavLink>
            </nav>

            <section>
                <Route path='/about/team' component={Team} />
                <Route path='/about/vision' component={Vision} />
            </section>
        </section>
    )
}
