import Card from "../components/cards/Card";

function Bookmarks({ cards, removeFromBookmarkedList, handleBookmark }) {
  return (
    <div>
      {cards.map((card) => {
        if (card.bookmarked === true) {
          return (
            <Card
              id={card.id}
              question={card.question}
              answer={card.answer}
              tags={card.tags}
              handleBookmark={handleBookmark}
              bookmarked={card.bookmarked}
              onClick={() => removeFromBookmarkedList(card.id)}
            />
          );
        } else {
          return "";
        }
      })}
    </div>
  );
}

export default Bookmarks;
