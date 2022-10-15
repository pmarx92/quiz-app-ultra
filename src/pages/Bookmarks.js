import Card from '../components/cards/Card'


function Bookmarks({ cards, setBookmark}) {
  return (
    <>
      {cards.map(card => {
        if (card.bookmarked === true) {
          return <Card
            key={card.id}
            question={card.question}
            answer={card.answer}
            tags={card.tags}
            onClick={(e) => setBookmark(e)}
          />
        } else {
          return ""
        }
      })}
    </>
  )
}

export default Bookmarks