export interface IButtonParams {
    text: string;
    type?: "button" | "submit" | "reset" | undefined,
    onClick: VoidFunction
}