




export default function Filters({ value, upDateChange}) {
    
    // const filterTypes
    return (
        <div>
            <ul>
                <li> Price 
                    <input type='text' onChange={upDateChange} value={value}> 
                    </input>
                    
                </li>

                <li> Stars </li>
                <li> Season </li>
            </ul>
        </div>
    )
}