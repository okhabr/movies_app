interface Data {
  url: string 
}

interface Picture {
  data: Data
}

export interface Login {
  loggedIn: boolean;
  name: string | null;
  picture: Picture;
  accessToken: string | null
}
