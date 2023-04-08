// Write your code here.

import './index.css'

const CardItem = props => {
  const {details, key} = props

  const {title, description, imgUrl, className} = details

  return (
    <li className={`card-one ${className} justify-content=end`}>
      <h1 className="title">{title}</h1>
      <p className="data">{description}</p>
      <div className="image-container">
        <img src={imgUrl} className="image" alt={title} />
      </div>
    </li>
  )
}

export default CardItem
