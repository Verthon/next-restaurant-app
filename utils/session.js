import { getSession } from 'next-auth/client'

export const checkIfAdmin = async (req, res) => {
  const session = await getSession({ req })

  if (!session) {
    res.setHeader("location", "/api/auth/signin");
    res.statusCode = 302;
    res.end();
    return;
  }

  return true;

}
