import React, { useState } from 'react'

const Filter = ({ getFilter }) => {
  const [text, setText] = useState('')

  const onChange = (q) => {
    setText(q)
    getFilter(q)
  }

  return (
    <section className='filter'>
      <form>
        <input
          type='text'
          className='form-control'
          placeholder='Search by category'
          value={text}
          onChange={(e) => onChange(e.target.value)}
          autoFocus
        />
      </form>
    </section>
  )
}

export default Filter
