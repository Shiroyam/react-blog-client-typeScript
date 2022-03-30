import React from "react"
import Pagination from '@mui/material/Pagination';
import "./pogination.scss"
import { useTypesSelector } from "../../hooks/useTypeSelector";

export const Pogination: React.FC = () => {
    const { flagMenu } = useTypesSelector((state) => state.menu)
    const { posts } = useTypesSelector((state) => state.posts)
    console.log(posts)
    return (<>
        <div className="pogination">
            {flagMenu ?
                <Pagination count={2} size="small" disabled /> :
                <Pagination onClick={() => console.log(1)} count={2} size="small" />}
        </div>
    </>)
}