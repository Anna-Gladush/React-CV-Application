const Submitted = ({type, name, handleDelete, handleEdit, handleSubmit}) => {
  return (
    <>
      {type === "school" ? `School: ${name}` : `Company: ${name}` }
      <div className='buttons'>
        <button className="delete" name="school" onClick={handleDelete}>Delete</button>
        <button className="edit" name="school" onClick={handleEdit}>Edit</button>
        <button className="submit" name="school" onClick={handleSubmit}>Submit</button>
      </div>
    </>
  )
}

export default Submitted