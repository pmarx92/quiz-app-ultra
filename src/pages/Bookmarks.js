import Card from '../components/cards/Card'


function Bookmarks({ cards }) {
  return (
    <>
      {cards.map(card => {
        if (card.bookmarked === true) {
          return <Card
            key={card.id}
            question={card.question}
            answer={card.answer}
            tags={card.tags}
            bookmarked={card.bookmarked}
          />
        } else {
          return ""
        }
      })}
    </>
  )
}

export default Bookmarks