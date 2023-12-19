import { gql } from '@apollo/client'

const GET_CUSTOMS= gql`
query GetAllCustomFields(
    $business_id: uuid!, $limit: Int = 25, $offset: Int = 0
   ) {
     apps_custom_field(where: {business_id: {_eq: $business_id}}, limit: $limit, offset: $offset, order_by: {created_at: desc}) {
       id
       name
       description
       key
       type
       contact {
         id
         is_agent
         contact_profiles {
           name
         }
       }    
       created_at    
     }
   }
`

const CREATE_CUSTOM = gql`
mutation CreateCustomField(
    $custom_field: apps_custom_field_insert_input!  
  ) {
    insert_apps_custom_field_one(object: $custom_field, on_conflict: { constraint: custom_field_pkey, update_columns: id }) {
      id    
      name
      type
      description
      key
      created_at
    }
  }
`

const UPDATE_CUSTOM = gql`
mutation UpdateCustomField(
    $custom_field_id: Int!,
    $custom_field_update: apps_custom_field_set_input!,  
  ) {
    update_apps_custom_field_by_pk(pk_columns: {id: $custom_field_id}, _set: $custom_field_update) { 
      id       
      name
      description
      key
      type
      created_at
    }
  }
`

const DELETE_CUSTOM_ATT = gql`
mutation DeleteQuickReply($custom_field_id: Int!) {
    delete_apps_custom_field(where: {id: {_eq: $custom_field_id}}) {
      affected_rows
    }  
  }
`

export {GET_CUSTOMS, CREATE_CUSTOM, UPDATE_CUSTOM, DELETE_CUSTOM_ATT} ;

