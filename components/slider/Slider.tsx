"use client";

import React, { useEffect, useState } from "react";

import Image from "next/image";
import { Box, IconButton, Typography } from "@mui/material";
import movie1 from '@/public/assets/images/movies/m1.svg';
import movie2 from '@/public/assets/images/movies/m2.svg';
import movie3 from '@/public/assets/images/movies/m3.svg';
import movie4 from '@/public/assets/images/movies/m4.svg';
import movie5 from '@/public/assets/images/movies/m5.svg';
import movie6 from '@/public/assets/images/movies/m6.svg';

interface Movie {
  src: any;
  watched?: boolean;
  progress?: number;
  
}

const movies: Movie[] = [
  { src: movie1, progress: 0.5   }, // half watched
  { src: movie2, watched: true, }, // fully watched
  { src: movie3, progress: 0.2},
  { src: movie4 ,  watched: true },
  {src:movie5 ,  },
  {src:movie6 , }
];



export default function CategorySliderNoSlick() {
    const SLIDE_W = 193; // px
  const GAP = 0; // px
  const VISIBLE_SLIDES = 1;
  const SIDE_PADDING = 300; // default desktop

  const [index, setIndex] = useState(0);
  const maxIndex = Math.max(0, movies.length - VISIBLE_SLIDES);

  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  const handlePrev = () => {
    setIndex((i) => Math.max(i - 1, 0));
  };

  const handleNext = () => {
    setIndex((i) => Math.min(i + 1, maxIndex));
  };

  return (
    <Box
      sx={{
        width:"100%",
        height: 
        {
          xs:173,
        sm:351,
      }
        ,
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#0A0C0F", // dark background behind slider + fades
      }}
    >
      <Typography sx={{ mb: 2, color: "#fff", fontWeight: "bold", pl: { xs: 2, md: 6 }, pb:4}}>
        
      </Typography>

      {/* Left arrow */}
      <IconButton
        onClick={handlePrev}
        disabled={index === 0}
        aria-label="previous"
        sx={{
          position: "absolute",
          left: { xs: -30, sm:25, md: 30 },
          top: {
            xs:110,
            sm:"40%",
            md:"50%"
          },
          transform: "translateY(-50%)",
          zIndex: 60,
          pointerEvents: "auto",
          
          opacity: index === 0 ? 0.45 : 1,
        }}
      >
        <Image src="/assets/images/ArrowLeft.svg" alt="prev" width={119} height={152} />
      </IconButton>

      {/* Right arrow */}
      <IconButton
        onClick={handleNext}
        disabled={index === maxIndex}
        aria-label="next"
        sx={{
          position: "absolute",
          right: { xs: -9, md: 45 },
          top: {
            xs:110,
            sm:"40%",
            md:"50%"
          },
          transform: "translateY(-50%)",
          zIndex: 60,
          pointerEvents: "auto",
          opacity: index === maxIndex ? 0.45 : 1,
        }}
      >
        <Image src="/assets/images/ArrowRight.svg" alt="next" width={119} height={40} />
      </IconButton>
       {/** left fade  */}
     <Box
      sx={{
       position: "absolute",
       left: 0,
       top: 0,
               width: { xs: 40, sm: 220, md: SIDE_PADDING },
       height: 351,
       background: 'linear-gradient(to left, #0A0C0F 100%, rgba(11, 13, 16, 0) 100%)',
       zIndex: 3,
       pointerEvents: "none",
       }}
       />

      {/* Right fade */}
       <Box
        sx={{
        position: "absolute",
        right: 0,
        top: 0,
        width: { xs: 40, sm: 80, md:SIDE_PADDING },
        height: 351,
        background: 'linear-gradient(to left, #0A0C0F 40%, rgba(11, 13, 16, 0) 100%)',
        zIndex: 3,
        pointerEvents: "none",
        }}
        />

      {/* Slider viewport */}
      <Box
        sx={{
          width: { xs: "100%", sm: "100%", md: "100%" }, // Show 2.3 slides on xs
          height: 351,
          overflow: "hidden",
          pl: { xs: 10, sm: 0, md: `${SIDE_PADDING}px` },
          pr: { xs: 12, sm: 4, md: `${SIDE_PADDING}px` },
          boxSizing: "border-box",
          mx: { xs: "auto", sm: 0, md: 0 }, // Center the viewport on xs
        }}
      >
        {/* Track */}
        <Box
          sx={{
            display: "flex",
            gap: { xs: "10px", sm: `${GAP}px` },
            transition: "transform 0.4s ease",
            transform: `translateX(-${index * (SLIDE_W + GAP)}px)`,
            height: "100%",
            alignItems: "stretch",
            
          }}
        >
          {movies.map((m, idx) => (
           <Box
            key={idx}
            sx={{
            minWidth: { xs: 70, sm: SLIDE_W, md: SLIDE_W },
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 0.5, // space between image box and text
            }}
            >
            {/* The image box with background, fixed height */}
            <Box
            sx={{
            width: {
              xs: 97,
              sm: 150,
              md: 169,
            },
            height: {
              xs: 144,
              sm: 222,
              md: 249,
            },
             position: "relative",
             borderRadius: 0,
             background: "#111",
             border: "1px solid transparent",
             borderImage: "linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, #666666 100%) 1",
             backdropFilter: "blur(10px)",
             WebkitBackdropFilter: "blur(10px)",
             overflow: "hidden",
            }}
             >
            <Image src={m.src} alt={`movie-${idx}`} fill style={{ objectFit: "cover" }} />
            {/* watched badge */}
       {m.watched && (
        <Box
          sx={{
            position: "absolute",
            top: 2,
            left: 2,
            padding: "4px",
            background: "#0567004D",
            color: "#fff",
            fontFamily: "Cairo, sans-serif",
            fontWeight: 600,
            fontSize: "16px",
            lineHeight: "32px",
            border: "1px solid transparent",
            borderImage: "linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, #666666 100%) 1",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
          }}
        >
          Watched
        </Box>
      )}
      {/* progress bar */}
      {m.progress && !m.watched && (
        <Box
          sx={{
            position: "absolute",
            bottom: 6,
            left: 6,
            width: `${m.progress * 149}px`,
            height: 11,
            background: "hsla(189, 94%, 43%, 1)",
            boxShadow: "0px 4px 6px rgba(0,0,0,0.2)",
            borderRadius: 1,
          }}
        />
      )}
    </Box>

  
  </Box>
))}
          
        </Box>
      </Box>
    </Box>
  );
}
/**
 * <Image src="/assets/images/ArrowRight.svg" alt="next" width={40} height={40} />
 * <Image src="/assets/images/ArrowLeft.svg" alt="prev" width={40} height={40} />
 */