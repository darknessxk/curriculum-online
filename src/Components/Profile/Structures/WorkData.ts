export type WorkData = {
    Name: string;
    Description: string;
    Position: string;
    Hierarchy: "profileWork.hierarchy.senior" | "profileWork.hierarchy.default" | "profileWork.hierarchy.junior" | "profileWork.hierarchy.director" | "profileWork.hierarchy.none";
    StartedAt: Date;
    Current?: boolean;
    EndedAt?: Date;
}
