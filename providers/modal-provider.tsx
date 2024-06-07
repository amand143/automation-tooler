'use client'
import { useState, useContext, useEffect, createContext } from "react"

type ModalProviderProps = {
    children: React.ReactNode
}

type ModalData= {}

type ModalContextType = {
    data: ModalData
    isOpen: boolean
    setOpen: (modal: React.ReactNode, fetchData?: () => Promise<any>) => void
    setClose: () => void
}

export const ModalContext = createContext<ModalContextType>({
    data: {},
    isOpen: false,
    setOpen: (modal: React.ReactNode, fetchData?: () => Promise<any>)=>{},
    setClose: () => {}
})

const ModalProvider: React.FC<ModalProviderProps> = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [data, setData] = useState<ModalData>({});
    const [showingModal, setShowingModal] = useState<React.ReactNode>(null);
    const [mounted, setMounted] = useState(false);
    useEffect(()=> {
        setMounted(true);
    }, []);
    const setOpen= async(
        modal: React.ReactNode, 
        fetchData?: ()=>Promise<any>
        )=>{
        if(modal){
            if(fetchData){
                setData({...data, ...(await fetchData())} || {})
            }
            setShowingModal(modal)
            setIsOpen(true);
        }
    }
    const setClose = () =>{
        setData({})
        setIsOpen(false);
    }
    if(!mounted)return null;//remove this on checkinfg to see use
    return (
        <ModalContext.Provider value={{data, isOpen, setOpen, setClose}}>
            {children}
            {showingModal}
        </ModalContext.Provider>
    )
}

export const useModal = () =>{
    const context = useContext(ModalContext);
    if(!context)
    {
        throw new Error('context error useModal');
    }
    return context;
}

export default ModalProvider; 