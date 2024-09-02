import People from "./People"


const List = ({ peoples }) => {

    return (
        <section className="">
            {

                peoples.map((people) => {
                    return <>
                        <People key={people.id} {...people} />
                    </>
                })
            }
        </section>
    )
}

export default List