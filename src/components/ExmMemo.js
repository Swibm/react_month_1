import { memo, useEffect } from "react"

const ExmMemo = memo(({log, amount}) => {

    useEffect(() => 
    {
        log("render")
    }, [log])

    return (
        <div>
            Memo {amount}
        </div>
    )
})

export default memo(ExmMemo )