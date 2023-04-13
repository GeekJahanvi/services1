class Mutations {
  ADD_MEDICAL_DOCUMENT = `mutation add_medical_documents($user_id: uuid!, $document_name: String!, $document_url: String! , $document_public_id: String!) {
          insert_medical_documents(objects: {user_id: $user_id, document_name: $document_name, document_url: $document_url, document_public_id: $document_public_id}) {
            returning {
              id
              user_id
              document_name
              document_url
              document_public_id
            }
          }
        }`;
}
export default new Mutations();
