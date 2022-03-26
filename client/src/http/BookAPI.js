import {$authHost, $host} from "./index";


export const createType  = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}
 
export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}

export const createAutor = async (autor) => {
    const {data} = await $authHost.post('api/autor', autor)
    return data
}

export const fetchAutors = async () => {
    const {data} = await $host.get('api/autor', )
    return data
}

export const createBook = async (book) => {
    const {data} = await $authHost.post('api/book', book)
    return data
}

export const fetchBooks = async (typeId, autorId, page, limit= 5) => {
    const {data} = await $host.get('api/book', {params: {
            typeId, autorId, page, limit
        }})
    return data
}

export const fetchOneBook = async (id) => {
    const {data} = await $host.get('api/book/' + id)
    return data
}