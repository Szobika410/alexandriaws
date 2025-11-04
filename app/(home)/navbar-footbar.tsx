import { Button } from "@/components/ui/button";

interface NavbarItem {
    href: string;
    children: React.ReactNode;
    isActive?: boolean;
}

interface Props {
    items: NavbarItem[];
    open: boolean;
    onActiveChange: (open: boolean) => void;
    className?: string; // added className prop
    showBar?: boolean;
}

export const NavbarFootbar = ({ items, open, onActiveChange, className, showBar }: Props) => {
    return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 max-w-[768px] mx-auto">
          <div className="flex justify-around items-center py-2">
              <Button variant="also">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-house w-5 h-5 mb-1">
                        <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                        <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    </svg>
                    <span className="text-xs">Home</span>
             </Button>
            <Button variant="also">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-heart w-5 h-5 mb-1">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </svg>
                <span className="text-xs">Wishlist</span>
            </Button>
            <Button className="justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground flex flex-col items-center p-2 text-white bg-orange-600 rounded-full w-12 h-12">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-plus w-6 h-6">
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                </svg>
            </Button>
            <Button variant="also">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-message-circle w-5 h-5 mb-1">
                    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                </svg>
                <span className="text-xs">Messages</span>
            </Button>
            <Button variant="also">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user w-5 h-5 mb-1">
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <span className="text-xs">Profile</span>
            </Button>
        </div>
    </div>
    );
};
