import { useState } from "react";
import Part from "../components/Part";
import { toast } from "react-toastify"
type Selects = {
    index: number | null,
    part: number | null
}

const GamePuzzle = () => {


    const [parts,setParts] = useState([
                    1, 5, 6, 
                    4, 7, 3, 
                    9, 2, null
                ])

    const [selects, setSelects] = useState<Selects>({
        index: null,
        part: null
    })
    
    const movePart = (index: number) => {
        console.log(index,selects.part)
        if (selects.index != null && moveValid(index) ) {
            setParts( prevLsit =>
                prevLsit.map(( partItem,indexItem ) => {
                    if (indexItem == index){
                        partItem = selects.part
                    }

                    if (indexItem == selects.index){
                         partItem = null;
                    }
                    return partItem;
                })
            )

            changeItemSelect(null,null)
        }else {
            toast.error("No puedes realizar este movimiento")
        }

    }

    const moveValid = (index: number ) => {

        if (selects.index == null ) {
            return false
        }

        if(index == Number(selects.index) + 1 ||  index == Number(selects.index) - 1 || index == Number(selects.index) + 3 || index == Number(selects.index) - 3){
            return true
        }
        

        return false
    }

    const changeItemSelect = (newSelect: number | null, newPart: number | null) => {
        setSelects({
            index: newSelect,
            part: newPart
        });

        console.log("pieza seleccionada: "+selects.index, selects.part)

    }

    return (

        <div className={`w-full max-w-3xl mx-auto p-2 `} > 
            <div 
                className="w-full per aspect-[4/6] max-w-3xl mx-auto p-2 sm:aspect-[14/10] relative bg-yellow-600/35 text-primary-content rounded-box flex 
                            flex-col items-center 
                            shadow-[0_15px_0_rgba(159,117,29,0.67),_0_4px_6px_rgba(0,0,0,0.05)] ">
                
                <div className="flex flex-row justify-between items-center w-full p-2 h-1/4">
                    <h1>Puzzle</h1>
                </div>

                <div className="w-full flex-grow flex items-center justify-center p-4 ">
                    <div 
                        className={`
                            w-full sm:w-3/6 aspect-[4/4] relative bg-yellow-600/5 text-primary-content rounded-box p-2 
                            shadow-[inset_0_0_10px_4px_rgba(159,117,29,0.67),_inset_0_-6px_10px_rgba(255,255,255,0.7)]
                            transform rotate-x-30 origin-bottom 
                            grid grid-cols-3 gap-2
                            truncate
                        
                        `}
                    >
                        {parts.map((part, index) => (
                        
                            <Part key={index} part={part} index={index} changeSelect={changeItemSelect}  move={movePart}/>
                        ))}
                        
                    </div>

                </div>
                
            </div>
        </div>
    )
}

export default GamePuzzle;