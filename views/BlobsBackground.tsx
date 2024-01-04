import { forwardRef, Box, BoxProps, Icon, IconProps } from "@chakra-ui/react";
import React, { FC } from "react";

export interface BlobProps {
  fill: string;
  cx: string | number;
  cy: string | number;
  r?: string | number;
}

export const Blob: FC<BlobProps> = (props) => (
  <circle r="101.5" {...props}></circle>
);

export interface BlobsSvgProps extends IconProps {
  blobColors: BlobColors;
}

export const BlobsSvg = forwardRef<BlobsSvgProps, typeof Icon>((props, ref) => {
  const { blobColors, ...iconProps } = props;

  return (
    <Icon
      height="100%"
      width="100%"
      viewBox="ignore"
      preserveAspectRatio="none"
      zIndex={-1}
      xmlns="http://www.w3.org/2000/svg"
      filter="blur(70px)"
      ref={ref}
      {...iconProps}
    >
      {/** Repeats pattern vertically up to 20 times */}
      <pattern
        id="blobs-background"
        viewBox="0 0 528 560"
        height="2000"
        width="2000"
        patternUnits="userSpaceOnUse"
      >
        <Blob cx="71" cy="61" fill={blobColors[0]} />
        <Blob cx="244" cy="106" r="139" fill={blobColors[1]} />
        <Blob cx="0" cy="291" r="139" fill={blobColors[2]} />
        <Blob cx="80.5" cy="189.5" fill={blobColors[3]} />
        <Blob cx="196.5" cy="317.5" fill={blobColors[4]} />
        <Blob cx="70.5" cy="458.5" fill={blobColors[5]} />
        <Blob cx="400.5" cy="458.5" fill={blobColors[6]} />
        <Blob cx="400.5" cy="268.5" fill={blobColors[5]} />
        <Blob cx="426.5" cy="-0.5" fill={blobColors[6]} />
        <Blob cx="560.5" cy="100" fill={blobColors[6]} />
      </pattern>
      <rect
        fill="url(#blobs-background)"
        x="0"
        y="0"
        width="10000"
        height="10000"
      ></rect>
    </Icon>
  );
});

export type BlobColors = readonly [
  string,
  string,
  string,
  string,
  string,
  string,
  string,
];

export interface BlobsBackgroundProps extends BoxProps {
  blobColors: BlobColors;
}

export const BlobsBackground = forwardRef<BlobsBackgroundProps, typeof Box>(
  (props, ref) => {
    const { blobColors, ...boxProps } = props;

    return (
      <Box position="relative" minH="100vh">
        <BlobsSvg position="absolute" blobColors={blobColors} />
        <Box ref={ref} {...boxProps} />
      </Box>
    );
  }
);
