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

export const insertBook = async (username, password) => {
  return await axios.post(API_KEY, {
      query: `mutation MyMutation($users_id: Int, $authors: String, $desc: String, $image: String, $isbn13: String, $pdf: String, $pages: String, $price: String, $publisher: String, $rating: String, $subtitle: String, $title: String, $url: String, $year: String) {
        insert_books_one(object: {users_id: $users_id, authors: $authors, desc: $desc, image: $image, isbn13: $isbn13, pages: $pages, pdf: $pdf, price: $price, publisher: $publisher, rating: $rating, subtitle: $subtitle, title: $title, url: $url, year: $year}) {
          title
        }
      }`,
      variables: {
        users_id: username,
        authors: password,
        authors: password,
        authors: password,
        authors: password,
        authors: password,
        authors: password,
      }
    }, {
        headers: {
          'content-type': 'application/json',
          'x-hasura-admin-secret': ADMIN_SECRET
        }
      })
}