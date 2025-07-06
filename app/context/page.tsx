export const dynmic = "force-dynamic";

export default async function Page() {
  const sentences = [
    "Welcome to My Portfolio!",
    "This is a sample page.",
    "Explore my projects and skills.",
    "Feel free to reach out!",
    "Coding is my passion.",
  ];

  const randomSentence = sentences[Math.floor(Math.random() * sentences.length)];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">{randomSentence}</h1>
      </div>
    </main>
  );
}