export interface GameInfo {
    id?: string;
    title?: string;
    short_description?: string;
    thumbnail?: string;
    genre?: string;
    platform?: string;
    description?: string;
    game_url?: string;
    publisher?: string;
    developer?: string;
    release_date?: string;
    // screenshots?: [{ id: string, image: string }];
    screenshots?:any;
    status?: string;
    // minimum_system_requirements?: { os: string, processor: string, memory: string, graphics: string, storage: string };
    minimum_system_requirements?: any;
}
