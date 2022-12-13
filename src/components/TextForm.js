import React from 'react'

export default function TextForm(props) {
  return (
    <>
    <div>
        <h2>{props.heading}</h2>
    <div class="mb-3">
      <textarea class="form-control" id="myBox" rows="8"></textarea>
    </div>
    </div>
    </>
  )
}
