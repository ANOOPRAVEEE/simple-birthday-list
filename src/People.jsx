const People = ({ name, image, age }) => {
    return (
        <article className="person">
            <img src={image} alt={name} />
            <div>
                <h4>{name}</h4>
                <p>Age: {age}</p>
            </div>
        </article>
    )
}

export default People