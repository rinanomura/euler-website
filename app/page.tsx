'use client';

import { useState, useEffect } from 'react';
import { RiRobot2Line } from "react-icons/ri";
import { GiArtificialIntelligence } from "react-icons/gi";
import { FaRegFileCode } from "react-icons/fa6";
import { HiOutlinePuzzlePiece } from "react-icons/hi2";
import { GrTechnology } from "react-icons/gr";
import { MdOutlineWbIncandescent } from "react-icons/md";

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [blogArticles, setBlogArticles] = useState([]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 bg-white shadow-sm z-50">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <img src="/Logo.png" alt="Euler International Co.,Ltd." className="h-12" />
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-700 hover:text-orange-500 transition-colors font-medium" style={{fontFamily: 'Meiryo, sans-serif'}}>会社概要</a>
            <a href="#services" className="text-gray-700 hover:text-orange-500 transition-colors font-medium" style={{fontFamily: 'Meiryo, sans-serif'}}>事業内容</a>
            <a href="#contact" className="text-gray-700 hover:text-orange-500 transition-colors font-medium" style={{fontFamily: 'Meiryo, sans-serif'}}>お問い合わせ</a>
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
              <a href="#about" className="block py-2 text-gray-700 hover:text-orange-500 font-medium" style={{fontFamily: 'Meiryo, sans-serif'}}>会社概要</a>
              <a href="#services" className="block py-2 text-gray-700 hover:text-orange-500 font-medium" style={{fontFamily: 'Meiryo, sans-serif'}}>事業内容</a>
              <a href="#contact" className="block py-2 text-gray-700 hover:text-orange-500 font-medium" style={{fontFamily: 'Meiryo, sans-serif'}}>お問い合わせ</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-relaxed" style={{fontFamily: 'Meiryo, sans-serif'}}>
                <span className="mb-4 block"><span style={{color: '#4aadaa'}}>シミュレーション</span>で、</span>
                <span className="mb-2 block">世界はもっと</span>
                 <span>面白くなる。</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-xl" style={{fontFamily: 'Meiryo, sans-serif'}}>
                複雑な現実をデジタル空間で再現し、<br />
                新たな可能性を探求する。
              </p>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <div className="absolute inset-0 rounded-2xl transform rotate-3" style={{backgroundColor: '#4aadaa'}}></div>
                  <div className="relative aspect-square rounded-2xl overflow-hidden">
                    <img src="/1.png" alt="シミュレーション例1" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="relative mt-8">
                  <div className="absolute inset-0 rounded-2xl transform -rotate-3" style={{backgroundColor: '#5fb8b5'}}></div>
                  <div className="relative aspect-square rounded-2xl overflow-hidden">
                    <img src="/2.png" alt="シミュレーション例2" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="relative -mt-8">
                  <div className="absolute inset-0 rounded-2xl transform rotate-6" style={{backgroundColor: '#3fa2a0'}}></div>
                  <div className="relative aspect-square rounded-2xl overflow-hidden">
                    <img src="/3.png" alt="シミュレーション例3" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 rounded-2xl transform -rotate-6" style={{backgroundColor: '#2d978f'}}></div>
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
      <section id="about" className="bg-gradient-to-br from-gray-50 to-gray-100 py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-28 items-center">
            <div className="space-y-10 max-w-6xl mx-auto">
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl transform translate-x-4 translate-y-4 opacity-50" style={{backgroundImage: 'repeating-linear-gradient(45deg, #6b7280 0px, #6b7280 6px, #9ca3af 6px, #9ca3af 12px)'}}></div>
                <div className="relative p-8 rounded-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer" style={{backgroundColor: '#4aadaa'}} onClick={() => setActiveModal('complex')}>
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mr-4" style={{backgroundColor: 'rgba(255, 255, 255, 0.2)'}}>
                      <HiOutlinePuzzlePiece className="text-3xl text-white" />
                    </div>
                    <h4 className="text-2xl font-black text-white" style={{ fontFamily: 'Meiryo, sans-serif' }}>
                      複雑系の理解と予測
                    </h4>
                  </div>
                  <p className="text-sm text-white leading-relaxed opacity-90" style={{ fontFamily: 'Meiryo, sans-serif' }}>
                    複雑な現象を理解し、未来を予測する技術
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl transform -translate-x-4 translate-y-5 opacity-60" style={{backgroundColor: '#9ca3af', backgroundImage: 'radial-gradient(circle, #d1d5db 1px, transparent 1px)', backgroundSize: '8px 8px'}}></div>
                <div className="relative p-8 rounded-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer" style={{backgroundColor: '#4aadaa', backgroundImage: 'radial-gradient(circle, #6bbbb8 1px, transparent 1px)', backgroundSize: '6px 6px'}} onClick={() => setActiveModal('ai')}>
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mr-4" style={{backgroundColor: 'rgba(255, 255, 255, 0.2)'}}>
                      <GrTechnology className="text-3xl text-white" />
                    </div>
                    <h4 className="text-2xl font-black text-white" style={{ fontFamily: 'Meiryo, sans-serif' }}>
                      AI技術の社会実装
                    </h4>
                  </div>
                  <p className="text-sm text-white leading-relaxed opacity-90" style={{ fontFamily: 'Meiryo, sans-serif' }}>
                    最先端AI技術を実社会で活用できる形に
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl transform translate-x-5 translate-y-4 opacity-50" style={{backgroundImage: 'repeating-linear-gradient(45deg, #6b7280 0px, #6b7280 6px, #9ca3af 6px, #9ca3af 12px)'}}></div>
                <div className="relative p-8 rounded-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer" style={{backgroundColor: '#4aadaa'}} onClick={() => setActiveModal('innovation')}>
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mr-4" style={{backgroundColor: 'rgba(255, 255, 255, 0.2)'}}>
                      <MdOutlineWbIncandescent className="text-3xl text-white" />
                    </div>
                    <h4 className="text-2xl font-black text-white" style={{ fontFamily: 'Meiryo, sans-serif' }}>
                      イノベーションの創出
                    </h4>
                  </div>
                  <p className="text-sm text-white leading-relaxed opacity-90" style={{ fontFamily: 'Meiryo, sans-serif' }}>
                    新しいアイデアから革新的なソリューションを
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-12 leading-relaxed mt-12" style={{ fontFamily: 'Meiryo, sans-serif', color: '#4aadaa' }}>
                私たちの挑戦
              </h2>
              <div className="space-y-6">
                <p className="text-xl text-gray-600" style={{ fontFamily: 'Meiryo, sans-serif' }}>
                  経営には常に、「もし◯◯したらどうなるか？」という仮説と思考が伴います。<br />
                  その構想や判断の前提を、言葉だけでなく、動きとして可視化できる仕組みが必要です。
                </p>
                <p className="text-xl text-gray-600" style={{ fontFamily: 'Meiryo, sans-serif' }}>
                  複雑なアイデアも、頭の中に留めたままでは共有も検証もできません。<br />
                  言語・構造・時間軸を用いて、思考を「見える化」し、人と分かち合える状態へ。
                </p>
                <p className="text-xl text-gray-600" style={{ fontFamily: 'Meiryo, sans-serif' }}>
                  重要なのは、意思と構想を持つ人が、自らの思考をそのまま表現できること。<br />
                  その実現を支えるツールと仕組みを、私たちは届けています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Services Section */}
      <section id="services" className="bg-gradient-to-br from-gray-50 to-gray-100 py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-28 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-12 leading-relaxed mt-12" style={{ fontFamily: 'Meiryo, sans-serif' }}>
                <span className="mb-4 block"><span style={{color: '#4aadaa'}}>事業内容</span></span>
              </h2>
              <div className="space-y-6">
                <p className="text-xl text-gray-600" style={{ fontFamily: 'Meiryo, sans-serif' }}>
                  シミュレーション技術とAI技術を駆使して、<br />
                  複雑な課題に対する革新的なソリューションを提供します。
                </p>
                <p className="text-xl text-gray-600" style={{ fontFamily: 'Meiryo, sans-serif' }}>
                  多様な業界のお客様と共に、<br />
                  デジタル変革を推進し、持続可能な未来を実現します。
                </p>
                <p className="text-xl text-gray-600" style={{ fontFamily: 'Meiryo, sans-serif' }}>
                  技術の力で社会課題を解決し、<br />
                  人々の生活をより豊かにする未来を目指しています。
                </p>
              </div>
            </div>
            <div className="space-y-10 max-w-2xl mx-auto">
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl transform translate-x-4 translate-y-4 opacity-50" style={{backgroundImage: 'repeating-linear-gradient(45deg, #4aadaa 0px, #4aadaa 6px, #6bbbb8 6px, #6bbbb8 12px)'}}></div>
                <div className="relative p-8 rounded-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer" style={{backgroundColor: '#f3f4f6'}} onClick={() => setActiveModal('multiagent')}>
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mr-4" style={{backgroundColor: '#4aadaa'}}>
                      <RiRobot2Line className="text-3xl text-white" />
                    </div>
                    <h4 className="text-2xl font-black text-gray-900" style={{ fontFamily: 'Meiryo, sans-serif' }}>
                      マルチエージェントシミュレーション
                    </h4>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed" style={{ fontFamily: 'Meiryo, sans-serif' }}>
                    複数の自律的エージェントによる複雑システムのシミュレーション。都市計画、交通最適化、経済モデリングなど幅広い分野に対応。
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl transform -translate-x-4 translate-y-5 opacity-50" style={{backgroundImage: 'repeating-linear-gradient(45deg, #4aadaa 0px, #4aadaa 6px, #6bbbb8 6px, #6bbbb8 12px)'}}></div>
                <div className="relative p-8 rounded-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer" style={{backgroundColor: '#f3f4f6'}} onClick={() => setActiveModal('aiengineering')}>
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mr-4" style={{backgroundColor: '#4aadaa'}}>
                      <GiArtificialIntelligence className="text-3xl text-white" />
                    </div>
                    <h4 className="text-2xl font-black text-gray-900" style={{ fontFamily: 'Meiryo, sans-serif' }}>
                      AIエンジニアリングソフトウェア
                    </h4>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed" style={{ fontFamily: 'Meiryo, sans-serif' }}>
                    機械学習モデルの開発・運用を効率化するプラットフォーム。AutoMLからMLOpsまで、AI開発のライフサイクル全体をサポート。
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl transform translate-x-5 translate-y-4 opacity-50" style={{backgroundImage: 'repeating-linear-gradient(45deg, #4aadaa 0px, #4aadaa 6px, #6bbbb8 6px, #6bbbb8 12px)'}}></div>
                <div className="relative p-8 rounded-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer" style={{backgroundColor: '#f3f4f6'}} onClick={() => setActiveModal('vibecoder')}>
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mr-4" style={{backgroundColor: '#4aadaa'}}>
                      <FaRegFileCode className="text-3xl text-white" />
                    </div>
                    <h4 className="text-2xl font-black text-gray-900" style={{ fontFamily: 'Meiryo, sans-serif' }}>
                      バイブコーダーの育成
                    </h4>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed" style={{ fontFamily: 'Meiryo, sans-serif' }}>
                    次世代の優秀なプログラマーを育成し、技術革新を推進するバイブコーダー育成プログラム。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-relaxed" style={{ fontFamily: 'Meiryo, sans-serif' }}>
              <span style={{color: '#4aadaa'}}>BLOG</span>
            </h2>
            <p className="text-xl text-gray-600" style={{ fontFamily: 'Meiryo, sans-serif' }}>
              最新の技術動向とインサイトをお届けします
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {/* Placeholder articles - will be replaced with dynamic content */}
            {Array.from({ length: 8 }, (_, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{backgroundColor: '#4aadaa'}}>
                    <span className="text-white text-2xl font-bold" style={{ fontFamily: 'Meiryo, sans-serif' }}>
                      {index + 1}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2" style={{ fontFamily: 'Meiryo, sans-serif' }}>
                    記事タイトル {index + 1}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-4" style={{ fontFamily: 'Meiryo, sans-serif' }}>
                    この記事では最新の技術トレンドについて詳しく解説します。シミュレーション技術の進歩と社会への応用について...
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500" style={{ fontFamily: 'Meiryo, sans-serif' }}>
                      2024.01.{index + 10}
                    </span>
                    <span className="text-xs px-2 py-1 rounded-full" style={{ backgroundColor: '#4aadaa', color: 'white', fontFamily: 'Meiryo, sans-serif' }}>
                      技術
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="px-8 py-3 rounded-full border-2 font-bold hover:bg-gray-50 transition-colors" style={{ borderColor: '#4aadaa', color: '#4aadaa', fontFamily: 'Meiryo, sans-serif' }}>
              記事をもっと見る
            </button>
          </div>
        </div>
      </section>

      {/* Modal */}
      {activeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-3xl font-black text-gray-900" style={{ fontFamily: 'Meiryo, sans-serif' }}>
                  {activeModal === 'complex' && '複雑系の理解と予測'}
                  {activeModal === 'ai' && 'AI技術の社会実装'}
                  {activeModal === 'innovation' && 'イノベーションの創出'}
                  {activeModal === 'multiagent' && 'マルチエージェントシミュレーション'}
                  {activeModal === 'aiengineering' && 'AIエンジニアリングソフトウェア'}
                  {activeModal === 'vibecoder' && 'バイブコーダーの育成'}
                </h3>
                <button
                  onClick={() => setActiveModal(null)}
                  className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
                >
                  ×
                </button>
              </div>
              
              <div className="space-y-6">
                {activeModal === 'complex' && (
                  <>
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center mr-4" style={{backgroundColor: '#4aadaa'}}>
                        <HiOutlinePuzzlePiece className="text-3xl text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Meiryo, sans-serif' }}>
                          複雑系シミュレーション技術
                        </h4>
                        <p className="text-gray-600" style={{ fontFamily: 'Meiryo, sans-serif' }}>
                          Complex Systems Simulation
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Meiryo, sans-serif' }}>
                      現実世界の複雑な現象を数学的モデルとして表現し、コンピュータ上で再現・分析する技術です。経済システム、生態系、都市交通網など、多くの要素が相互作用する複雑なシステムの振る舞いを理解し、将来の変化を予測することができます。
                    </p>
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h5 className="font-bold text-gray-900 mb-3" style={{ fontFamily: 'Meiryo, sans-serif' }}>主な応用分野</h5>
                      <ul className="space-y-2 text-gray-700" style={{ fontFamily: 'Meiryo, sans-serif' }}>
                        <li>• 金融市場の動向予測とリスク分析</li>
                        <li>• 都市計画と交通最適化シミュレーション</li>
                        <li>• 感染症拡大モデルと対策効果の検証</li>
                        <li>• サプライチェーンの最適化と障害予測</li>
                        <li>• 気候変動の影響予測と適応策の評価</li>
                      </ul>
                    </div>
                    <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Meiryo, sans-serif' }}>
                      私たちは、従来の統計的手法では捉えきれない非線形性や創発的特性を持つ複雑系に対して、マルチエージェントモデリング、ネットワーク理論、機械学習を組み合わせた独自のアプローチで解決策を提供しています。
                    </p>
                  </>
                )}

                {activeModal === 'ai' && (
                  <>
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center mr-4" style={{backgroundColor: '#4aadaa'}}>
                        <GrTechnology className="text-3xl text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Meiryo, sans-serif' }}>
                          AI社会実装プラットフォーム
                        </h4>
                        <p className="text-gray-600" style={{ fontFamily: 'Meiryo, sans-serif' }}>
                          AI Technology Implementation
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Meiryo, sans-serif' }}>
                      最先端のAI技術を実社会で活用できる形に変換し、企業や組織が抱える具体的な課題解決に導入するためのソリューションを提供します。研究室レベルの技術と実用化の間にあるギャップを埋め、持続可能で効果的なAI活用を実現します。
                    </p>
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h5 className="font-bold text-gray-900 mb-3" style={{ fontFamily: 'Meiryo, sans-serif' }}>提供サービス</h5>
                      <ul className="space-y-2 text-gray-700" style={{ fontFamily: 'Meiryo, sans-serif' }}>
                        <li>• カスタムAIモデルの開発と最適化</li>
                        <li>• MLOpsパイプラインの構築と運用</li>
                        <li>• AIガバナンスと倫理的AI導入支援</li>
                        <li>• 既存システムとのAI統合コンサルティング</li>
                        <li>• AI人材育成とトレーニングプログラム</li>
                      </ul>
                    </div>
                    <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Meiryo, sans-serif' }}>
                      単なる技術提供ではなく、お客様の業務プロセスを深く理解し、AI導入による組織変革まで含めた包括的なサポートを行います。技術的な実装から運用、効果測定まで、AI活用の全ライフサイクルをカバーします。
                    </p>
                  </>
                )}

                {activeModal === 'innovation' && (
                  <>
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center mr-4" style={{backgroundColor: '#4aadaa'}}>
                        <MdOutlineWbIncandescent className="text-3xl text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Meiryo, sans-serif' }}>
                          イノベーション創出エコシステム
                        </h4>
                        <p className="text-gray-600" style={{ fontFamily: 'Meiryo, sans-serif' }}>
                          Innovation Creation Ecosystem
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Meiryo, sans-serif' }}>
                      革新的なアイデアを実現可能なソリューションに変換するための総合的な支援体制を構築しています。技術シーズと社会ニーズを結びつけ、持続可能で社会的インパクトの大きいイノベーションの創出を促進します。
                    </p>
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h5 className="font-bold text-gray-900 mb-3" style={{ fontFamily: 'Meiryo, sans-serif' }}>イノベーション支援領域</h5>
                      <ul className="space-y-2 text-gray-700" style={{ fontFamily: 'Meiryo, sans-serif' }}>
                        <li>• アイデア評価とフィージビリティスタディ</li>
                        <li>• プロトタイプ開発と実証実験の設計</li>
                        <li>• 産学連携プロジェクトのマネジメント</li>
                        <li>• オープンイノベーション基盤の構築</li>
                        <li>• スタートアップ支援と事業化コンサルティング</li>
                      </ul>
                    </div>
                    <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Meiryo, sans-serif' }}>
                      私たちは、技術的な実現可能性だけでなく、市場性、社会的意義、環境への影響を総合的に評価し、真に価値のあるイノベーションの創出をサポートします。多様なステークホルダーとのネットワークを活用し、アイデアから実装まで一貫した支援を提供します。
                    </p>
                  </>
                )}

                {activeModal === 'multiagent' && (
                  <>
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center mr-4" style={{backgroundColor: '#4aadaa'}}>
                        <RiRobot2Line className="text-3xl text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Meiryo, sans-serif' }}>
                          マルチエージェントシミュレーション技術
                        </h4>
                        <p className="text-gray-600" style={{ fontFamily: 'Meiryo, sans-serif' }}>
                          Multi-Agent Simulation Technology
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Meiryo, sans-serif' }}>
                      複数の自律的エージェントが相互作用する複雑なシステムをシミュレーションする先進技術です。各エージェントは独自のルールに基づいて行動し、全体として創発的な行動パターンを生み出します。都市計画、交通最適化、経済モデリング、生態系研究など幅広い分野で活用されています。
                    </p>
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h5 className="font-bold text-gray-900 mb-3" style={{ fontFamily: 'Meiryo, sans-serif' }}>技術的特徴</h5>
                      <ul className="space-y-2 text-gray-700" style={{ fontFamily: 'Meiryo, sans-serif' }}>
                        <li>• 大規模エージェント群の並列処理アルゴリズム</li>
                        <li>• リアルタイム可視化とインタラクティブ操作</li>
                        <li>• 機械学習による自律エージェントの行動最適化</li>
                        <li>• スケーラブルなクラウド基盤での高速計算</li>
                        <li>• 異分野データ統合によるハイブリッドモデル</li>
                      </ul>
                    </div>
                    <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Meiryo, sans-serif' }}>
                      従来の数式ベースのモデルでは表現困難な複雑な相互作用を、個々のエージェントの行動ルールから全体の振る舞いを予測する「ボトムアップ」アプローチで解明します。政策立案、都市設計、災害対応計画など、社会インフラの最適化に革新的なソリューションを提供します。
                    </p>
                  </>
                )}

                {activeModal === 'aiengineering' && (
                  <>
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center mr-4" style={{backgroundColor: '#4aadaa'}}>
                        <GiArtificialIntelligence className="text-3xl text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Meiryo, sans-serif' }}>
                          AIエンジニアリングプラットフォーム
                        </h4>
                        <p className="text-gray-600" style={{ fontFamily: 'Meiryo, sans-serif' }}>
                          AI Engineering Software Platform
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Meiryo, sans-serif' }}>
                      機械学習モデルの開発から運用まで、AI開発のライフサイクル全体を効率化する統合プラットフォームです。AutoMLからMLOpsまで、データサイエンティストとエンジニアの協業を促進し、高品質なAIシステムの迅速な構築と継続的な改善を実現します。
                    </p>
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h5 className="font-bold text-gray-900 mb-3" style={{ fontFamily: 'Meiryo, sans-serif' }}>プラットフォーム機能</h5>
                      <ul className="space-y-2 text-gray-700" style={{ fontFamily: 'Meiryo, sans-serif' }}>
                        <li>• ノーコード/ローコードでのモデル開発環境</li>
                        <li>• 自動化されたモデル選択とハイパーパラメータ最適化</li>
                        <li>• CI/CDパイプラインによる自動デプロイメント</li>
                        <li>• リアルタイムモニタリングとドリフト検知</li>
                        <li>• A/Bテストとモデルパフォーマンス比較</li>
                      </ul>
                    </div>
                    <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Meiryo, sans-serif' }}>
                      企業の既存システムとシームレスに統合し、AIモデルの品質管理、バージョン管理、セキュリティ対策を一元化します。開発チームの生産性向上と、本番環境での安定稼働を両立する、次世代のAI開発基盤を提供します。
                    </p>
                  </>
                )}

                {activeModal === 'vibecoder' && (
                  <>
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center mr-4" style={{backgroundColor: '#4aadaa'}}>
                        <FaRegFileCode className="text-3xl text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Meiryo, sans-serif' }}>
                          バイブコーダー育成プログラム
                        </h4>
                        <p className="text-gray-600" style={{ fontFamily: 'Meiryo, sans-serif' }}>
                          VibeCoder Development Program
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Meiryo, sans-serif' }}>
                      次世代の優秀なプログラマーを育成し、tecnical実装とクリエイティビティを兼ね備えた「バイブコーダー」を輩出する革新的な人材育成プログラムです。単なるプログラミングスキルの習得にとどまらず、技術的思考力と創造性を統合した新しいタイプの開発者を育成します。
                    </p>
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h5 className="font-bold text-gray-900 mb-3" style={{ fontFamily: 'Meiryo, sans-serif' }}>プログラム内容</h5>
                      <ul className="space-y-2 text-gray-700" style={{ fontFamily: 'Meiryo, sans-serif' }}>
                        <li>• 実践的なプロジェクトベース学習</li>
                        <li>• 現役エンジニアによるメンタリング制度</li>
                        <li>• 最新技術スタックでの実務体験</li>
                        <li>• チーム開発とアジャイル手法の実践</li>
                        <li>• オープンソースプロジェクトへの貢献機会</li>
                      </ul>
                    </div>
                    <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Meiryo, sans-serif' }}>
                      技術力だけでなく、問題発見能力、デザイン思考、コミュニケーション力を総合的に育成し、イノベーションを生み出せる人材を輩出します。卒業生は各業界のテクノロジーリーダーとして活躍し、社会のデジタル変革を牽引する存在となっています。
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6" style={{fontFamily: 'Meiryo, sans-serif'}}>お問い合わせ</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto" style={{fontFamily: 'Meiryo, sans-serif'}}>
            ご質問やご相談がございましたら、<br />
            お気軽にお問い合わせください。
          </p>
          
          <button className="bg-orange-500 text-white px-12 py-4 rounded-full text-lg font-bold hover:bg-orange-600 transition-colors" style={{fontFamily: 'Meiryo, sans-serif'}}>
            お問い合わせする
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4" style={{fontFamily: 'Meiryo, sans-serif'}}>Euler International Co.,Ltd.</h3>
              <p className="text-gray-400 leading-loose" style={{fontFamily: 'Meiryo, sans-serif'}}>
                <span className="mb-4 block">シミュレーションで、</span>
                <span className="mb-2 block">世界はもっと</span>
                <span>面白くなる。</span>
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4" style={{fontFamily: 'Meiryo, sans-serif'}}>お問い合わせ</h4>
              <div className="space-y-2 text-gray-400" style={{fontFamily: 'Meiryo, sans-serif'}}>
                <p>📧 info@euler-international.com</p>
                <p>📍 東京都港区南青山2丁目2番15号WinAoyamaビル-UCF917</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4" style={{fontFamily: 'Meiryo, sans-serif'}}>リンク</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors" style={{fontFamily: 'Meiryo, sans-serif'}}>プライバシーポリシー</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors" style={{fontFamily: 'Meiryo, sans-serif'}}>利用規約</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors" style={{fontFamily: 'Meiryo, sans-serif'}}>会社概要</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p style={{fontFamily: 'Meiryo, sans-serif'}}>&copy; 2025 Euler International Co.,Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}