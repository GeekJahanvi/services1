class Mutations {
  DELETE_DOCTOR = `mutation delete_doctor($user_id: uuid!, $_eq1: Int = 3) {
        delete_users(where: {id: {_eq: $user_id}, _and: {role_id: {_eq: $_eq1}}}) {
          returning {
            id
            first_name
            last_name
          }
        }
      }`;
}

export default new Mutations();
