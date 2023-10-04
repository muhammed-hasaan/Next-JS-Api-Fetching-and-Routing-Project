import getProducts from "../lib/productapi";
import Link from "next/link";
export default async function products() {
    const productData = await getProducts()
    console.log(productData);

    return (
        <div>
            <div className='flex justify-center my-9'>

                <Link href="/" className='mx-5'><button>Home</button></Link>
                <Link href="/products" className='mx-5'><button>Products</button></Link>
            </div>
            <div style={{ display: "flex", justifyContent: "center", columnGap: "20px", rowGap: "20px", flexWrap: "wrap", height: "100vh" }}>

                {
                    productData.map((product, index) => {
                        return (
                            <div style={{ backgroundColor: "lightblue", width: "20%", display: "flex", justifyContent: "center", alignItems: "center", paddingLeft: "20px" }}>
                                <Link key={index} href={`/products/${product.id}`} className='mx-5'>
                                    <h1>{product.title}</h1>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}