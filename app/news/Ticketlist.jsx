import Link from "next/link"

async function getTickets() {
    const res = await fetch('http://localhost:4000/tickets', {
      next: {
        revalidate: 0 // use 0 to opt out of using cache
      }
    })
  
    return res.json()
  }
  
  export default async function TicketList() {
    const tickets = await getTickets()
  
    return (
      <>
        {tickets.map((ticket) => (
         <div key={ticket.id} class="card my-5 ml-60 w-[850px] bg-yellow-400 p-4 transform scale-100 hover:scale-105 transition-transform duration-300 ease-in-out">
    
       
      <Link href= {`/news/${ticket.id}`}>
      <h3>{ticket.title}</h3>
            <p>{ticket.body.slice(0, 200)}...</p>
            <div className="flex flex-row justify-end">
            <div className={`p-3 rounded-lg  w-20 ${
      ticket.priority === 'low' ? 'bg-red-500' :
      ticket.priority === 'medium' ? 'bg-blue-500' :
      ticket.priority === 'high' ? 'bg-green-500' : ''
    }`}>
              {ticket.priority} priority
            </div>
            </div>
      </Link>
    
            </div>
            
         
        ))}
        {tickets.length === 0 && (
          <p className="text-center">There are no open tickets, yay!</p>
        )}
         <div className="flex flex-row justify-center">
             <Link href='/'>
             <button className="bg-gray-400 p-4 rounded-md w-72">Back</button>
             </Link>
           
         </div>
      </>
    )
  }