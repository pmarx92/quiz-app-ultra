import Card from "../components/cards/Card";


function Cards({ allCards, handleBookmark }) {
    return (
        <div className="cards">
            {allCards.map((card) => (
                <Card
                    key={card.id}
                    question={card.question}
                    answer={card.answer}
                    tags={card.tags}
                    bookmarked={card.bookmarked}
                    handleBookmark={handleBookmark}
                    id={card.id}
                    allCards={allCards}
                />
            ))}
        </div>
    );
}

export default Cards;
