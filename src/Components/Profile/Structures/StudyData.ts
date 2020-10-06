export type StudyData = {
    Name: string;
    Description: string;
    StartedAt: Date;
    EndedAt: Date;
    Institute: string;
    Current?: boolean;
    Graduation: "profileStudy.graduation.technologist" | "profileStudy.graduation.bachelor" | "profileStudy.graduation.doctorate" | "profileStudy.graduation.master" | "profileStudy.graduation.nanodegree";
    CertificationUrl?: string;
}
