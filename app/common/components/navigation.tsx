import { Link } from "react-router";
import { Separator } from "~/common/components/ui/separator";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink, navigationMenuTriggerStyle} from "./ui/navigation-menu";
import { cn } from "~/lib/utils";

const menus = [
    {
        name: "Products",
        to: "/products",
        items: [
            {
                name: "Leaderboards",
                description: "See the top performers in your community",
                to: "/products/leaderboards",
            },
            {
                name: "Categories",
                description: "See the categories in your community",
                to: "/products/categories",
            },
            {
                name: "Search",
                description: "Search for a product",
                to: "/products/search",
            },
            {
                name: "Submit a Product",
                description: "Submit a product to be featured in your community",
                to: "/products/submit",
            },
            {
                name: "Promote",
                description: "Promote your product to out community",
                to: "/products/promote",
            },
            
        ],
    },
    {
        name: "Jobs",
        to: "/jobs",
        items: [
            {
                name: "Remote Jobs",
                description: "See a remote jobs in our community",
                to: "/jobs?location=remote",
            },
            {
                name: "Full-Time Jobs",
                description: "See a full-time jobs in our community",
                to: "/jobs?type=full-time",
            },
            {
                name: "Freelance Jobs",
                description: "See a freelance jobs in our community",
                to: "/jobs?type=freelance",
            },
            {
                name: "Internships",
                description: "See a internships in our community",
                to: "/jobs?type=internship",
            },
            {
                name: "Submit a Job",
                description: "Submit a job to be featured in our community",
                to: "/jobs/submit",
            },
            
        ]
        
    },
    {
        name: "Community",
        to: "/community",
        items: [
            {
                name: "All Posts",
                description: "See all posts in our community",
                to: "/community",
            },
            {
                name: "Top Posts",
                description: "See the top posts in our community",
                to: "/community?sort=top",
            },
            {
                name: "New Posts",
                description: "See the new posts in our community",
                to: "/community?sort=new",
            },
            {
                name: "Create a Post",
                description: "Create a post to be featured in our community",
                to: "/community/create",
            },
            
            
        ]
    },
    {
        name: "IdeasGPT",
        to: "/ideas",
    },
    {
        name: "Teams",
        to: "/teams",
        items: [
            {
                name: "All Teams",
                description: "See all teams in our community",
                to: "/teams",
            },
            {
                name: "Create a Team",
                description: "Create a team to be featured in our community",
                to: "/teams/create",
            },
        ]
    },
];

export default function Navigation() {
    return (
        <nav className="flex px-20 h-16 items-center justify-between backdrop-blur fixed top-0 left-0 right-0 z-50 bg-background/50">
            <div className="flex items-center">
                <Link to="/" className="font-bold tracking-tighter text-lg">
                    WeMake
                </Link>
                <Separator orientation="vertical" className="h-6 mx-4" />
                <NavigationMenu>
                    <NavigationMenuList>
                        {menus.map((menu) => (
                            <NavigationMenuItem key={menu.name}>
                               {menu.items ? ( <>
                                <Link to={menu.to}><NavigationMenuTrigger>{menu.name}</NavigationMenuTrigger></Link>
                                <NavigationMenuContent>
                                    <ul className="grid w-[600px] font-light gap-3 p-4 grid-cols-2">
                                        {menu.items?.map((item) => (
                                            <li key={item.name}>
                                                <NavigationMenuItem 
                                                    key={item.name} 
                                                    className={
                                                        cn([
                                                            "select-none rounded-md transition-colors focus:bg-accent hover:bg-accent",
                                                            item.to === "/products/promote" && "col-span-2 bg-accent/10 hover:bg-primary/20 focus:bg-primary/20",
                                                            item.to === "/jobs/submit" && "col-span-2 bg-accent/10 hover:bg-primary/20 focus:bg-primary/20",
                                                        ])
                                                    }>
                                                    <NavigationMenuLink asChild>
                                                        <Link className="p-3 space-y-1 block leading-none no-underline outline-none" to={item.to}
                                                        >
                                                        <span className="text-sm font-medium leading-none">
                                                            {item.name}
                                                        </span>
                                                        <p className="text-sm text-muted-foreground">
                                                            {item.description}
                                                        </p>
                                                        </Link>
                                                    </NavigationMenuLink>
                                                </NavigationMenuItem>
                                            </li>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                               </> ) : (
                                <Link className={navigationMenuTriggerStyle()}to={menu.to}>{menu.name}</Link>
                               )} 
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </nav>
    );
}