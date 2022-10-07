const clickHandler = () => {
    alert('Here is more information on this book')
  }
  const onHover = (title) => {
    return(title)
  }
  const Book = ({ img, title, author }) => {
    return (
      <article className='book' onMouseOver={onHover}>
        <img src={img} alt=''/>
        <h1 onClick={()=>{alert('hey')}}>{title}</h1>
        <h4>{author}</h4>
        <button type='button' onClick={()=>clickHandler()}>Click for more Information</button>
      </article>
    )
  }
export default Book;