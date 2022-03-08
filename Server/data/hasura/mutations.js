import { API_KEY, ADMIN_SECRET } from "../../hasura-config.js";
import axios from "axios";

export const regUser = async (username, password) => {
    return await axios.post(API_KEY, {
        query: `mutation MyMutation($name: String, $password: String) {
            insert_users(objects: {name: $name, password: $password}) {
              returning {
                name
              }
            }
          }`,
        variables: {
          name: username,
          password: password
        }
      }, {
          headers: {
            'content-type': 'application/json',
            'x-hasura-admin-secret': ADMIN_SECRET
          }
        })
}