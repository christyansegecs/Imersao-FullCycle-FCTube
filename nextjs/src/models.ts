

export type VideoModel = {
    map(arg0: (video: any) => import("react").JSX.Element): import("react").ReactNode;
    id: number;
    title: string;
    description: string;
    thumbnail: string;
    slug: string;
    published_at: string;
    likes: number;
    views: number;
    tags: string[];
    // author: {
    //     id: number;
    //     name: string;
    //     avatar: string;
    // }
    video_url: string;
}