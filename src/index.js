import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'

import List from './containers/List'

const App = () => {
    return (
        <Fragment>
            <nav className="col-sm-12 d-flex justify-content-center">
                <a here="/" className="navbar-brand text-center">
                    ¡Your favorite movies here!
                </a>
            </nav>
            <main>
                <div className="container">
                    <List />
                </div>
            </main>
        </Fragment>

    )
}

ReactDOM.render(<App />, document.getElementById('root'))