import { CoreEntity } from 'src/common/entities/core.entity';
export declare enum UserRole {
    Client = "Client",
    Owner = "Owner",
    Admin = "Admin"
}
export declare class User extends CoreEntity {
    email: string;
    password: string;
    verified?: boolean;
    profileImage?: string;
    bannerImage?: string;
    nickname?: string;
    bio?: string;
    role: 'Client' | 'Owner' | 'Admin';
}
