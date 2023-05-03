import { makeAutoObservable } from 'mobx';

export default class CourseStore {
    constructor() {
        this._types = []
        this._languages = []
        this._courses = []
        this._selectedType = {}
        this._selectedLanguages = {}
        makeAutoObservable(this)
    }

    setLanguages(languages) {
        this._languages = languages
    }

    setTypes(types) {
        this._types = types
    }

    setCourses(courses) {
        this._courses = courses
    }

    setSelectedType(type) {
        this._selectedType = type
    }

    setSelectedLanguages(language) {
        this._selectedLanguages = language
    }

    get languages() {
        return this._languages
    }

    get types() {
        return this._types
    }

    get courses() {
        return this._courses
    }

    get selectedType() {
        return this._selectedType
    }

    get selectedBrand() {
        return this._selectedLanguages
    }

}