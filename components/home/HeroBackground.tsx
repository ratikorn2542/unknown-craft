'use client';

import { useEffect, useState } from 'react';

type SceneType = 'mountains' | 'sea' | 'night' | 'forest';

const scenes: SceneType[] = ['mountains', 'sea', 'night', 'forest'];

const sceneImages: Record<SceneType, string> = {
  mountains: '/misc/mountains.svg',
  sea: '/misc/sea.svg',
  night: '/misc/night.svg',
  forest: '/misc/forest.svg',
};

const sceneOverlays: Record<SceneType, string> = {
  mountains: 'from-transparent via-transparent to-[#0f0f23]/80',
  sea: 'from-transparent via-transparent to-[#0f0f23]/60',
  night: 'from-[#0f0f23]/70 via-[#0f0f23]/40 to-transparent',
  forest: 'from-[#0f0f23]/50 via-[#0f0f23]/30 to-[#0f0f23]/80',
};

interface CloudProps {
  src: string;
  className: string;
}

function Cloud({ src, className }: CloudProps) {
  return (
    <div className={`absolute pointer-events-none ${className}`}>
      <img
        src={src}
        alt=""
        className="w-full h-full object-contain"
        style={{ imageRendering: 'pixelated' }}
      />
    </div>
  );
}

interface StarProps {
  className: string;
}

function Star({ className }: StarProps) {
  return (
    <div className={`absolute pointer-events-none ${className}`}>
      <img
        src="/misc/star.svg"
        alt=""
        className="w-full h-full object-contain"
        style={{ imageRendering: 'pixelated' }}
      />
    </div>
  );
}

interface LeafProps {
  className: string;
}

function Leaf({ className }: LeafProps) {
  const leafType = Math.random() > 0.5 ? '/misc/leaf.svg' : '/misc/leaf_autumn.svg';
  return (
    <div className={`absolute pointer-events-none ${className}`}>
      <img
        src={leafType}
        alt=""
        className="w-full h-full object-contain"
        style={{ imageRendering: 'pixelated' }}
      />
    </div>
  );
}

function MountainsScene() {
  return (
    <>
      {/* Clouds */}
      <Cloud src="/misc/cloud1.svg" className="w-48 h-20 top-[10%] left-[5%] animate-float" />
      <Cloud src="/misc/cloud2.svg" className="w-32 h-14 top-[15%] left-[25%] animate-float animation-delay-2000" />
      <Cloud src="/misc/cloud3.svg" className="w-28 h-12 top-[8%] right-[20%] animate-float animation-delay-4000" />
      <Cloud src="/misc/cloud4.svg" className="w-40 h-16 top-[20%] right-[5%] animate-float animation-delay-6000" />
      <Cloud src="/misc/cloud2.svg" className="w-36 h-16 top-[25%] left-[60%] animate-float animation-delay-3000" />
    </>
  );
}

function SeaScene() {
  return (
    <>
      {/* Animated waves indicator */}
      <div className="absolute bottom-[25%] left-0 right-0 h-4 animate-wave">
        <div className="w-full h-full bg-gradient-to-r from-transparent via-[#4A90A4]/30 to-transparent" />
      </div>
      <div className="absolute bottom-[20%] left-0 right-0 h-3 animate-wave-reverse animation-delay-1000">
        <div className="w-full h-full bg-gradient-to-r from-transparent via-[#5BA3B8]/20 to-transparent" />
      </div>
      <div className="absolute bottom-[30%] left-0 right-0 h-2 animate-wave animation-delay-2000">
        <div className="w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </>
  );
}

