// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, clickEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const onClickEmoji = () => {
    clickEmoji(id)
  }

  return (
    <li className="emoji-item">
      <button className="emoji-button" onClick={onClickEmoji} type="button">
        <img src={emojiUrl} alt={emojiName} className="emoji-image" />
      </button>
    </li>
  )
}
export default EmojiCard
