const Item = (props) => {
    return (
        <li className="border d-flex justify-content-between align-items-center p-2 m-2">
            <div className="p-3">{props.txt}</div>
            <button onClick={() => props.delFunc(props.id)} className="btn btn-danger p-2">
                Supprimer
            </button>
        </li>
    );
}

export default Item;
