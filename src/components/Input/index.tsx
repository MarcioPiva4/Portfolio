interface PropsInput {
    label: string;
    name: string;
    placeholder?: string;
    type: string;
    value: string;
    onChange: React.ChangeEventHandler;
}

export default function Input({label, name, type, placeholder, value, onChange }: PropsInput){
    return(
        <>
            <label>{label}</label>
            <input name={name} id={name} type={type} placeholder={placeholder} value={value} onChange={onChange}></input>
        </>
    )
}