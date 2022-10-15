import Card from "../components/cards/Card";


function Cards({ cardArray, setBookmark }) {
    return (
        <div className="cards">
            {cardArray.map((card) => (
                <Card
                    key={card.id}
                    question={card.question}
                    answer={card.answer}
                    tags={card.tags}
                    bookmarked={card.bookmarked}
                    setBookmark={() => setBookmark()}
                />
            ))}
        </div>
    );
}

export default Cards;
