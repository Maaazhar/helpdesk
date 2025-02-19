import Link from "next/link"

async function getTickets() {
  //imitate delay
  await new Promise(resolve => setTimeout(resolve, 3000))

  const res = await fetch(`http://localhost:4000/tickets`, {
    next: {
      revalidate: 0 // using 0 for opt of cache use 
    }
  })
  return res.json()
}

export default async function TicketList() {
  const tickets = await getTickets()
  return (
    <>
      {tickets.map((ticket) => (
        <Link href={`/tickets/${ticket.id}`} key={ticket.id}>
          <div className="card my-5">
            <h3>{ticket.title}</h3>
            <p>{ticket.body.slice(0, 200)}...</p>
            <div className={`pill ${ticket.priority}`}>
              {ticket.priority} priority
            </div>
          </div>
        </Link>
      )).reverse()}
      {tickets.length === 0 && (
        <p className="text-center">There are no open tickets...</p>
      )}
    </>
  )
}
