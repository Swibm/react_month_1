import {$api} from "./requester"

const ENDPOINTS = {
    TODOS: "/todos"
}

export const fetchTodos = async () => {
    const response = await $api.get(ENDPOINTS.TODOS)
    return response
}

export const fetchTodosById = async (id) => {
    const response = await $api.get(`${ENDPOINTS.TODOS}/${id}`)
    return response
}

export const fetchTodosByParams = async (params) => {
    const response = await $api.get(ENDPOINTS.TODOS, { params }, {headers: {'X-Custom-Footer': 'footer'}
    })
    return response
}