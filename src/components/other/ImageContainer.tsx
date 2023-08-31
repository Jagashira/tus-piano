import Image from "next/image";
import React from "react";

interface Props {
  imgUrl: string;
  alt: string;
  width: number;
  height: number;
  classname?: string;
  styles?: any;
}

const ImageContainer = ({
  imgUrl,
  alt,
  width,
  height,
  classname,
  styles,
}: Props) => {
  return (
    <>
      {" "}
      {imgUrl ? (
        <Image
          src={imgUrl}
          alt={alt}
          width={width}
          height={height}
          className={classname}
          style={styles}
        />
      ) : (
        <Image
          src="/img/no_image/noimage.png"
          alt="思い出"
          width={width}
          height={height}
        />
      )}
    </>
  );
};

export default ImageContainer;
