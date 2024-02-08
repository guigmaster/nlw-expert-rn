import { Pressable, PressableProps, Text } from "react-native";

import { clsx } from "clsx"

type CategoryButtonProps = PressableProps & {
  title: string;
  iSSelected?: boolean;
}

export function CategoryButton({ title, iSSelected = false, ...rest }: CategoryButtonProps) {
  return (
    <Pressable className={clsx("bg-slate-800 px-4 justify-center rounded-md h-10", iSSelected && "border-2 border-lime-300")} {...rest}>
      <Text className="text-slate-100 font-subtitle text-sm">{title}</Text>
    </Pressable>
  );
}