import { useState } from 'react'

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('')
  const [carrier, setCarrier] = useState('')
  const [day, setDay] = useState('')
  const [approved, setApproved] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    if (!text) {
      alert('Please add a task')
      return
    }

    if (!carrier) {
      alert('Please add a task')
      return
    }

    if (!day) {
      alert('Please add a Day & Time')
      return
    }

    onAdd({ text, carrier, day, approved })

    setText('')
    setCarrier('')
    setDay('')
    setApproved(false)
  }

  const date = new Date();

  let dayOfWeek = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${dayOfWeek}-${month}-${year}`;

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Client</label>
        <input
          type='text'
          placeholder='Add Client'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Carrier</label>
        <input
          type='text'
          placeholder='Add Carrier'
          value={carrier}
          onChange={(e) => setCarrier(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Day & Time</label>
        <input
          type= 'date'
          placeholder = {currentDate}
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className='form-control form-control-check'>
        <label>Approved</label>
        <input
          type='checkbox'
          checked={approved}
          value={approved}
          onChange={(e) => setApproved(e.currentTarget.checked)}
        />
      </div>

      <input type='submit' value='Save Task' className='btn btn-block' />
    </form>
  )
}

export default AddTask