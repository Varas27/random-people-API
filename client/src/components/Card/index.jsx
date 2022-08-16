export const Card = ({name, country, age, email}) => {
    return (
        <>
            <div>
                <p>{name} - {country} - {age} - {email}</p>
            </div>
        </>
    )
}