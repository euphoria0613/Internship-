import { Metadata } from "next";

type Props = {
  params: {
    slug: string;
  };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `${params.slug} | Doctor Listing`,
    description: `List of doctors for ${params.slug}`,
  };
};

export default function DoctorSpecialtyPage({ params }: Props) {
  return (
    <main>
      <h1>Doctors for: {params.slug}</h1>
      {/* Filters and Doctor List will be rendered here */}
    </main>
  );
}
