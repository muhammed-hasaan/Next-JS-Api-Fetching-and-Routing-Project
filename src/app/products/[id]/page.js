import getDetailProducts from "@/app/lib/detailapi";
import Link from "next/link";
export default async function getDetail({ params }) {

    const getDetaildata = await getDetailProducts(params.id)
    console.log(getDetaildata);
    return (
        <div>
            <div className='flex justify-center my-9'>

                <Link href="/products" className='mx-5'><button>Products</button></Link>
            </div>
            <div>
                <img width={200} height={200} src={getDetaildata.image} />
                <h1>{getDetaildata.title}</h1>
                <p>{getDetaildata.price}</p>
            </div>
        </div>
    )

}