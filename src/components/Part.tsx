


interface PartProps {
    part: number | null;
    index: number;
    move: (index: number) => void;
    changeSelect:(newSelect: number, newPart: number) => void
}
const Part = ({part, index,move,changeSelect}:PartProps) => {


    return (
        <>
            <div
                key={index}
                onClick={part == null ? () => move(index) : () => changeSelect(index,part)}
                className={`
                    
                    text-2xl font-bold rounded-md flex items-center justify-center 
                    cursor-pointer select-none transition-all duration-150
                    p-2
                    ${part !== null ? 'bg-yellow-600/5 border-1 border-black' : 'bg-transparent'} 
                    
                    
                    ${part !== null ? 'shadow-[0_8px_0_rgba(159,117,29,0.67),_0_4px_6px_rgba(255,255,255,0.7)]' : ''}
                `}
            >
                {
                    part != null ? 

                    <div className="
                        
                        text-6xl text-black font-bold rounded-md flex items-center justify-center 
                        cursor-pointer select-none transition-all duration-150
                        border-2 border-black
                        aspect-[4/4]
                        w-full 
                        
                    ">
                        {part}
                    </div> : ""
                }
                

            
            </div>
        </>
    )
}


export default Part;