function NightScene() {
  const stars = [
    { className: 'w-4 h-4 top-[5%] left-[10%] animate-twinkle', delay: '0s' },
    { className: 'w-3 h-3 top-[12%] left-[30%] animate-twinkle animation-delay-500', delay: '0.5s' },
    { className: 'w-5 h-5 top-[8%] right-[25%] animate-twinkle animation-delay-1000', delay: '1s' },
    { className: 'w-3 h-3 top-[20%] left-[50%] animate-twinkle animation-delay-2000', delay: '2s' },
    { className: 'w-4 h-4 top-[15%] right-[15%] animate-twinkle animation-delay-1500', delay: '1.5s' },
    { className: 'w-3 h-3 top-[25%] left-[70%] animate-twinkle animation-delay-2500', delay: '2.5s' },
    { className: 'w-4 h-4 top-[18%] left-[85%] animate-twinkle animation-delay-3000', delay: '3s' },
    { className: 'w-3 h-3 top-[30%] right-[40%] animate-twinkle animation-delay-1000', delay: '1s' },
    { className: 'w-5 h-5 top-[10%] left-[55%] animate-twinkle animation-delay-4000', delay: '4s' },
    { className: 'w-3 h-3 top-[35%] left-[20%] animate-twinkle animation-delay-3500', delay: '3.5s' },
  ];

  return (
    <>
      {stars.map((star, index) => (
        <Star key={index} className={`${star.className} twinkle-delay-${index}`} />
      ))}
      {/* Shooting star (rare) */}
      <div className="absolute top-[15%] left-[60%] w-20 h-1 animate-shooting-star">
        <div className="w-full h-full bg-gradient-to-r from-white via-white to-transparent opacity-70" />
      </div>
    </>
  );
}

function ForestScene() {
  const leaves = [
    { className: 'w-5 h-5 top-[10%] left-[5%] animate-leaf-fall', delay: '0s' },
    { className: 'w-4 h-4 top-[20%] left-[15%] animate-leaf-fall animation-delay-3000', delay: '3s' },
    { className: 'w-5 h-5 top-[5%] left-[35%] animate-leaf-fall animation-delay-6000', delay: '6s' },
    { className: 'w-4 h-4 top-[15%] right-[25%] animate-leaf-fall animation-delay-2000', delay: '2s' },
    { className: 'w-5 h-5 top-[25%] right-[10%] animate-leaf-fall animation-delay-5000', delay: '5s' },
    { className: 'w-4 h-4 top-[8%] left-[55%] animate-leaf-fall animation-delay-4000', delay: '4s' },
    { className: 'w-5 h-5 top-[30%] left-[75%] animate-leaf-fall animation-delay-7000', delay: '7s' },
    { className: 'w-4 h-4 top-[12%] right-[40%] animate-leaf-fall animation-delay-1000', delay: '1s' },
  ];

  const fireflies = [
    { className: 'w-2 h-2 top-[40%] left-[20%] animate-firefly', delay: '0s' },
    { className: 'w-2 h-2 top-[50%] left-[40%] animate-firefly animation-delay-2000', delay: '2s' },
    { className: 'w-2 h-2 top-[35%] right-[30%] animate-firefly animation-delay-4000', delay: '4s' },
    { className: 'w-2 h-2 top-[55%] left-[60%] animate-firefly animation-delay-3000', delay: '3s' },
    { className: 'w-2 h-2 top-[45%] right-[15%] animate-firefly animation-delay-5000', delay: '5s' },
  ];

  return (
    <>
      {leaves.map((leaf, index) => (
        <Leaf key={index} className={leaf.className} />
      ))}
      {fireflies.map((fly, index) => (
        <div
          key={`fly-${index}`}
          className={`absolute rounded-full bg-[#FFFF00] ${fly.className}`}
          style={{
            boxShadow: '0 0 6px 2px rgba(255, 255, 0, 0.5)',
            animationDelay: fly.delay,
          }}
        />
      ))}
    </>
  );
}

const sceneComponents: Record<SceneType, React.FC> = {
  mountains: MountainsScene,
  sea: SeaScene,
  night: NightScene,
  forest: ForestScene,
};

export default function HeroBackground() {
  const [scene, setScene] = useState<SceneType>('mountains');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const randomScene = scenes[Math.floor(Math.random() * scenes.length)];
    setScene(randomScene);
  }, []);

  if (!mounted) {
    return (
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f0f23] via-[#1a1a2e] to-[#16213e]" />
    );
  }

  const SceneComponent = sceneComponents[scene];

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Background image */}
      <img
        src={sceneImages[scene]}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{ imageRendering: 'auto' }}
      />

      {/* Animated elements */}
      <SceneComponent />

      {/* Overlay gradient for text readability */}
      <div className={`absolute inset-0 bg-gradient-to-b ${sceneOverlays[scene]}`} />

      {/* Dark overlay for extra text contrast */}
      <div className="absolute inset-0 bg-[#0f0f23]/40" />
    </div>
  );
}
