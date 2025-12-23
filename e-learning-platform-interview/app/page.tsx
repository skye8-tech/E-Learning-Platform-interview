// app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Learn Skills That Move Your Career Forward
          </h1>

          <p className="mt-6 text-lg text-indigo-100 max-w-2xl mx-auto">
            Browse expert-led courses, learn at your own pace, and grow your
            skills with practical, real-world knowledge.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <Link
              href="/courses"
              className="rounded-lg bg-white px-6 py-3 text-indigo-600 font-semibold hover:bg-gray-100"
            >
              Browse Courses
            </Link>

            <Link
              href="/login"
              className="rounded-lg border border-white px-6 py-3 font-semibold hover:bg-white hover:text-indigo-600 transition"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Learn With Us?
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <Feature
              title="Expert Instructors"
              description="Learn from professionals with real industry experience."
            />
            <Feature
              title="Flexible Learning"
              description="Study anytime, anywhere, at your own pace."
            />
            <Feature
              title="Career-Focused"
              description="Courses designed to help you land jobs and grow."
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            How It Works
          </h2>

          <div className="grid gap-8 md:grid-cols-3 text-center">
            <Step number="1" title="Browse Courses" />
            <Step number="2" title="Enroll & Learn" />
            <Step number="3" title="Grow Your Skills" />
          </div>
        </div>
      </section>
      <section className="bg-indigo-600 py-20 text-white text-center">
        <h2 className="text-3xl font-bold">
          Ready to Start Learning?
        </h2>

        <p className="mt-4 text-indigo-100">
          Join thousands of learners building real skills today.
        </p>

        <Link
          href="/courses"
          className="mt-8 inline-block rounded-lg bg-white px-8 py-3 font-semibold text-indigo-600 hover:bg-gray-100"
        >
          Explore Courses
        </Link>
      </section>
    </main>
  );
}

function Feature({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-lg border p-6 text-center hover:shadow transition">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-3 text-gray-600">{description}</p>
    </div>
  );
}
function Step({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div>
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-white font-bold">
        {number}
      </div>
      <h3 className="font-semibold">{title}</h3>
    </div>
  );
}
