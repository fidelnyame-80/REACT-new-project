import React, { Component } from 'react'
import Title from './Title'
import Description from './Description'
import Image from './Image'

export default class SimpleCard extends Component {
  render() {
    return (
      <div>
        <Title text="This is the title" />
        <Description text='This is the description'/>
        <Image />
      </div>
    )
  }
}
