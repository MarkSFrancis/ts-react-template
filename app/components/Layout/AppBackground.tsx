import { FC, PropsWithChildren, useMemo } from 'react';
import { BlobsBackground } from './BlobsBackground';

export const AppBackground: FC<PropsWithChildren> = (props) => {
  const randomColors = useMemo(() => {
    const newColor = () => `hsl(${Math.random() * 255}, 80%, 85%)`;
    return [
      newColor(),
      newColor(),
      newColor(),
      newColor(),
      newColor(),
      newColor(),
      newColor(),
    ] as const;
  }, []);

  return (
    <BlobsBackground blobColors={randomColors}>
      {props.children}
    </BlobsBackground>
  );
};
