import { $authHost, $host } from "./index";

export const createType = async (type) => {
    const { data } = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () => {
    const { data } = await $host.get('api/type')
    return data
}

export const createLanguages = async (language) => {
    const { data } = await $authHost.post('api/language', language)
    return data
}

export const fetchLanguages = async () => {
    const { data } = await $host.get('api/language')
    return data
}

export const createCourse = async (course) => {
    const { data } = await $authHost.post('api/course', course)
    return data
}

export const fetchCourse = async () => {
    const { data } = await $host.get('api/course')
    return data
}

export const fetchCourseById = async (id) => {
    const { data } = await $host.get('api/course/' + id)
    return data
}
