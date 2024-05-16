import { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: { id: string };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Item ${params.id}`,
  };
};
export default function ProductItem({ params }: Props) {
  const { id } = params;
  if (parseInt(id) === 1) {
    return notFound();
  }
  return (
    <div>
      <h1>Item {id}</h1>
    </div>
  );
}
