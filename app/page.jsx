import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div>
        <h1 className="text-5xl text-center mb-10">Welcome to the ticketing system</h1>
        <div className="flex flex-row justify-center">
          <img src="https://png.pngtree.com/thumb_back/fh260/background/20211031/pngtree-abstract-bg-image_914283.png" alt="ticket" width={500} height={500} />
        </div>
      </div>
    </main>
  )
}
