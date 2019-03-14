import React, { Component, Fragment } from 'react';
import { Header, Footer } from './Layouts'
import ProjectCards from './ProjectCards';


export default class extends Component {

  render() {
    return <Fragment>

            <Header />
            <ProjectCards />
            <Footer />

    </Fragment>
  }


}