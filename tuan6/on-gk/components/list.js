import { FlatList } from "react-native"
import Item from "./item"

export default List = (props) => {
    return (
        <>
            <FlatList 
                data={props.data}
                renderItem={({item}) => {
                    return <Item item={item}/>
                }}
            />
        </>
    )
}