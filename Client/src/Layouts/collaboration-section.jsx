import { FaGithub } from 'react-icons/fa';

export default function DevCollaborationSection() {
  return (
    <section className="bg-slate-900 text-white py-20 px-6 md:px-16 text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto z-10 relative">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Let’s Build This Together
        </h2>
        <p className="text-lg text-slate-300 mb-8">
          Are you a developer passionate about open-source? SwiftBill is built with community in mind.
          Collaborate, contribute, and shape the future of subscription management.
        </p>

        <a
          href="https://github.com/Mshindi901/SwiftBill.git" // ← Replace with actual repo
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-6 py-3 bg-white text-slate-900 font-semibold rounded-xl shadow-md hover:bg-slate-200 transition"
        >
          <FaGithub size={20} />
          View on GitHub
        </a>
      </div>

      {/* Optional blurred background blob */}
      <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-violet-700 opacity-30 rounded-full filter blur-3xl z-0"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-600 opacity-20 rounded-full filter blur-2xl z-0"></div>
    </section>
  );
}
