"use client";
import { useRouter } from "next/navigation";
export default function Product() {
  const router = useRouter();
  return (
    <div>
      <h1 className="bg-red-500 ">Product</h1>
      <h2
        onClick={() => {
          //router.push("/product/1");
          //router.forward();
          // router.back();
          //router.replace("/product/1");
        }}
      >
        To Prod 1
      </h2>
      <h2>Prod 2</h2>
    </div>
  );
}
