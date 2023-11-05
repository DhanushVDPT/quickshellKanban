import Card from "./card";

const User = (props) => {
    const users = props.users;
    const tickets = props.tickets;
    var userTickets = {};
    users.map((user)=>(userTickets[user.id] = []))
    tickets.map((ticket)=>(userTickets[ticket.userId].push(ticket)))
    if (props.sortPriority) {
        users.map((user)=>(userTickets[user.id].sort((a,b)=>b.priority-a.priority)))
    }
    if (props.sortTitle) {
        users.map((user)=>(userTickets[user.id].sort((a,b)=>a.title>b.title ? 1:-1)))
    }
    return(
        <div className="usercards">
            {users.map((user)=>(
            <div className="user">
                <div className="userheader">
                    <div className="left">
                        <img src="user.png" alt="userimg" id="userimg" />
                        <span>{user.name}</span>
                        <span className="numtasks">{userTickets[user.id].length}</span>
                    </div>
                    <div className="right">
                        <img src="plus.svg" alt="plus" id="plus"/>
                        <img src="threedots.png" alt="options" id="threedots"/>
                    </div>
                </div>
                {userTickets[user.id].map((ticket)=>(
                    <Card ticket={ticket} userImgDisplayValue={'None'} priorityImgDisplayValue={'block'} priorityImage={ticket.priority} status={ticket.status}/>
                ))}
            </div>
            ))}
        </div>
    )
}

export default User;