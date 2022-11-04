import React, { FC, ImgHTMLAttributes } from "react";
import { AvatarImg, avatarWithoutBorder } from "./styles";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasborder?: boolean;
}
const Avatar: FC<AvatarProps> = ({ hasborder, ...props }) => {
  return (
    <AvatarImg
      style={hasborder === false ? avatarWithoutBorder : undefined}
      {...props}
    />
  );
};

export { Avatar };
