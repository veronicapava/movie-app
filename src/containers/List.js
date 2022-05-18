import React, { Fragment } from "react";

import Card from "../components/Card/Card"


const API = process.env.API

class List extends React.Component {

    constructor() {
        super();
        this.state = {
            data: [],
            searching: '',
            error: '',
            loading: true,
        }
    }

    async componentDidMount() {
        // const res = await fetch('data.json')
        const res = await fetch(`${API}&s=cars&p=20`)
        const resJson = await res.json()
        console.log(resJson)
        this.setState({ data: resJson.Search, loading: false })
    }

    async handleSubmit(e) {
        e.preventDefault();
        if (!this.state.searching) {
            return this.setState({ error: 'Please write a valid text ' })
        }

        const res = await fetch(`${API}&s=${this.state.searching}`)
        const data = await res.json();

        if (!data.Search) {
            return this.setState({ error: 'There are no search results' })
        }


        this.setState({ data: data.Search, error: '', searching: '' })

    }

    render() {

        const { data, loading } = this.state;
        if (loading) {
            return <h3 className="text-light">Loading...</h3>
        }


        return (
            <Fragment>
                <div className="row">
                    <div className="col-md-4 offset-md-4 p-4">
                        <form onSubmit={e => this.handleSubmit(e)}>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search"
                                onChange={e => this.setState({ searching: e.target.value })}
                                autoFocus
                                value={this.state.searching}
                            />
                        </form>
                        <p>
                            {this.state.error ? this.state.error : ''}
                        </p>
                    </div>
                </div>
                <div className="row">
                    {
                        data.map((movie, i) => {
                            return <Card movie={movie} key={i} />
                        })
                    }
                </div>
            </Fragment>

        )
    }
}

export default List;