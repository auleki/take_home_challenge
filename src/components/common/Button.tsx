import {ButtonProps} from "@/types/component";

const Button = ({text, onClick}: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            className="border-purple-500 hover:bg-purple-500 duration-300 active:translate-y-2 hover:text-white-400 border-2 p-3 px-2 text-purple-500 font-semibold text-sm rounded-md">
            {text}
        </button>
    )
}

export default Button