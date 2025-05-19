// app/diseases/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { diseases } from '@/data/diseases';

export default function DiseaseDetailPage({ params }: { params: { slug: string } }) {
  const disease = diseases.find((d) => d.slug === params.slug);

  if (!disease) return notFound();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-extrabold text-teal-900">{disease.name}</h1>
      <p className="mt-4 text-lg text-gray-700">{disease.summary}</p>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-teal-700">Causes</h2>
        <p className="mt-2 text-lg text-gray-700">{disease.causes}</p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-teal-700">Symptoms</h2>
        <ul className="mt-2 list-disc pl-6">
          {disease.symptoms.map((symptom, index) => (
            <li key={index} className="text-lg text-gray-700">{symptom}</li>
          ))}
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-teal-700">Treatment</h2>
        <ul className="mt-2 list-disc pl-6">
          {disease.treatment.map((treatment, index) => (
            <li key={index} className="text-lg text-gray-700">{treatment}</li>
          ))}
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-teal-700">Prevention</h2>
        <p className="mt-2 text-lg text-gray-700">{disease.prevention}</p>
      </section>
    </div>
  );
}
