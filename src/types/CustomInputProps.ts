export type CustomInputProps = {
    label: string;
    name: string;
    control: any; // Form control from react-hook-form
    rules?: any; // Rules for validation (optional)
    error?: string | undefined; // Error message (optional)
    placeholder?: string; // Placeholder text (optional)
    type?: string; // Input type (optional)
    defaultValue?: string | undefined;
}