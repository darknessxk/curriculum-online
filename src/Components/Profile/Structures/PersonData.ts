export type PersonData = {
    Name: string;
    Birthday: Date;
    Sex: "person.sex.Male" | "person.sex.Female" | "person.NonBinary" | "person.sex.Transsexual" | "person.sex.None";
    Emails: string[];
    Phones: string[];
    Country: string;
    State: string;
    City: string;
    Sites?: { name: string; url: string; }[];
    ProfilePicture?: string;
}