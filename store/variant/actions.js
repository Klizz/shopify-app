import types from './types'

const setVariants = (variants)=>{
    return {
        type: types.SET_VARIANTS,
        variants        
    }
}

const solveVariant = (id) => {
    return{
        type: types.SOLVE_VARIANT,
        id
    }
}

const closeModal = () => {
    return {
        type: types.CLOSE_MODAL
    }
}

const stepVariant = (selected) => {
    return {
        
    }
}

export default {
    setVariants,
}