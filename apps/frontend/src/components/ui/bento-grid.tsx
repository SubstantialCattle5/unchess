import { cn } from "apps/frontend/libs/util";
import { ScrollArea } from "./ReactScrollArea";
import { Separator } from "@radix-ui/react-dropdown-menu";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};



const friends = Array.from({ length: 50 }).map((_, i) => ({
  id: i + 1,
  name: `Friend ${i + 1}`,
  pfp: `https://via.placeholder.com/40?text=Friend+${i + 1}`, // Unique profile picture URL
  lastActive: `20 minutes ago`, // Random last active time
}));


export const BentoGridItemFriendList = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      <ScrollArea className="w-full rounded-md">
        <div className="p-4">
          <h2 className="mb-4 text-lg font-medium leading-none">Friends List</h2>
          {friends.map((friend) => (
            <div key={friend.id} className="flex items-center space-x-4 mb-2">
              <img
                src={friend.pfp}
                alt={`${friend.name}'s profile`}
                className="w-10 h-10 rounded-full"
              />
              <div className="flex flex-col">
                <span className="text-sm font-medium">{friend.name}</span>
                <span className="text-xs text-gray-500 dark:text-gray-400">{friend.lastActive}</span>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};