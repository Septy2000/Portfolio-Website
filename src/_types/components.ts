export interface LabelledInputProps {
    id: string;
    label: string;
    type: string;
    value: string | number;
    onChange: (
        e: React.ChangeEvent<HTMLInputElement>,
        color?: "r" | "g" | "b"
    ) => void;
}

export interface LabelledSelectProps {
    id: string;
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    children: React.ReactNode;
}
