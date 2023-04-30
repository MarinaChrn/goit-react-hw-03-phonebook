import { StyledFilter } from "./FilterContacts.styled";
import PropTypes from 'prop-types';;

export const FilterContacts = ({searchByName})=> {
    return (
        <div>
            <h3>Find contacts by name</h3>
            <StyledFilter type="text" placeholder="Write name" onChange={(event)=>{searchByName(event.target.value)}}/>
        </div>
    )
}

FilterContacts.propTypes = {
    searchByName: PropTypes.func.isRequired,
}