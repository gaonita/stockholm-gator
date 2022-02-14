import StreetItem from "./StreetItem";
import classes from "./StreetList.module.css"

function StreetList(props){
    return(
        <ul className={classes.list}>
            {props.streets.map((street)=>(
                <StreetItem
                    key={street.id}
                    id={street.id}
                    image={street.image}
                    title={street.title}
                    address={street.address}
                />
            ))}
        </ul>
    )
}

export default StreetList;
