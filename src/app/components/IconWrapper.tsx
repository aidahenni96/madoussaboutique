import React from "react";

export default function IconWrapper({ Icon, ...props }: { Icon: any; [key: string]: any }) {
  return <Icon {...props} />;
} 