import './ListItem.css';

function ListItem ({item}) {

    const { name, sprites } = item;
    const sprite = sprites.other["official-artwork"].front_default;

    return (
        <div className="list-item">
            <div className="list-item-image-wrapper">
                <img className="list-item-image" src={sprite} alt="Pokemon" />
            </div>
            <p>{name}</p>
        </div>
    )
}

export default ListItem;