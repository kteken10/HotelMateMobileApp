
import { createSlice } from "@reduxjs/toolkit"

export type MedicalRecordState = Record<string, any>

const initialState: MedicalRecordState = {}

export const medicalRecordSlice = createSlice({
  name: "medical_record",
  initialState,
  reducers: {
    create_medical_record: (state, action) => {
      const payload = action.payload
      state[payload.id] = action.payload
      return state
    },

    update_medical_record: (state, action) => {
      const payload = action.payload
      state[payload.id] = { ...state[payload.id], ...action.payload }
      return state
    },

    add_medical_record_contact: (state, action) => {
      const payload = action.payload
      const emergencyInfos = state[payload.id]?.emergencyInfos

      console.log("inside reducer here", action.payload, state[payload.id])

      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      if (state[payload.id] && emergencyInfos?.length) {
        state[payload.id] = {
          ...state[payload.id],
          emergencyInfos: [
            ...state[payload.id].emergencyInfos,
            payload.contactInfo
          ]
        }
      } else {
        state[payload.id] = {
          // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
          ...(state[payload.id] || {}),
          emergencyInfos: [payload.contactInfo]
        }
      }
      return state
    }
  }
})

export const {
  create_medical_record,
  update_medical_record,
  add_medical_record_contact
} = medicalRecordSlice.actions

export default medicalRecordSlice.reducer
