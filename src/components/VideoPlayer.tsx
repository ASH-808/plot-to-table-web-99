
import React, { useState, useRef } from 'react';
import { Play, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface VideoPlayerProps {
  poster?: string;
  className?: string;
}

const VideoPlayer = ({ poster, className = "" }: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleVideoLoaded = () => {
    setIsLoading(false);
  };

  const handleVideoError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  const handleVideoPause = () => {
    setIsPlaying(false);
  };

  const handleVideoPlay = () => {
    setIsPlaying(true);
  };

  if (hasError) {
    return (
      <div className={`relative bg-gray-200 flex items-center justify-center min-h-[400px] ${className}`}>
        <div className="text-center p-8">
          <div className="w-16 h-16 bg-farm-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Play className="w-8 h-8 text-farm-green-600" />
          </div>
          <p className="text-gray-600 mb-4">Video unavailable</p>
          <p className="text-sm text-gray-500">Showcasing sustainable farming practices</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <video
        ref={videoRef}
        className="w-full h-auto object-cover rounded-2xl"
        poster={poster}
        onLoadedData={handleVideoLoaded}
        onError={handleVideoError}
        onPlay={handleVideoPlay}
        onPause={handleVideoPause}
        controls={isPlaying}
        preload="metadata"
        playsInline
      >
        <source src="https://videos.pexels.com/video-files/2169880/2169880-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        <source src="https://videos.pexels.com/video-files/2169880/2169880-hd_1920_1080_25fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Loading State */}
      {isLoading && (
        <div className="absolute inset-0 bg-gray-100 rounded-2xl flex items-center justify-center">
          <div className="text-center">
            <Loader2 className="w-8 h-8 text-farm-green-600 animate-spin mx-auto mb-2" />
            <p className="text-sm text-gray-600">Loading video...</p>
          </div>
        </div>
      )}

      {/* Custom Play Button Overlay */}
      {!isPlaying && !isLoading && !hasError && (
        <div className="absolute inset-0 bg-black bg-opacity-20 rounded-2xl flex items-center justify-center group cursor-pointer transition-all duration-300 hover:bg-opacity-30">
          <Button
            onClick={handlePlay}
            size="lg"
            className="bg-white/90 hover:bg-white text-farm-green-600 rounded-full p-6 shadow-xl group-hover:scale-110 transition-all duration-300"
          >
            <Play className="w-8 h-8 fill-current" />
          </Button>
        </div>
      )}

      {/* Video Description Overlay */}
      <div className="absolute bottom-4 left-4 right-4 bg-gradient-to-t from-black/60 to-transparent rounded-b-2xl p-4">
        <p className="text-white text-sm font-medium">Sustainable Agriculture in Action</p>
        <p className="text-white/80 text-xs">Watch how we cultivate the future</p>
      </div>
    </div>
  );
};

export default VideoPlayer;
