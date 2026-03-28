function Child({name,age,address, onUpdateName,onUpdateAge, onUpdateAddres}) {
    return (
        <>
        <div>
            <h1>Child component</h1>
            <p>Name : {name}</p>
            <p>Age  : {age}</p>
            <p>Address : {address}</p>
            </div>
            <div>
                <h1>Child to parent </h1>
                <button onClick={()=> onUpdateName("Update by child")}>updateName</button>
                <button onClick={()=> onUpdateAge("75")}>update age</button>
                <button onClick={ () => onUpdateAddres("bngalore")}>update location</button>
                </div>
        </>
    )
}
export default Child                                                                                               