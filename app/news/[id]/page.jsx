import React from 'react'
import Link from 'next/link'
async function getTicket(id) {
    const res = await fetch('http://localhost:4000/tickets/'+id, {
      next: {
        revalidate: 60 
      }
    })
  
    return res.json()
  }



export default async function TicketDetails({ params }) {
    const ticket = await getTicket(params.id)
  return (
    <main>
        <h2>{ticket.title}</h2>
        <p>{ticket.body}</p>
        <div className="flex flex-row justify-end mr-56">
        <div className={`p-3 rounded-lg  w-20 ${
      ticket.priority === 'low' ? 'bg-red-500' :
      ticket.priority === 'medium' ? 'bg-blue-500' :
      ticket.priority === 'high' ? 'bg-green-500' : ''
    }`}>
          {ticket.priority} priority
        </div>
        </div>
        <small>created by : {ticket.user_email}</small>

        <div className="flex flex-row justify-center">
             <Link href='/news'>
             <button className="bg-gray-400 p-4 rounded-md w-72">Back</button>
             </Link>
           
         </div>
    </main>
  )
}
