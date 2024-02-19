
export default function Products({products}){

    return(
    <main className="w-1/2 h-screen grid grid-cols-3 gap-10">
        {
        products.slice(0,10).map(product => 
        <div  key={product.id} className="card bg-zinc-900 w-100 h-100 text-white flex flex-col p-5 gap-2">
            <img src={product.thumbnail} alt={"Image of a " + product.title} />
            <h1>{product.title}</h1>
            <span className="self-end">{product.price + "$"}</span>
        </div>
        )}
    </main>
    )
}