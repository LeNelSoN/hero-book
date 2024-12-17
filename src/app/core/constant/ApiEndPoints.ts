export enum ApiEndPoints {
  BASE_URL = "http://localhost:8080",
  GET_STORY = `${ApiEndPoints.BASE_URL}/story`,
  LOGIN = `${ApiEndPoints.BASE_URL}/auth/login`,
  REFRESH = `${ApiEndPoints.BASE_URL}/auth/refresh`
}
