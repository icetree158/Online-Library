import {makeAutoObservable} from "mobx";

export default class BookStore {
    constructor() {

        this._types = []
        this._autors = []
        this._books = []
        this._selectedType = {}
        this._selectedAutor = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 3
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setAutors(autors) {
        this._autors = autors
    }
    setBooks(books) {
        this._books = books
    }

    setSelectedType(type) {
        this.setPage(1)
        this._selectedType = type
    }
    setSelectedAutor(autor) {
        this.setPage(1)
        this._selectedAutor = autor
    }
    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }

    get types() {
        return this._types
    }
    get autors() {
        return this._autors
    }
    get books() {
        return this._books
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedAutor() {
        return this._selectedAutor
    }
    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }
}