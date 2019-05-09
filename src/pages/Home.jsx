import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return(
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
    )
  }
}
