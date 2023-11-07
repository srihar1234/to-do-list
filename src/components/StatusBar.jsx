export default function StatusBar() {
    return (
        <div className="filter">
            <h3>MY TODOS</h3>
            <div>
            <span>STATUS FILTER  :</span>
            <select className="select select-accent w-50 max-w-xs">
                <option selected>All</option>
                <option>NOT COMPLETED</option>
                <option>COMPLETED</option>
            </select>
            </div>
          
        </div>
    )
}