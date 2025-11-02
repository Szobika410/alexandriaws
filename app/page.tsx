import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div id="root">
      <div role="region" aria-label="Notifications (F8)" tabIndex={-1} style={{ scrollbarWidth: 'none' }}>
        <ol tabIndex={-1} className="fixed top-0 z-100 flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]">
        </ol>
      </div>

      <div className="min-h-screen bg-white">
        <div className="bg-white border-b border-gray-200 p-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex gap-2 overflow-x-auto scrollbar-hide">
              <div className="flex-1 relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </svg>
                <input className="flex h-12 w-full rounded-md border bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-10 border-orange-200 focus:border-orange-400" placeholder="Search books, authors..." />
              </div>
              <Button variant="main">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-filter w-4 h-4">
                  <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                </svg>
              </Button>
            </div>
          </div>
        </div>
        <div className="bg-white border-b border-gray-200 p-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex space-x-2 overflow-x-auto scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
              <Button variant="main">All</Button>
              <Button variant="main">Fiction</Button>
              <Button variant="main">Crime</Button>
              <Button variant="main">Romance</Button>
              <Button variant="main">Fantasy</Button>
              <Button variant="main">Biography</Button>
              <Button variant="main">Sci-fi</Button>
              <Button variant="main">History</Button>
              <Button variant="main">Novel</Button>
              <Button variant="main">Professional book</Button>
              <Button variant="main">Children's book</Button>
              <Button variant="main">Poetry</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}