'use client';

import { useState } from 'react';

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 bg-white shadow-sm z-50">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-900">
            Euler International Co.,Ltd.
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">会社概要</a>
            <a href="#services" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">事業内容</a>
            <a href="#contact" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">お問い合わせ</a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-full h-0.5 bg-gray-600 transform transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
              <span className={`block w-full h-0.5 bg-gray-600 mt-1 transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-full h-0.5 bg-gray-600 mt-1 transform transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
            </div>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-2">
              <a href="#about" className="block py-2 text-gray-700 hover:text-orange-500 font-medium">会社概要</a>
              <a href="#services" className="block py-2 text-gray-700 hover:text-orange-500 font-medium">事業内容</a>
              <a href="#contact" className="block py-2 text-gray-700 hover:text-orange-500 font-medium">お問い合わせ</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
                <span className="text-orange-500">シミュレーション</span>で、<br />
                世界はもっと<br />
                面白くなる。
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-xl">
                複雑な現実をデジタル空間で再現し、<br />
                新たな可能性を探求する。
              </p>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-orange-400 rounded-2xl transform rotate-3"></div>
                  <div className="relative aspect-square rounded-2xl overflow-hidden">
                    <img src="/1.png" alt="シミュレーション例1" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="relative mt-8">
                  <div className="absolute inset-0 bg-yellow-400 rounded-2xl transform -rotate-3"></div>
                  <div className="relative aspect-square rounded-2xl overflow-hidden">
                    <img src="/2.png" alt="シミュレーション例2" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="relative -mt-8">
                  <div className="absolute inset-0 bg-teal-400 rounded-2xl transform rotate-6"></div>
                  <div className="relative aspect-square rounded-2xl overflow-hidden">
                    <img src="/3.png" alt="シミュレーション例3" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-500 rounded-2xl transform -rotate-6"></div>
                  <div className="relative aspect-square rounded-2xl overflow-hidden">
                    <img src="/4.png" alt="シミュレーション例4" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">会社概要</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              複雑なシステムをシミュレーションで解析し、<br />
              新たな価値を創造するテクノロジー企業です。
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">私たちのミッション</h3>
              <p className="text-gray-600 mb-8 text-lg">
                現実世界の複雑な現象をデジタル空間で再現し、<br />
                予測と最適化を通じて社会課題の解決に貢献します。<br />
                シミュレーションの力で、世界をもっと面白く、もっと良い場所にしていきます。
              </p>
              <ul className="grid md:grid-cols-3 gap-6 text-gray-600">
                <li className="flex flex-col items-center">
                  <span className="w-4 h-4 bg-orange-500 rounded-full mb-2"></span>
                  複雑系の理解と予測
                </li>
                <li className="flex flex-col items-center">
                  <span className="w-4 h-4 bg-teal-500 rounded-full mb-2"></span>
                  AI技術の社会実装
                </li>
                <li className="flex flex-col items-center">
                  <span className="w-4 h-4 bg-yellow-500 rounded-full mb-2"></span>
                  イノベーションの創出
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">事業内容</h2>
            <p className="text-gray-600">最先端のシミュレーション技術で未来を創造します</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-orange-500">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🔗</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">マルチエージェント<br />シミュレーション</h3>
              <p className="text-gray-600">
                複数の自律的エージェントによる複雑システムのシミュレーション。
                都市計画、交通最適化、経済モデリングなど幅広い分野に対応。
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-teal-500">
              <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">AIエンジニアリング<br />ソフトウェア</h3>
              <p className="text-gray-600">
                機械学習モデルの開発・運用を効率化するプラットフォーム。
                AutoMLからMLOpsまで、AI開発のライフサイクル全体をサポート。
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-blue-500">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">予測分析<br />プラットフォーム</h3>
              <p className="text-gray-600">
                リアルタイムデータと高度なアルゴリズムを組み合わせ、
                ビジネスの意思決定を支援する予測分析ソリューション。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">お問い合わせ</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            ご質問やご相談がございましたら、<br />
            お気軽にお問い合わせください。
          </p>
          
          <button className="bg-orange-500 text-white px-12 py-4 rounded-full text-lg font-bold hover:bg-orange-600 transition-colors">
            お問い合わせする
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Euler International Co.,Ltd.</h3>
              <p className="text-gray-400">
                シミュレーションで、<br />
                世界はもっと面白くなる。
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">お問い合わせ</h4>
              <div className="space-y-2 text-gray-400">
                <p>📧 info@euler-international.com</p>
                <p>📍 東京都港区南青山2丁目2番15号WinAoyamaビル-UCF917</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">リンク</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">プライバシーポリシー</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">利用規約</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">会社概要</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Euler International Co.,Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}