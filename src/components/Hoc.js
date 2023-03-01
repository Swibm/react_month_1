const Hoc = ({ Component }) => {

    Hoc.displayName = 'DisplayName'

    return (
        <div className="wrapper">
            <Component render = 
            {   
                (sum, sum2) => 
                {
                return (
                <div>
                    <h1>{sum} + {sum2} = {sum+sum2}</h1>
                </div>)
                }
            }/>  
        </div>
    )
}

export default Hoc