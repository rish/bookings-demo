// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import axios from 'axios'

const BookingsContainer = () => {
  const [data, setData] = useState([])
  const [spaceId, setSpaceId] = useState(1)

  useEffect(async () => {
    // TODO: Add error handling to this
    const result = await axios(
      `/bookings.json?space_id=${spaceId}`,
    );
 
    setData(result.data);
  }, [spaceId]);

  return (
    <Bookings data={data} spaceId={spaceId} updateSpaceId={setSpaceId} />
  )
}

// TODO: Map this based on spaces outputted from the API instead
const SpaceSelector = (props) => (
  <div>
    <button onClick={() => props.updateSpaceId(1)}>Space 1</button>
    <button onClick={() => props.updateSpaceId(2)}>Space 2</button>
    <button onClick={() => props.updateSpaceId(3)}>Space 3</button>
    <button onClick={() => props.updateSpaceId(4)}>Space 4</button>
    <button onClick={() => props.updateSpaceId(5)}>Space 5</button>
  </div>
)

const BookingsList = (props) => (
  <div>
    {props.data.map(item => 
      <>
        <div style={ {border: '1px solid grey', padding: '10px' }}>
          <div><strong>Name:</strong> {item.name}</div>
          <div><strong>Description:</strong> {item.description}</div>
          {/* TODO: Use a pretty format to output the dates */}
          <div><strong>Start Date:</strong> {item.start_date}</div>
          <div><strong>End Date:</strong> {item.end_date}</div>
        </div>
        <hr />
      </>
    )}
  </div>
)

const BookingsNone = () => (<div>No bookings available for current space</div>)

const Bookings = props => (
  <div>
    <p>Showing bookings for space: {props.spaceId}!</p>
    <SpaceSelector updateSpaceId={props.updateSpaceId} />
    {props.data.length > 0 
      ? <BookingsList data={props.data} />
      : <BookingsNone />
    }
  </div>
)

Bookings.defaultProps = {
  data: [],
  spaceId: 1 
}

Bookings.propTypes = {
  data: PropTypes.array,
  spaceId: PropTypes.number
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <BookingsContainer />,
    document.body.appendChild(document.createElement('div')),
  )
})
