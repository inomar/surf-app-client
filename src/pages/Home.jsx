import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return(
      <React.Fragment>
        <div className="container is-fluid">
          <section className="hero is-info is-large p-heroBackground">
            <div className="hero-body">
              <div className="container">
                <h1 className="title">
                  Large title
                </h1>
                <h2 className="subtitle">
                  Large subtitle
                </h2>
              </div>
            </div>
          </section>
        </div>
        <section className="section">
          <div className="container is-fluid">
            <div className="box">
              <div className="columns">
                <div className="column">head</div>
                <div className="column">body</div>
              </div>
            </div>
            <div className="box">
              <div className="columns">
                <div className="column">head</div>
                <div className="column">body</div>
              </div>
            </div>
          </div>
        </section>
        <section className="section p-homeTmp">

        </section>
      </React.Fragment>
    )
  }
}
