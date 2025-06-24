'use client';

import { useState /*, useEffect*/ } from 'react';
import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/data';
import type { Schema } from '@/amplify/data/resource';
import outputs from '@/amplify_outputs.json';
import '@aws-amplify/ui-react/styles.css';
import Script from 'next/script';

Amplify.configure(outputs);

const client = generateClient<Schema>();

// -----------------------------
// Model setup (Story -> Todo fallback)
// -----------------------------
const StoryModel = (client.models as any).Story ?? (client.models as any).Todo;

if (!StoryModel) {
  // eslint-disable-next-line no-console
  console.warn(
    'Neither Story nor Todo model found in Amplify schema. Please check your GraphQL `@model` definitions.'
  );
}

export default function RinawanStories() {
  const [stories, setStories] = useState<Array<any>>([]);

  // -----------------------------
  // Realtime sync (disabled)
  // -----------------------------
  /*
  useEffect(() => {
    if (!StoryModel) return;

    const sub = StoryModel.observeQuery().subscribe({
      next: ({ items }: { items: any[] }) => setStories([...items]),
    });
    return () => sub.unsubscribe();
  }, []);
  */

  async function createStory() {
    if (!StoryModel) {
      alert('モデルが定義されていません。Amplify スキーマを確認してください。');
      return;
    }

    const title = window.prompt('タイトルを入力してください');
    const content = window.prompt('ストーリー本文を入力してください');

    if (title && content) {
      await StoryModel.create({ title, content });
    }
  }

  return (
    <main className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">りなわんのストーリー</h1>

      <button
        onClick={createStory}
        className="mb-6 rounded bg-indigo-600 px-4 py-2 font-medium text-white shadow hover:bg-indigo-700"
      >
        ＋ 新規ストーリー
      </button>

      {/* ----------------------------------------------------------------- */}
      {/* 📎 Paste‑in Note embed (requested snippet preserved verbatim)       */}
      {/* ----------------------------------------------------------------- */}
      <section className="mb-8">
        <div
          // React では生 HTML を挿入するために dangerouslySetInnerHTML を使用
          dangerouslySetInnerHTML={{
            __html:
              '<iframe class="note-embed" src="https://note.com/embed/notes/n62f4bb0cb7a2" style="border: 0; display: block; max-width: 99%; width: 494px; padding: 0px; margin: 10px 0px; position: static; visibility: visible;" height="400"></iframe><script async src="https://note.com/scripts/embed.js" charset="utf-8"></script>',
          }}
        />
        {/* Fallback: ensure embed.js is loaded even if script above is inert */}
        <Script src="https://note.com/scripts/embed.js" strategy="lazyOnload" />
      </section>

      <ul className="space-y-4">
        {stories.map((story) => (
          <li key={story.id} className="rounded border p-4 shadow-sm">
            <h2 className="text-lg font-semibold">{story.title}</h2>
            <p className="mt-2 whitespace-pre-wrap leading-relaxed">{story.content}</p>
          </li>
        ))}
      </ul>

      <div className="mt-10 text-sm text-gray-500">
        🥳 Amplify + Next.js アプリがデプロイできました！ストーリーを追加して試してみてください。
        <br />
        <a
          href="https://docs.amplify.aws/nextjs/start/quickstart/nextjs-app-router-client-components/"
          className="underline hover:text-indigo-700"
        >
          チュートリアルの次のステップを見る
        </a>
      </div>
    </main>
  );
}

