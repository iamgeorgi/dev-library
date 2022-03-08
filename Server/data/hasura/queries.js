import { API_KEY, ADMIN_SECRET } from "../../hasura-config.js";
import axios from "axios";

export const getUserPassword = async (username) => {
    return await axios.post(API_KEY, {
        query: `query getUserPassword($name: String) {
            users(where: {name: {_eq: $name}}) {
              password
            }
          }`,
        variables: {
          name: username
        }
      }, {
          headers: {
            'content-type': 'application/json',
            'x-hasura-admin-secret': ADMIN_SECRET
          }
        })
}

export const userInfo = async (username) => {
    return await axios.post(API_KEY, {
        query: `query getUserPassword($name: String) {
            users(where: {name: {_eq: $name}}) {
              id,
              name
            }
          }`,
        variables: {
          name: username
        }
      }, {
          headers: {
            'content-type': 'application/json',
            'x-hasura-admin-secret': ADMIN_SECRET
          }
        })
}