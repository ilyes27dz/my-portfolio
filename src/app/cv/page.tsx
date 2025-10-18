'use client';

export default function CVPage() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      {/* Header */}
      <div className="bg-gray-800 p-4 flex justify-between items-center shadow-lg z-10">
        <h1 className="text-white text-xl font-bold">NEGHEMOUCHE ILYES - CV</h1>
        <div className="flex gap-3">
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
          >
            👁️ Open in New Tab
          </a>
          <a
            href="/cv.pdf"
            download="NEGHEMOUCHE_ILYES_CV.pdf"
            className="bg-lime-400 hover:bg-lime-500 text-black px-6 py-2 rounded-lg font-semibold transition-colors"
          >
            📥 Download
          </a>
        </div>
      </div>

      {/* PDF Viewer باستخدام embed */}
      <div className="flex-1 bg-gray-800 p-4">
        <embed
          src="/cv.pdf"
          type="application/pdf"
          width="100%"
          height="100%"
          className="rounded-lg shadow-2xl"
          style={{ minHeight: 'calc(100vh - 100px)' }}
        />
      </div>
    </div>
  );
}
