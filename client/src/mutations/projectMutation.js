import { gql } from "@apollo/client";

const ADD_PROJECT = gql `

mutation AddProject($name: String!, $status: ProjectStatus!, $description: String!, $clientId: ID!) {

    addProject(name: $name, status: $status, description: $description, clientId: $clientId) {
    
        id
        name
        description
        status
        client {
            id
            name
            email
            phone
        }
    }
}
`

const DELETE_PROJECT = gql `
mutation DeleteProject($id: ID!) {
deleteProject(id: $id) {
    id
}
}
`

const UPDATE_PROJECT = gql `

mutation UpdateProject($id: ID!, $name: String!, $status: ProjectStatusUpdate!, $description: String!) {

    updateProject(name: $name, status: $status, description: $description, id: $id) {
    
        id
        name
        description
        status
        client {
            id
            name
            email
            phone
        }
    }
}
`


export { ADD_PROJECT , DELETE_PROJECT, UPDATE_PROJECT };