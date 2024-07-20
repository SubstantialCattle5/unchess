import { useState } from 'react';
import { Computer, Glasses, Puzzle, Settings, User, Users, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/ToolTip';
import { ModeToggle } from '../ModeToggle';

const Sidebar = ({ }) => {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { name: 'Play', icon: Computer, key: 'play', route: "/play" },
        { name: 'Puzzles', icon: Puzzle, key: 'puzzles', route: "/puzzle" },
        { name: 'Watch', icon: Glasses, key: 'watch', route: "/watch" },
        { name: 'Social', icon: Users, key: 'social', route: "/social" },
        { name: 'Profile', icon: User, key: 'profile', route: "/profile" },
        { name: 'Settings', icon: Settings, key: 'settings', route: "/setting" },
    ];

    return (
        <aside className={`fixed inset-y-0 left-0 z-10 ${isOpen ? 'w-64' : 'w-16'} flex flex-col bg-black text-white transition-all duration-300 ease-in-out`}>
            <div className="flex items-center justify-between pl-3 pt-2">
                <h1 className={`${isOpen ? 'block' : 'hidden'} text-xl font-bold text-white`}>UNChess</h1>
                <button
                    className="p-2 text-gray-100 rounded-md focus:outline-none hover:bg-primary-500"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>
            <TooltipProvider>
                <nav className="flex flex-col items-stretch gap-1 px-2 py-4 flex-grow">
                    {menuItems.map((item) => (
                        <Tooltip key={item.key}>
                            <TooltipTrigger asChild>
                                <Link href={item.route} className={`flex items-center p-3 w-full rounded-lg transition-transform transform duration-300 ease-in-out ${isOpen ? 'hover:bg-primary-500 hover:scale-105' : 'text-gray-400 hover:text-gray-100 hover:bg-primary-500'} ${isOpen ? 'hover:shadow-md' : ''}`}>
                                    <item.icon className="h-6 w-6" />
                                    {isOpen && <span className="ml-4 text-lg font-medium">{item.name}</span>}
                                </Link>
                            </TooltipTrigger>
                            {!isOpen && (
                                <TooltipContent side="right">
                                    <span className="text-sm font-medium">{item.name}</span>
                                </TooltipContent>
                            )}
                        </Tooltip>
                    ))}
                </nav>
            </TooltipProvider>
            <div className="mt-auto flex justify-center py-4">
                <ModeToggle />
            </div>
        </aside>
    );
};

export default Sidebar;
