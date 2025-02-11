import { useState } from "react";

// Función externa para validar la URL con regex
const isValidUrl = (url: string): boolean => {
  const urlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
  return urlRegex.test(url);
};

export default function ShorterURL() {
  const [url, setUrl] = useState<string>('');
  const [slug, setSlug] = useState<string>('');
  const [shortUrl, setShortUrl] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isValidUrl(url)) {
      setError('Por favor, introduce una URL válida.');
      return;
    }

    if (!slug) {
      setError('Por favor, introduce un slug.');
      return;
    }

    // Aquí iría la lógica para acortar la URL y asignarle el slug
    // Por ahora, simplemente concatenamos la URL base con el slug
    const baseUrl = 'https://short.url/';
    setShortUrl(baseUrl + slug);
    setError('');
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="url" className="block text-sm font-medium text-gray-700">
            URL
          </label>
          <input
            type="text"
            id="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Introduce la URL"
          />
        </div>

        <div>
          <label htmlFor="slug" className="block text-sm font-medium text-gray-700">
            Slug
          </label>
          <input
            type="text"
            id="slug"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Introduce el slug"
          />
        </div>

        <div>
          <label htmlFor="short-url" className="block text-sm font-medium text-gray-700">
            URL Acortada
          </label>
          <input
            type="text"
            id="short-url"
            value={shortUrl}
            readOnly
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Aquí aparecerá la URL acortada"
          />
        </div>

        {error && (
          <span className="text-red-500 text-sm">{error}</span>
        )}

        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Acortar URL
        </button>
      </form>
    </div>
  );
};