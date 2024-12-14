"use client";

export function BackgroundVideo() {
  return (
    <div className="absolute inset-0 z-0">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover opacity-50"
      >
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-spinning-around-the-earth-29351-large.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}