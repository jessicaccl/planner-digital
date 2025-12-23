import { useState, useRef } from 'react';
import {
  ShoppingBag,
  Heart,
  Coffee,
  CalendarHeart,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Music2,
  Menu,
  X
} from 'lucide-react';

import {
  Container,
  MenuItem,
  LogoArea,
  ToggleButton,
  Overlay,
  PlayerContainer,
  PlayerHeader,
  PlayerControls,
  MobileTrigger
} from './styles';

const playlist = [
  {
    name: "Bom dia!",
    category: "Que o seu dia seja incrível",
    url: "https://stream.zeno.fm/0r0xa792kwzuv"
  },
];

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function Sidebar({ isOpen, onToggle }: SidebarProps) {

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  const audioRef = useRef(new Audio(playlist[0].url));

  function toggleMusic() {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
      audioRef.current.volume = 0.5;
    }
    setIsPlaying(!isPlaying);
  }

  function changeTrack(direction: 'next' | 'prev') {
    let newIndex = currentTrackIndex;

    if (direction === 'next') {
      newIndex = currentTrackIndex === playlist.length - 1 ? 0 : currentTrackIndex + 1;
    } else {
      newIndex = currentTrackIndex === 0 ? playlist.length - 1 : currentTrackIndex - 1;
    }

    setCurrentTrackIndex(newIndex);

    audioRef.current.src = playlist[newIndex].url;
    audioRef.current.load();

    if (isPlaying) {
      audioRef.current.play();
    }
  }

  return (
    <>
      <Overlay $isOpen={isOpen} onClick={onToggle} />

      {!isOpen && (
        <MobileTrigger onClick={onToggle}>
          <Menu size={24} color="#333" />
        </MobileTrigger>
      )}

      <Container $isOpen={isOpen}>

        <ToggleButton onClick={onToggle}>
          {isOpen ? (
            <>
              <div className="desktop-icon"><ChevronLeft size={20} /></div>
              <div className="mobile-icon"><X size={24} /></div>
            </>
          ) : (
            <>
              <div className="desktop-icon"><ChevronRight size={20} /></div>
              <div className="mobile-icon"><Menu size={24} /></div>
            </>
          )}
        </ToggleButton>

        <LogoArea $isOpen={isOpen}>
          <div style={{ minWidth: '40px', height: '40px', background: '#8257e5', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>
            J
          </div>
          <h2>Planner Glow</h2>
        </LogoArea>

        <nav>
          <MenuItem to="/" $isOpen={isOpen} end>
            <CalendarHeart size={24} />
            <span>Visão Geral</span>
          </MenuItem>

          <MenuItem to="/business" $isOpen={isOpen}>
            <ShoppingBag size={24} />
            <span>Meus Negócios</span>
          </MenuItem>

          <MenuItem to="/kids" $isOpen={isOpen}>
            <Heart size={24} />
            <span>Família & Kids</span>
          </MenuItem>

          <MenuItem to="/personal" $isOpen={isOpen}>
            <Coffee size={24} />
            <span>Tempo pra Mim</span>
          </MenuItem>
        </nav>

        <PlayerContainer $isOpen={isOpen}>
          <PlayerHeader>
            <div style={{ background: 'white', padding: '8px', borderRadius: '8px', color: '#8257e5' }}>
              <Music2 size={20} />
            </div>
            <div>
              <strong>{playlist[currentTrackIndex].name}</strong>
              <span>{playlist[currentTrackIndex].category}</span>
            </div>
          </PlayerHeader>

          <PlayerControls>
            <button onClick={() => changeTrack('prev')} title="Anterior">
              <SkipBack size={20} />
            </button>

            <button className="play-btn" onClick={toggleMusic} title={isPlaying ? "Pausar" : "Tocar"}>
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>

            <button onClick={() => changeTrack('next')} title="Próxima">
              <SkipForward size={20} />
            </button>
          </PlayerControls>
        </PlayerContainer>

      </Container>
    </>
  );
}