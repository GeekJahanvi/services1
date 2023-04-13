class Queries {
  GET_ALL_PUBLIC_IDS = `query get_doctors_public_ids($user_id: uuid! ) {
        users(where: {id: {_eq: $user_id}}) {
          profile_picture_public_id
          certificates {
            certificate_public_id
          }
          medical_schools {
            school_public_id
          }
          user_educations {
            fellowship1_public_id
            fellowship2_public_id
            state_public_id
          }
        }
      }`;
}

export default new Queries();
