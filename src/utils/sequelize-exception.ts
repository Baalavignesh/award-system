export interface SequelizeError {
  message: string
  type: string
  instance: {
    id: string
    name: string
    status: string
    updatedAt: string
    createdAt: string
  }
  value: string
}

export interface SequelizeException {
  errors: SequelizeError[]
}

export const formatException = (exception: SequelizeException): any => {
  return {
    message: exception.errors[0].message,
    type: exception.errors[0].type,
    data: exception.errors[0].instance,
    valueThatCauseError: exception.errors[0].value
  }
}
